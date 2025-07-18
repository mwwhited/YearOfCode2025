import { useState, useEffect } from 'react';
import { monitoring } from '../utils/monitoring';
import type { MonitoringEvent, PerformanceMetric } from '../utils/monitoring';

const MonitoringDashboard = () => {
  const [events, setEvents] = useState<MonitoringEvent[]>([]);
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateData = () => {
      setEvents(monitoring.getEvents());
      setMetrics(monitoring.getMetrics());
      setSummary(monitoring.getSummary());
    };

    updateData();
    const interval = setInterval(updateData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const getEventColorClass = (level: string) => {
    switch (level) {
      case 'error': return 'border-red-500';
      case 'warn': return 'border-yellow-500';
      default: return 'border-green-500';
    }
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 text-white border-none py-2.5 px-4 rounded-full cursor-pointer text-xs shadow-lg hover:bg-blue-700 transition-colors"
        >
          📊 Monitoring
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 w-96 h-[500px] bg-white border border-gray-300 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col">
      <div className="py-2.5 px-4 bg-gray-50 border-b border-gray-300 flex justify-between items-center">
        <h3 className="m-0 text-base font-semibold text-gray-800">Monitoring Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-transparent border-none text-lg cursor-pointer text-gray-600 hover:text-gray-800"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-auto p-2.5">
        {summary && (
          <div style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Summary</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
              <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold' }}>Events</div>
                <div>Total: {summary.totalEvents}</div>
                <div style={{ color: '#dc3545' }}>Errors: {summary.errorCount}</div>
                <div style={{ color: '#ffc107' }}>Warnings: {summary.warnCount}</div>
              </div>
              <div style={{ backgroundColor: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold' }}>Metrics</div>
                <div>Total: {summary.totalMetrics}</div>
                <div>Components: {metrics.filter(m => m.name.includes('component')).length}</div>
                <div>API Calls: {metrics.filter(m => m.name.includes('api')).length}</div>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Recent Events</h4>
          <div style={{ maxHeight: '150px', overflow: 'auto' }}>
            {events.slice(-10).reverse().map((event, index) => (
              <div key={index} className={`text-xs p-1 px-2 my-0.5 bg-gray-50 rounded border-l-4 ${getEventColorClass(event.level)}`}>
                <div className="font-bold text-gray-700">
                  {formatTimestamp(event.timestamp)} - {event.name}
                </div>
                {event.data && (
                  <div className="text-gray-600 mt-0.5">
                    {JSON.stringify(event.data, null, 2).slice(0, 100)}...
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Performance Metrics</h4>
          <div style={{ maxHeight: '150px', overflow: 'auto' }}>
            {metrics.slice(-10).reverse().map((metric, index) => (
              <div key={index} style={{
                fontSize: '11px',
                padding: '4px 8px',
                margin: '2px 0',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>{metric.name}</span>
                <span style={{ fontWeight: 'bold' }}>
                  {metric.value.toFixed(2)}{metric.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: '10px',
        borderTop: '1px solid #ddd',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button
            onClick={() => monitoring.clear()}
            style={{
              fontSize: '11px',
              padding: '4px 8px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Clear Data
          </button>
          <button
            onClick={() => monitoring.setEnabled(!monitoring.getSummary())}
            style={{
              fontSize: '11px',
              padding: '4px 8px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Toggle Monitoring
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;
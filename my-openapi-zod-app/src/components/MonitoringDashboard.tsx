import { useState, useEffect } from 'react';
import { monitoring } from '../utils/monitoring';
import type { MonitoringEvent, PerformanceMetric } from '../utils/monitoring';

const MonitoringDashboard = () => {
  const [events, setEvents] = useState<MonitoringEvent[]>([]);
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [summary, setSummary] = useState<{
    totalEvents: number;
    errorCount: number;
    warnCount: number;
    totalMetrics: number;
  } | null>(null);
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

  const getEventColor = (level: string) => {
    switch (level) {
      case 'error': return '#dc3545';
      case 'warn': return '#ffc107';
      default: return '#28a745';
    }
  };

  if (!isVisible) {
    return (
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        zIndex: 1000 
      }}>
        <button
          onClick={() => setIsVisible(true)}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          📊 Monitoring
        </button>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '400px',
      height: '500px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      zIndex: 1000,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        padding: '10px 15px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>Monitoring Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '10px' }}>
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
              <div key={index} style={{
                fontSize: '11px',
                padding: '4px 8px',
                margin: '2px 0',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                borderLeft: `3px solid ${getEventColor(event.level)}`
              }}>
                <div style={{ fontWeight: 'bold' }}>
                  {formatTimestamp(event.timestamp)} - {event.name}
                </div>
                {event.data && (
                  <div style={{ color: '#666', marginTop: '2px' }}>
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
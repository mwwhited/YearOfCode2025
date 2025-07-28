import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useAuth } from '../hooks/useAuth';
import { useApplicationInsights } from '@/hooks/useApplicationInsights';

interface DashboardData {
  totalProducts: number;
  totalCategories: number;
  totalIngredients: number;
  totalAllergens: number;
  recentActivity: unknown[];
}

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { trackPageView, trackFeatureUsage, trackPerformanceMetric, trackBusinessEvent } = useApplicationInsights();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const startTime = performance.now();
      
      try {
        // Track page view
        trackPageView('Dashboard', '/dashboard', {
          userId: user?.id,
          userRoles: user?.roles?.join(','),
        });

        // Mock data for now - replace with actual API call
        const mockData: DashboardData = {
          totalProducts: 1250,
          totalCategories: 45,
          totalIngredients: 320,
          totalAllergens: 14,
          recentActivity: []
        };
        
        setDashboardData(mockData);

        // Track successful data load
        const loadTime = performance.now() - startTime;
        trackPerformanceMetric('DashboardLoadTime', loadTime, {
          dataPointsLoaded: '4',
          userId: user?.id,
        });

        trackBusinessEvent('DashboardViewed', {
          userId: user?.id,
          userRoles: user?.roles?.join(','),
          totalProducts: mockData.totalProducts.toString(),
          loadTimeMs: loadTime.toString(),
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        const loadTime = performance.now() - startTime;
        trackPerformanceMetric('DashboardLoadTime', loadTime, {
          success: 'false',
          userId: user?.id,
        });
      }
    };

    fetchDashboardData();
  }, [user?.id, user?.roles, trackPageView, trackPerformanceMetric, trackBusinessEvent]);

  const chartData = {
    labels: ['Products', 'Categories', 'Ingredients', 'Allergens'],
    datasets: [
      {
        data: [
          dashboardData?.totalProducts || 0,
          dashboardData?.totalCategories || 0,
          dashboardData?.totalIngredients || 0,
          dashboardData?.totalAllergens || 0
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ]
      }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  const recentActivityData = [
    { id: 1, action: 'Product Added', item: 'Organic Apples', user: 'John Doe', timestamp: '2 hours ago' },
    { id: 2, action: 'Category Updated', item: 'Fruits', user: 'Jane Smith', timestamp: '4 hours ago' },
    { id: 3, action: 'Ingredient Reviewed', item: 'Vitamin C', user: 'Mike Johnson', timestamp: '6 hours ago' },
  ];

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-600">Welcome back, {user?.name || user?.username}!</p>
      </div>

      <div className="grid">
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {dashboardData?.totalProducts || 0}
            </div>
            <div className="text-600">Total Products</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {dashboardData?.totalCategories || 0}
            </div>
            <div className="text-600">Categories</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {dashboardData?.totalIngredients || 0}
            </div>
            <div className="text-600">Ingredients</div>
          </Card>
        </div>
        
        <div className="col-12 md:col-3">
          <Card className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {dashboardData?.totalAllergens || 0}
            </div>
            <div className="text-600">Allergens</div>
          </Card>
        </div>
      </div>

      <div className="grid mt-4">
        <div className="col-12 md:col-6">
          <Card title="Data Overview">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full" />
          </Card>
        </div>
        
        <div className="col-12 md:col-6">
          <Card title="Recent Activity">
            <DataTable value={recentActivityData} className="p-datatable-sm">
              <Column field="action" header="Action" />
              <Column field="item" header="Item" />
              <Column field="user" header="User" />
              <Column field="timestamp" header="When" />
            </DataTable>
          </Card>
        </div>
      </div>

      <div className="mt-4">
        <Card title="Quick Actions">
          <div className="flex gap-2 flex-wrap">
            <Button 
              label="Add Product" 
              icon="pi pi-plus" 
              onClick={() => {
                trackFeatureUsage('QuickAction.AddProduct', {
                  userId: user?.id,
                  source: 'dashboard',
                });
              }}
            />
            <Button 
              label="Add Category" 
              icon="pi pi-tags" 
              className="p-button-secondary"
              onClick={() => {
                trackFeatureUsage('QuickAction.AddCategory', {
                  userId: user?.id,
                  source: 'dashboard',
                });
              }}
            />
            <Button 
              label="View Reports" 
              icon="pi pi-chart-bar" 
              className="p-button-outlined"
              onClick={() => {
                trackFeatureUsage('QuickAction.ViewReports', {
                  userId: user?.id,
                  source: 'dashboard',
                });
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
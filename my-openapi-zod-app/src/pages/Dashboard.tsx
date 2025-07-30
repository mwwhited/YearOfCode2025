import React, { useEffect, useState } from 'react';
import { Card, Chart, DataTable, Column, Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { useApplicationInsights } from '@/hooks/useApplicationInsights';
import DashBoardClient from '@/api/GreenOnion/Clients/DashBoardClient';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import IngredientClient from '@/api/GreenOnion/Clients/IngredientClient';
import AllergenClient from '@/api/GreenOnion/Clients/AllergenClient';

interface DashboardData {
  totalProducts: number;
  totalCategories: number;
  totalIngredients: number;
  totalAllergens: number;
  recentActivity: unknown[];
}

interface DashboardApiPayload {
  totalProduct?: number;
  totalCategory?: number;
  totalIngredient?: number;
  totalAllergen?: number;
  [key: string]: unknown;
}

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { trackPageView, trackFeatureUsage, trackPerformanceMetric, trackBusinessEvent } = useApplicationInsights();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const startTime = performance.now();
      
      try {
        // Track page view
        trackPageView('Dashboard', '/dashboard', {
          userId: user?.id,
          userRoles: user?.roles?.join(','),
        });

        // Fetch dashboard data from API
        const dashboardClient = new DashBoardClient();
        const dashboardResponse = await dashboardClient.GetDashBoardTotalCountList({
          userId: user?.id ? Number(user.id) : undefined
        });

        if (dashboardResponse?.success && dashboardResponse.payload) {
          const payload = dashboardResponse.payload as DashboardApiPayload;
          const data: DashboardData = {
            totalProducts: payload.totalProduct || 0,
            totalCategories: payload.totalCategory || 0,
            totalIngredients: payload.totalIngredient || 0,
            totalAllergens: payload.totalAllergen || 0,
            recentActivity: []
          };
          setDashboardData(data);
        } else {
          // If dashboard API fails, try to fetch counts individually
          const [productCount, categoryCount, ingredientCount, allergenCount] = await Promise.all([
            fetchProductCount(),
            fetchCategoryCount(),
            fetchIngredientCount(),
            fetchAllergenCount()
          ]);

          const data: DashboardData = {
            totalProducts: productCount,
            totalCategories: categoryCount,
            totalIngredients: ingredientCount,
            totalAllergens: allergenCount,
            recentActivity: []
          };
          setDashboardData(data);
        }

        // Track successful data load
        const loadTime = performance.now() - startTime;
        trackPerformanceMetric('DashboardLoadTime', loadTime, {
          dataPointsLoaded: '4',
          userId: user?.id,
        });

        trackBusinessEvent('DashboardViewed', {
          userId: user?.id,
          userRoles: user?.roles?.join(','),
          totalProducts: dashboardData?.totalProducts?.toString() || '0',
          loadTimeMs: loadTime.toString(),
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError('Failed to load dashboard data');
        const loadTime = performance.now() - startTime;
        trackPerformanceMetric('DashboardLoadTime', loadTime, {
          success: 'false',
          userId: user?.id,
        });
        setLoading(false);
      }
    };

    // Helper functions to fetch individual counts
    const fetchProductCount = async (): Promise<number> => {
      try {
        const client = new ProductClient();
        const response = await client.Query({ body: { pageSize: 1 } });
        return Number(response?.totalRowCount) || 0;
      } catch {
        return 0;
      }
    };

    const fetchCategoryCount = async (): Promise<number> => {
      try {
        const client = new CategoryClient();
        const response = await client.Query({ body: { pageSize: 1 } });
        return Number(response?.totalRowCount) || 0;
      } catch {
        return 0;
      }
    };

    const fetchIngredientCount = async (): Promise<number> => {
      try {
        const client = new IngredientClient();
        const response = await client.Query({ body: { pageSize: 1 } });
        return Number(response?.totalRowCount) || 0;
      } catch {
        return 0;
      }
    };

    const fetchAllergenCount = async (): Promise<number> => {
      try {
        const client = new AllergenClient();
        const response = await client.Query({ body: { pageSize: 1 } });
        return Number(response?.totalRowCount) || 0;
      } catch {
        return 0;
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

  if (loading) {
    return (
      <div className="flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
        <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Card className="border-red-500">
          <div className="text-center">
            <i className="pi pi-exclamation-triangle text-red-500 text-4xl mb-3"></i>
            <h3 className="text-red-500">{error}</h3>
            <Button 
              label="Retry" 
              icon="pi pi-refresh" 
              onClick={() => window.location.reload()}
              className="mt-3"
            />
          </div>
        </Card>
      </div>
    );
  }

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
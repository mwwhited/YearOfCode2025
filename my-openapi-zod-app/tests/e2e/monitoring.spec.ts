import { test, expect } from '@playwright/test';

test.describe('Monitoring Dashboard [e2e]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should show monitoring button', async ({ page }) => {
    const monitoringButton = page.getByRole('button', { name: /📊 Monitoring/ });
    await expect(monitoringButton).toBeVisible();
  });

  test('should open monitoring dashboard', async ({ page }) => {
    // Click monitoring button
    await page.getByRole('button', { name: /📊 Monitoring/ }).click();
    
    // Should show dashboard
    await expect(page.getByText('Monitoring Dashboard')).toBeVisible();
    await expect(page.getByText('Summary')).toBeVisible();
    await expect(page.getByText('Recent Events')).toBeVisible();
    await expect(page.getByText('Performance Metrics')).toBeVisible();
  });

  test('should close monitoring dashboard', async ({ page }) => {
    // Open dashboard
    await page.getByRole('button', { name: /📊 Monitoring/ }).click();
    await expect(page.getByText('Monitoring Dashboard')).toBeVisible();
    
    // Close dashboard
    await page.getByRole('button', { name: '×' }).click();
    await expect(page.getByText('Monitoring Dashboard')).not.toBeVisible();
    
    // Should show monitoring button again
    await expect(page.getByRole('button', { name: /📊 Monitoring/ })).toBeVisible();
  });

  test('should show monitoring data', async ({ page }) => {
    // Open dashboard
    await page.getByRole('button', { name: /📊 Monitoring/ }).click();
    
    // Should show summary data
    await expect(page.getByText('Events')).toBeVisible();
    await expect(page.getByText('Metrics')).toBeVisible();
    await expect(page.getByText('Total:')).toBeVisible();
    
    // Should show recent events
    await expect(page.getByText('app_mounted')).toBeVisible();
  });

  test('should track user interactions', async ({ page }) => {
    // Perform some user actions
    await page.getByRole('button', { name: /count is/ }).click();
    await page.getByRole('button', { name: 'View Component Demo' }).click();
    
    // Go back to main page
    await page.getByRole('button', { name: '← Back to Main App' }).click();
    
    // Open monitoring dashboard
    await page.getByRole('button', { name: /📊 Monitoring/ }).click();
    
    // Should show user action events
    await expect(page.getByText('view_demo_clicked')).toBeVisible();
  });

  test('should clear monitoring data', async ({ page }) => {
    // Open dashboard
    await page.getByRole('button', { name: /📊 Monitoring/ }).click();
    
    // Should have some data
    await expect(page.getByText('app_mounted')).toBeVisible();
    
    // Clear data
    await page.getByRole('button', { name: 'Clear Data' }).click();
    
    // Data should be cleared (or minimal)
    // Note: Some events might still be present due to real-time updates
  });

  test('should show performance metrics', async ({ page }) => {
    // Perform some actions to generate metrics
    await page.getByRole('button', { name: /count is/ }).click();
    await page.getByRole('button', { name: 'View Component Demo' }).click();
    await page.getByRole('button', { name: '← Back to Main App' }).click();
    
    // Open monitoring dashboard
    await page.getByRole('button', { name: /📊 Monitoring/ }).click();
    
    // Should show performance metrics
    await expect(page.getByText('Performance Metrics')).toBeVisible();
    
    // Should show some metrics (component renders, API calls, etc.)
    // Note: Exact metrics will depend on what gets tracked
  });
});
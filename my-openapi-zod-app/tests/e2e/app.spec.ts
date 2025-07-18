import { test, expect } from '@playwright/test';

test.describe('Main Application [e2e]', () => {
  test('should load the main page', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'React + TypeScript + Zod + OpenAPI PoC' })).toBeVisible();
    
    // Check counter button
    await expect(page.getByRole('button', { name: /count is/ })).toBeVisible();
    
    // Check demo button
    await expect(page.getByRole('button', { name: 'View Component Demo' })).toBeVisible();
  });

  test('should increment counter', async ({ page }) => {
    await page.goto('/');
    
    const counterButton = page.getByRole('button', { name: /count is/ });
    await expect(counterButton).toContainText('count is 0');
    
    await counterButton.click();
    await expect(counterButton).toContainText('count is 1');
    
    await counterButton.click();
    await expect(counterButton).toContainText('count is 2');
  });

  test('should show loading state initially', async ({ page }) => {
    await page.goto('/');
    
    // Should show loading initially
    await expect(page.getByText('Loading roles...')).toBeVisible();
  });

  test('should navigate to demo page', async ({ page }) => {
    await page.goto('/');
    
    // Click demo button
    await page.getByRole('button', { name: 'View Component Demo' }).click();
    
    // Should show demo page
    await expect(page.getByRole('heading', { name: 'Component Demo' })).toBeVisible();
    await expect(page.getByText('Enhanced Data Grid with Sorting & Filtering')).toBeVisible();
    
    // Should show back button
    await expect(page.getByRole('button', { name: '← Back to Main App' })).toBeVisible();
  });

  test('should navigate back from demo page', async ({ page }) => {
    await page.goto('/');
    
    // Go to demo page
    await page.getByRole('button', { name: 'View Component Demo' }).click();
    await expect(page.getByRole('heading', { name: 'Component Demo' })).toBeVisible();
    
    // Go back to main page
    await page.getByRole('button', { name: '← Back to Main App' }).click();
    await expect(page.getByRole('heading', { name: 'React + TypeScript + Zod + OpenAPI PoC' })).toBeVisible();
  });

  test('should show monitoring dashboard', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Look for monitoring button
    const monitoringButton = page.getByRole('button', { name: /📊 Monitoring/ });
    await expect(monitoringButton).toBeVisible();
    
    // Click monitoring button
    await monitoringButton.click();
    
    // Should show monitoring dashboard
    await expect(page.getByText('Monitoring Dashboard')).toBeVisible();
  });
});
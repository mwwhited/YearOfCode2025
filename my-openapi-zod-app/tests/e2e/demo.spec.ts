import { test, expect } from '@playwright/test';

test.describe('Demo Page [e2e]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'View Component Demo' }).click();
    await expect(page.getByRole('heading', { name: 'Component Demo' })).toBeVisible();
  });

  test('should show user data grid', async ({ page }) => {
    // Should show data grid with users
    await expect(page.getByText('John Doe')).toBeVisible();
    await expect(page.getByText('Jane Smith')).toBeVisible();
    await expect(page.getByText('Bob Johnson')).toBeVisible();
    
    // Should show column headers
    await expect(page.getByText('Id')).toBeVisible();
    await expect(page.getByText('Name')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();
    await expect(page.getByText('Age')).toBeVisible();
    await expect(page.getByText('Active')).toBeVisible();
  });

  test('should filter data using global search', async ({ page }) => {
    // Use global search
    const searchInput = page.getByPlaceholder('Search all columns...');
    await expect(searchInput).toBeVisible();
    
    await searchInput.fill('John');
    
    // Should show only John Doe
    await expect(page.getByText('John Doe')).toBeVisible();
    await expect(page.getByText('Jane Smith')).not.toBeVisible();
    await expect(page.getByText('Showing 1 of 5 rows')).toBeVisible();
    
    // Clear search
    await searchInput.fill('');
    await expect(page.getByText('Jane Smith')).toBeVisible();
    await expect(page.getByText('Showing 5 of 5 rows')).toBeVisible();
  });

  test('should sort data by clicking column headers', async ({ page }) => {
    // Click on Name column to sort
    const nameHeader = page.getByRole('button', { name: /Name/ });
    await nameHeader.click();
    
    // Should show sorting indicator
    await expect(page.locator('text=/Name.*↑/')).toBeVisible();
    
    // Click again to reverse sort
    await nameHeader.click();
    await expect(page.locator('text=/Name.*↓/')).toBeVisible();
  });

  test('should show add user form', async ({ page }) => {
    // Click Add User button
    await page.getByRole('button', { name: 'Add User' }).click();
    
    // Should show form
    await expect(page.getByText('Add New User')).toBeVisible();
    await expect(page.getByLabelText('Name')).toBeVisible();
    await expect(page.getByLabelText('Email')).toBeVisible();
    await expect(page.getByLabelText('Age')).toBeVisible();
    await expect(page.getByLabelText('Active')).toBeVisible();
    
    // Should show Cancel button
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  });

  test('should add new user', async ({ page }) => {
    // Open form
    await page.getByRole('button', { name: 'Add User' }).click();
    
    // Fill form
    await page.getByLabelText('Name').fill('Test User');
    await page.getByLabelText('Email').fill('test@example.com');
    await page.getByLabelText('Age').fill('25');
    await page.getByLabelText('Active').check();
    
    // Submit form
    await page.getByRole('button', { name: 'Create User' }).click();
    
    // Should show new user in grid
    await expect(page.getByText('Test User')).toBeVisible();
    await expect(page.getByText('test@example.com')).toBeVisible();
    await expect(page.getByText('Showing 6 of 6 rows')).toBeVisible();
  });

  test('should show form validation errors', async ({ page }) => {
    // Open form
    await page.getByRole('button', { name: 'Add User' }).click();
    
    // Try to submit empty form
    await page.getByRole('button', { name: 'Create User' }).click();
    
    // Should show validation errors
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Invalid email address')).toBeVisible();
  });

  test('should clear all users', async ({ page }) => {
    // Click Clear All button
    await page.getByRole('button', { name: 'Clear All' }).click();
    
    // Should show no data message
    await expect(page.getByText('No data matches your filters')).toBeVisible();
    await expect(page.getByText('Showing 0 of 0 rows')).toBeVisible();
  });

  test('should show component features', async ({ page }) => {
    // Should show feature sections
    await expect(page.getByText('GenericDataGrid')).toBeVisible();
    await expect(page.getByText('GenericForm')).toBeVisible();
    await expect(page.getByText('Error Boundaries')).toBeVisible();
    
    // Should show feature lists
    await expect(page.getByText('Automatic column generation from Zod schemas')).toBeVisible();
    await expect(page.getByText('Real-time validation')).toBeVisible();
    await expect(page.getByText('Graceful error handling')).toBeVisible();
  });

  test('should show usage statistics', async ({ page }) => {
    // Should show stats
    await expect(page.getByText('Total Users')).toBeVisible();
    await expect(page.getByText('Active Users')).toBeVisible();
    await expect(page.getByText('Average Age')).toBeVisible();
    
    // Should show actual numbers
    await expect(page.getByText('5')).toBeVisible(); // Total users
  });
});
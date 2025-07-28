# PrimeReact Theme Configuration for Green Onion Application

## Overview

This document provides guidance for implementing PrimeReact components in the Green Onion application while maintaining design consistency with the existing style system.

## Closest PrimeReact Theme Match

**Recommended Theme: Lara Light Teal**

Based on analysis of the application's current styles, the **Lara Light Teal** theme is the closest match to the Green Onion application's design language:

- **Primary Color**: Both use green as the primary color scheme
- **Modern Design**: Clean, professional appearance suitable for enterprise applications
- **Component Styling**: Rounded corners and subtle shadows match existing design patterns
- **Typography**: Clean, readable fonts that align with the application's font stack

## Application Color Analysis

### Current Application Colors

| Color Role | Hex Value | HSL | Usage |
|------------|-----------|-----|-------|
| **Primary Green** | `#48953e` | `HSL(113, 42%, 44%)` | Primary buttons, active states, branding |
| **Secondary Green** | `#5c9d3e` | `HSL(120, 44%, 43%)` | Secondary actions, hover states |
| **Blue Accent** | `#2154bf` | `HSL(225, 70%, 44%)` | Links, secondary actions |
| **Text Primary** | `#464e5f` | `HSL(225, 13%, 33%)` | Main content text |
| **Text Secondary** | `#6d6d6d` | `HSL(0, 0%, 43%)` | Secondary text |
| **Text Muted** | `#a2a8b6` | `HSL(225, 13%, 67%)` | Placeholder, disabled text |
| **Border** | `#edeef1` | `HSL(225, 13%, 93%)` | Borders, dividers |
| **Background** | `#edeef1` | `HSL(225, 13%, 93%)` | Page background |

### Border Radius Standards

- **Small Radius**: `0.3125rem` (5px) - Form controls, small elements
- **Standard Radius**: `0.625rem` (10px) - Buttons, cards, panels

## Implementation Guide

### 1. Theme Installation

```bash
npm install primereact primeicons
```

### 2. CSS Import Order

Import in this exact order in your main CSS file or component:

```css
/* 1. PrimeReact Theme */
@import 'primereact/resources/themes/lara-light-teal/theme.css';

/* 2. PrimeReact Core CSS */
@import 'primereact/resources/primereact.min.css';

/* 3. PrimeIcons */
@import 'primeicons/primeicons.css';

/* 4. Custom Overrides */
@import './greenonion.css';
```

### 3. Component Integration Examples

#### Buttons

```jsx
import { Button } from 'primereact/button';

// Primary green button (matches application)
<Button 
  label="Create" 
  className="p-button-success green-button"
  icon="pi pi-plus" 
/>

// Secondary grey button
<Button 
  label="Cancel" 
  className="p-button-secondary grey-button"
  icon="pi pi-times" 
/>

// Danger button
<Button 
  label="Delete" 
  className="p-button-danger red-button"
  icon="pi pi-trash" 
/>
```

#### DataTable (Replacement for DataGrid)

```jsx
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

<DataTable 
  value={data}
  paginator
  rows={20}
  className="p-datatables-gridlines"
  stripedRows
  showGridlines
>
  <Column field="name" header="Name" sortable />
  <Column field="status" header="Status" body={statusTemplate} />
  <Column field="actions" header="Actions" body={actionTemplate} />
</DataTable>
```

#### Form Controls

```jsx
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

// Text Input
<InputText 
  placeholder="Enter name"
  className="form-control" 
/>

// Dropdown
<Dropdown 
  options={options}
  placeholder="Select option"
  className="form-select"
/>
```

#### Panels and Cards

```jsx
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';

// Panel with header
<Panel header="Settings" className="dis_main_box">
  <p>Panel content</p>
</Panel>

// Card
<Card title="Title" className="dis_main_box">
  <p>Card content</p>
</Card>
```

## CSS Classes for Consistency

### Typography Classes (from application)

```css
.f-12-400  /* 12px, weight 400 */
.f-12-600  /* 12px, weight 600 */
.f-14-400  /* 14px, weight 400 */
.f-14-600  /* 14px, weight 600 */
.f-16-400  /* 16px, weight 400 */
.f-18-600  /* 18px, weight 600 */
```

### Border Radius Classes

```css
.br-5   /* 5px border radius */
.br-10  /* 10px border radius */
```

### Color Utility Classes

```css
.green-bg     /* Green background */
.blue-bg      /* Blue background */
.text-green   /* Green text */
.text-blue    /* Blue text */
.text-muted   /* Muted text color */
```

### Status Badge Classes

```css
.badge-active      /* Green background for active status */
.badge-inactive    /* Red background for inactive status */
.badge-has-users   /* Blue background for users indicator */
.badge-no-users    /* Grey background for no users */
```

## Component Migration Strategy

### Priority 1: High-Impact Components
- **DataTable**: Replace existing DataGrid with PrimeReact DataTable
- **Buttons**: Standardize all buttons using PrimeReact Button component
- **Form Controls**: Replace dropdowns and inputs with PrimeReact equivalents

### Priority 2: Layout Components
- **Panel/Card**: Replace existing panel wrappers
- **Menu/Navigation**: Use PrimeReact MenuBar for navigation
- **Dialog**: Replace custom modals with PrimeReact Dialog

### Priority 3: Advanced Components
- **Charts**: Use PrimeReact Chart components
- **Calendar**: Date pickers and calendars
- **File Upload**: Replace custom upload components

## Customization Variables

The `PRIME_STYLES.css` file includes CSS custom properties that can be adjusted:

```css
:root {
  --primary-color: #48953e;        /* Main green color */
  --text-color: #464e5f;           /* Primary text */
  --text-color-secondary: #6d6d6d; /* Secondary text */
  --surface-border: #edeef1;       /* Border color */
  --border-radius: 0.625rem;       /* Standard border radius */
}
```

## Alternative Theme Options

If Lara Light Teal doesn't meet all requirements, consider these alternatives:

1. **Lara Light Blue**: Similar modern design with blue primary
2. **Bootstrap4 Light Blue**: If Bootstrap consistency is preferred
3. **Saga Green**: More vibrant green theme option
4. **Custom Theme**: Build custom theme using PrimeReact's design tokens

## Best Practices

### 1. Consistent Imports
Always import PrimeReact CSS files in the correct order to avoid style conflicts.

### 2. Class Naming
- Use PrimeReact's built-in classes when possible
- Prefix custom classes to avoid conflicts
- Maintain existing application class names for consistency

### 3. Component Consistency
- Use the same PrimeReact components across similar use cases
- Apply consistent props and styling
- Follow the application's existing patterns for state management

### 4. Testing
- Test components in different screen sizes
- Verify color contrast meets accessibility standards  
- Test with the application's existing themes if theme switching is implemented

## Migration Checklist

- [ ] Install PrimeReact and PrimeIcons packages
- [ ] Import CSS files in correct order
- [ ] Apply custom styles from PRIME_STYLES.css
- [ ] Replace high-priority components (DataTable, Buttons)
- [ ] Update form components (InputText, Dropdown)
- [ ] Migrate layout components (Panel, Card)
- [ ] Test responsive design
- [ ] Verify accessibility compliance
- [ ] Update documentation and style guides

## Resources

- [PrimeReact Documentation](https://primereact.org/)
- [PrimeReact Theming Guide](https://primereact.org/theming/)
- [PrimeReact GitHub Repository](https://github.com/primefaces/primereact)
- [Application Style Guide](./STYLE_GUIDE.md)
- [Architecture Documentation](./ARCHITECTURE.md)
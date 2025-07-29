- Grids should take IEnumerable<TModel>
- grids should follow the IQueryable<TModel> establisted with 
  - search
  - filter
  - sort 
  - page
- grids should 

- All UI Components should either originate or be wrapped in `@/components/controls`

Bulk edit mode
  Have fields that are editable across multiple items available.
  take primary key of selected records and the model of the values to set. 
  select each entity from DB, update with changes, save back
  result should return {Key, Changed|Not Changed|Not Found}[]
  ??? should bulk edits be queued work or batch processed?

for grids
  funnel filter per column
  flyout panel for filters
  all rule options should be possible

build code generator for list, edit and dropdown
  field groups should be meta tags on backend

setup notification channel for saves
module.exports = {
  '*.{ts,tsx}': [
    'eslint --fix',
    'npm run typecheck',
    'npm run test:unit -- --run --reporter=verbose'
  ],
  '*.{js,jsx,ts,tsx,json,css,md}': [
    'prettier --write'
  ]
};
Package.describe({
  name: 'ivansglazunov:dropdowns-bootstrap-3',
  version: '0.0.1',
  summary: 'The wrapper lookback:dropdowns package for bootstrap 3.',
  git: 'https://github.com/ivansglazunov/meteor-dropdowns-bootstrap-3.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  
  api.use('templating');
  api.use('less');

  api.use('lookback:dropdowns@1.3.0');
  
  api.addFiles('dropdowns.html', 'client');
  api.addFiles('dropdowns.less', 'client');
  api.addFiles('dropdowns.js', 'client');
});
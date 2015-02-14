Package.describe({
  summary: "Meteor Reactive - Full-sized drag & drop event calendar (jQuery plugin - v2.1.1) [unstyled]",
  version: "1.0.0",
  git: "https://github.com/fermuch/meteor-reactive-fullcalendar-unstyled.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('mrt:jquery-ui@1.9.2', 'client');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('reactive-var', 'client');
  api.use('templating', 'client');
  api.addFiles([
      'fullcalendar.min.js',
      'lang-all.js',
      'gcal.js',
      'reactive-fullcalendar.js',
      'reactive-fullcalendar-template.html',
      'reactive-fullcalendar-template.js',
  ],'client');
});

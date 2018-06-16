Package.describe({
  name: 'luixal:bs-iconpicker',
  version: '0.0.1',
  summary: 'BootStrap IconPicker packaged for Meteor',
  git: 'https://github.com/luixal/meteor-bs-iconpicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.6');
  api.use('ecmascript');
  api.use('templating@1.3.2');

  api.addFiles(
    [
      'bootstrap-iconpicker/dist/css/bootstrap-iconpicker.min.css',
      'bootstrap-iconpicker/dist/js/bootstrap-iconpicker-iconset-all.min.js',
      'bootstrap-iconpicker/dist/js/bootstrap-iconpicker.min.js',
      'template/template.html',
      'template/template.js'
    ],
    'client'
  );

  api.mainModule('autoform-bs-iconpicker.js');
});

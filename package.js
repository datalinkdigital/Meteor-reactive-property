Package.describe({
  summary: "Reactive Property is a small, fast reative property class"
});

Package.on_use(function (api) {

  api.use('deps', ['client', 'server']);

  api.export && api.export('ReactiveProperty');
  api.add_files(['reactive-property.js'], ['client', 'server']);
});


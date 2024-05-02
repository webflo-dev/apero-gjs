project('apero', 'c',
	version: '0.1.0',
	meson_version: '>= 0.62.0',
	license: 'GPL-3.0-or-later',
)

dependency('glib-2.0')
dependency('gobject-introspection-1.0', version: '>= 1.49.1')
dependency('gtk4', version :'>=4.5')
gjs = dependency('gjs-1.0', version: '>= 1.73.1')
dependency('libadwaita-1', version: '>=  1.4.4')
dependency('gio-2.0', version: '>= 2.56.0')

app_id = 'apero'
app_prefix = get_option('prefix')
app_libdir = join_paths(app_prefix, get_option('libdir'))
app_extensiondir = join_paths(app_libdir, meson.project_name())
app_datadir = join_paths(app_prefix, get_option('datadir'))
app_pkgdatadir = join_paths(app_datadir, app_id)
app_bindir = join_paths(app_prefix, get_option('bindir'))


subdir('src')



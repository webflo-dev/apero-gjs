gjs_console = gjs.get_variable(pkgconfig: 'gjs_console')

app_conf = configuration_data()
app_conf.set('GJS', gjs_console)
app_conf.set('VERSION', meson.project_version())
app_conf.set('APP_ID', app_id)
app_conf.set('libdir', app_extensiondir)
app_conf.set('datadir', app_datadir)
app_conf.set('prefix', app_prefix)
app_conf.set('resource_path', '/' + app_id)


### TypeScript compilation
tsc = find_program('tsc', required: true)
tsc_out = meson.project_build_root() / 'bundle'
typescript = custom_target(
  'typescript-compile',
  input: files( 'main.ts'	),
  build_by_default: true,
  build_always_stale: true,
  command: [ 
		tsc, '--strict', '--noEmit', 
		'&&', 
		'esbuild' ,'--bundle' ,'@INPUT@', '--outfile=@OUTPUT@', '--format=esm', '--external:resource://*', '--external:gi://*'],
  output: [ 'main.js'],
)

### App launcher 
application = configure_file(
  input: '@0@.in'.format(app_id),
  output: app_id,
  configuration: app_conf,
  install: true,
  install_dir: app_bindir
)

### gresources
gnome = import('gnome')
application_sources = gnome.compile_resources(
	'@0@.src'.format(app_id),
	# '@0@.src.gresource.xml'.format(app_id),
	 configure_file(
    input: '@0@.src.gresource.xml.in'.format(app_id),
    output: '@0@.src.gresource.xml'.format(app_id),
    configuration: app_conf,
  ),
  dependencies: typescript,
  source_dir: tsc_out,
  gresource_bundle: true,
  install: true,
  install_dir: app_pkgdatadir,
)

run_target('run',
  command: application,
  depends: application_sources
)

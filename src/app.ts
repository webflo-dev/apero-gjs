// import Adw from "@girs/adw-1";
// import Adw fromm "gi://Adw?version=1";
import Gtk from "gi://Gtk?version=4.0";
import GObject from "gi://GObject";
import { Bar } from "./bar";
// import Gtk from "gi://Gtk?version=4.0";
// import { DemoWindow } from "./demo";

const App = GObject.registerClass(
	class App extends Gtk.Application {
		private active_window: Gtk.ApplicationWindow | undefined;

		constructor() {
			// super({
			// 	application_id: "org.gnome.Example",
			// 	flags: Gio.ApplicationFlags.DEFAULT_FLAGS,
			// });
			super();

			// const quit_action = new Gio.SimpleAction({ name: "quit" });
			// quit_action.connect("activate", (action) => {
			// 	this.quit();
			// });
			// this.add_action(quit_action);
			// this.set_accels_for_action("app.quit", ["<primary>q"]);

			// const show_about_action = new Gio.SimpleAction({ name: "about" });
			// show_about_action.connect("activate", (action) => {
			// 	const aboutParams = {
			// 		transient_for: this.active_window,
			// 		modal: true,
			// 		program_name: "toto-gtk4",
			// 		logo_icon_name: "org.gnome.Example",
			// 		version: "0.1.0",
			// 		authors: ["Unknown"],
			// 		copyright: "© 2024 Unknown",
			// 	};
			// 	const aboutDialog = new Gtk.AboutDialog(aboutParams);
			// 	aboutDialog.present();
			// });
			// this.add_action(show_about_action);
		}

		vfunc_activate() {
			this.hold();

			new Bar(/*this*/);
			// this.add_window(new Bar(this));
			// if (!this.active_window) {
			// 	this.active_window = new Bar(this);
			// }
			// this.active_window.present();
		}
	},
);

export const app = new App();
export default app;

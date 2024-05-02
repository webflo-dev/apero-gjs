import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import GLib from "gi://GLib";

export const DemoWindow = GObject.registerClass(
	{
		Template: GLib.file_get_contents(
			"/home/florent/dev/webflo/apero/src/demo.ui",
		)[1],
		GTypeName: "Bar",
		// InternalChildren: ["label"],
	},
	class extends Gtk.ApplicationWindow {
		constructor(application) {
			super({ application });

			// this.defaultWidth = 600;
			// this.defaultHeight = 300;

			// Gtk.Builder.new_from_file("/home/florent/dev/webflo/apero/src/bar.ui");

			// this.set_child(new Gtk.Label({ label: "Hello, World!" }));
		}
	},
);

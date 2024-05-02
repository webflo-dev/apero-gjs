import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
// import GLib from "gi://GLib";
import LayerShell from "gi://Gtk4LayerShell";

// import { toto } from "gi://my-lib";

export const Bar = GObject.registerClass(
	class extends Gtk.Window {
		constructor(/*application: Gtk.Application*/) {
			// super({ application });
			super();

			LayerShell.init_for_window(this);
			LayerShell.set_namespace(this, this.name);

			LayerShell.set_layer(this, LayerShell.Layer.TOP);
			LayerShell.set_exclusive_zone(this, 0);

			this.visible = true;
		}
	},
);

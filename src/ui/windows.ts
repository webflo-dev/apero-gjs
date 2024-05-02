import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import LayerShell from "gi://Gtk4LayerShell";

type WindowProps = {
	name: string;
};

class _Window<P extends WindowProps> extends Gtk.Window {
	constructor(props: P) {
		super({ name: props.name });

		LayerShell.init_for_window(this);
		LayerShell.set_namespace(this, this.name);

		LayerShell.set_layer(this, LayerShell.Layer.TOP);
		LayerShell.set_exclusive_zone(this, 0);

		this.visible = true;
	}
}

export const Window = GObject.registerClass(_Window);
export const NewWindow = <P extends WindowProps>(props: P) => new Window(props);

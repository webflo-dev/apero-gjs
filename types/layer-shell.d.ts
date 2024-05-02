declare module "gi://Gtk4LayerShell" {
	import type Gtk from "gi://Gtk?version=4.0";
	import type Gdk from "gi://Gdk?version=4.0";

	enum Edge {
		LEFT = 0,
		RIGHT,
		TOP,
		BOTTOM,
	}

	enum Layer {
		BACKGROUND = 0,
		BOTTOM,
		TOP,
		OVERLAY,
	}

	enum KeyboardMode {
		NONE = 0,
		EXCLUSIVE,
		ON_DEMAND,
	}

	function get_major_version(): number;
	function get_minor_version(): number;
	function get_macro_version(): number;

	function get_protocol_version(): number;

	function is_supported(): boolean;

	function init_for_window(window: Gtk.Window): void;
	function is_layer_window(window: Gtk.Window): boolean;

	function get_namespace(window: Gtk.Window): string;
	function set_namespace(
		window: Gtk.Window,
		namespace: string | undefined | null,
	): void;

	function get_layer(window: Gtk.Window): Layer;
	function set_layer(window: Gtk.Window, layer: Layer): void;

	function get_monitor(window: Gtk.Window): Gdk.Monitor | null | undefined;
	function set_monitor(window: Gtk.Window, monitor: Gdk.Monitor | null): void;

	function get_anchor(window: Gtk.Window, edge: Edge): boolean;
	function set_anchor(
		window: Gtk.Window,
		edge: Edge,
		anchor_to_edge: boolean,
	): void;

	function get_margin(window: Gtk.Window, edge: Edge): number;
	function set_margin(
		window: Gtk.Window,
		edge: Edge,
		margin_size: number,
	): void;

	function get_exclusive_zone(window: Gtk.Window): number;
	function set_exclusive_zone(window: Gtk.Window, exclusive_zone: number);

	function auto_exclusive_zone_enable(window: Gtk.Window): void;
	function auto_exclusive_zone_is_enabled(window: Gtk.Window): void;

	function set_keyboard_mode(window: Gtk.Window, mode: KeyboardMode): void;
	function get_keyboard_mode(window: Gtk.Window): KeyboardMode;

	export default {
		Edge,
		Layer,

		get_major_version,
		get_major_version,
		get_macro_version,

		get_protocol_version,

		is_supported,

		init_for_window,
		is_layer_window,

		get_namespace,
		set_namespace,

		get_layer,
		set_layer,

		get_monitor,
		set_monitor,

		get_anchor,
		set_anchor,

		get_margin,
		set_margin,

		get_exclusive_zone,
		set_exclusive_zone,

		auto_exclusive_zone_enable,
		auto_exclusive_zone_is_enabled,

		set_keyboard_mode,
		get_keyboard_mode,
	};
}

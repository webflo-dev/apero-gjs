import LayerShell from "gi://Gtk4LayerShell";
import Gtk from "gi://Gtk";

type Position = "left" | "right" | "top" | "bottom";

export const WindowPosition = {
	Left: 1,
	Right: 2,
	Top: 4,
	Bottom: 8,
} as const;

type toto = keyof typeof WindowPosition;

const WindowPositions = {
	[WindowPosition.Left]: LayerShell.Edge.LEFT,
	[WindowPosition.Right]: LayerShell.Edge.RIGHT,
	[WindowPosition.Top]: LayerShell.Edge.TOP,
	[WindowPosition.Bottom]: LayerShell.Edge.BOTTOM,
} as const;

export const WindowLayer = {
	Top: LayerShell.Layer.TOP,
	Bottom: LayerShell.Layer.BOTTOM,
	Background: LayerShell.Layer.BACKGROUND,
	Overlay: LayerShell.Layer.OVERLAY,
} as const;
type WindowLayer = keyof typeof WindowLayer;

export const WindowExclusiveZone = {
	Normal: "normal",
	Ignored: "ignore",
	Auto: "auto",
} as const;

export function setWindowAnchor(window: Gtk.Window, anchor: number) {
	Object.values(WindowPosition).forEach((position) => {
		const match = (position & anchor) !== 0;
		LayerShell.set_anchor(window, WindowPositions[position], match);
	});
}

export function setWindowMargin(
	window: Gtk.Window,
	position: keyof typeof WindowPosition,
	margin: number,
) {
	const edge = WindowPositions[WindowPosition[position]];
	if (edge) LayerShell.set_margin(window, WindowPositions[position], margin);
}

export function setWindowLayer(window: Gtk.Window, layer: WindowLayer) {
	LayerShell.set_layer(window, WindowLayer[layer]);
}

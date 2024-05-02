import { app } from "./app";

export async function main(argv: string[]): Promise<number> {
	print("hello, world!");
	print("There are the provided arguments:");
	argv.forEach((arg) => {
		print(`> [${arg}]`);
	});

	return app.runAsync([]);
}

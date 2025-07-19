import { readFile } from "node:fs/promises";

export async function readJSON<T>(filePath: string): Promise<T> {
	try {
		const fileContent = await readFile(filePath, "utf8");

		return JSON.parse(fileContent) as T;
	} catch (error) {
		throw new Error(
			`Failed to read json: ${filePath}: ${(error as Error).message}`,
		);
	}
}

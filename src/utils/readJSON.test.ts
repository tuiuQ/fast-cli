import {
	existsSync,
	mkdirSync,
	rmdirSync,
	unlinkSync,
	writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readJSON } from "./readJSON.js";

const testDir = join(__dirname, "test_data");
const testFilePath = join(testDir, "test.json");
const testData = {
	key: "value",
	number: 123,
};

describe("readJSON", () => {
	beforeAll(() => {
		if (!existsSync(testDir)) {
			mkdirSync(testDir);
		}
		writeFileSync(testFilePath, JSON.stringify(testData));
	});

	afterAll(() => {
		unlinkSync(testFilePath);
		rmdirSync(testDir);
	});

	it("should read and parse a JSON file correctly", async () => {
		const result = await readJSON(testFilePath);
		expect(result).toEqual(testData);
	});

	it("should throw an error if the file does not exist", async () => {
		const nonExistentFilePath = join(testDir, "noexistent.json");
		await expect(readJSON(nonExistentFilePath)).rejects.toThrow();
	});
});

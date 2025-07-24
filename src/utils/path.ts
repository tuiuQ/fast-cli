import { existsSync } from "node:fs";
import { join } from "node:path"

export function findParent(basePath: string, comparator: (basePath: string) => boolean): string {
  if (comparator(basePath)) {
    return basePath;
  }

  const parentDir = join(basePath, "../");

  if (parentDir) {
    return findParent(parentDir, comparator);
  }

  return ""
}

export function getProjectPath() {
  return findParent(process.cwd(), (basePath: string) => {
    const fullPath = join(basePath, "xyx.config.json");
    return existsSync(fullPath);
  });
}

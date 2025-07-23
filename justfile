commit msg:
  @git commit -m "{{msg}}"

test:
  @./node_modules/.bin/vitest run

fmt:
  @./node_modules/.bin/biome check --write --diagnostic-level=warn src/;

lint:
  @./node_modules/.bin/eslint . --ext .ts

format:
  @./node_modules/.bin/prettier --write src/**/*.ts --parser typescript
  
clean:
  @rm -rf ./dist;

dev:
  @just clean;
  @bun run ./build.ts -- --mode=development

watch:
  @watchexec -w src -w ./package.json --exts ts just dev

build:
  @just fmt;
  @just test;
  @just clean;
  @bun run ./build.ts -- --mode=production

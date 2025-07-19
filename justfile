commit msg:
  @git commit -m "{{msg}}"

test mode="development":
  @[ "{{mode}}" = "production" ] \
    && ./node_modules/.bin/vitest run \
    || ./node_modules/.bin/vitest --watch

fmt:
  @./node_modules/.bin/biome check --write --diagnostic-level=warn src/;

lint:
  @./node_modules/.bin/eslint . --ext .ts

format:
  @./node_modules/.bin/prettier --write src/**/*.ts --parser typescript
  
clean:
  @rm -rf ./dist;

dev:
  @just fmt;
  @just test production;
  @just clean;
  @bun run ./build.ts -- --mode=development

watch:
  @watchexec -w src -w ./package.json --exts ts just dev

build:
  @just fmt;
  @just test production;
  @just clean;
  @bun run ./build.ts -- --mode=production

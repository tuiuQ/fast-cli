commit msg:
  @git commit -m "{{msg}}"
  
clean:
  @rm -rf ./dist;

dev:
  @just clean;
  @bun run ./build.ts -- --mode=development

watch:
  @just clean;
  @watchexec -w src -w ./package.json --exts ts just dev

build:
  @just clean;
  @bun run ./build.ts -- --mode=production
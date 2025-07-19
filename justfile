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
  
# 参数：just publish [patch|minor|major|prerelease]
publish version="patch":
  #!/usr/bin/env bash
  set -euo pipefail

  # 1) 生产构建
  just build

  # 2) 计算新版本号（--no-git-tag-version 只改文件，不自动打 tag）
  NEW_VERSION=$(npm version {{version}} --no-git-tag-version | sed 's/^v//')

  # 3) 发布到 GitHub Packages
  npm publish

  # 4) 提交 & 推送代码
  git add package.json
  git commit -m "chore: release v${NEW_VERSION}"
  git push origin main    # 如有其他默认分支请自行替换

  # 5) 创建并推送 Git Tag
  git tag "v${NEW_VERSION}"
  git push origin "v${NEW_VERSION}"

  # 6) 自动生成 GitHub Release（需安装 gh CLI 并已登录）
  gh release create "v${NEW_VERSION}" \
    --title "v${NEW_VERSION}" \
    --generate-notes

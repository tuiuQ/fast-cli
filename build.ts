import { build } from "esbuild";

build({
  entryPoints: ["./src/**/*.ts"],
  outdir: "dist",
  format: "cjs",
  platform: "node",
  target: "node16"
})

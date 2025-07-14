import { build } from "esbuild";

const modeArg = process.argv.find(arg => arg.startsWith("--mode="))
let mode = "development";
if (modeArg) {
  mode = modeArg.split("=")[1];
}

const isProduction = mode === "production";

build({
  entryPoints: ["./src/**/*.ts"],
  outdir: "dist",
  format: "cjs",
  minify: isProduction,
  sourcemap: !isProduction,
  platform: "node",
  target: "node16"
})

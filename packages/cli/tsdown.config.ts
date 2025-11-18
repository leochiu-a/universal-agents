import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm"],
  target: "node18",
  dts: true,
  clean: true,
  minify: false,
  sourcemap: false,
});

import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import path from "node:path";

export default defineConfig([
  {
    input: [
      "wouter",
      "wouter/use-browser-location",
      "wouter/use-hash-location",
      "wouter/memory-location",
    ],
    external: ["hono", "hono/jsx", "regexparam", "mitt"],

    output: {
      dir: "esm",
      format: "esm",
    },
    plugins: [
      nodeResolve(),
      alias({
        entries: {
          "./react-deps.js": path.resolve("src/hono-deps.js"),
        },
      }),
    ],
  },
]);

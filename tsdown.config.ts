import { defineConfig, UserConfig } from "tsdown";

export const createTsdownConfig = (options?: UserConfig) =>
    defineConfig({
        entry: ["src/index.ts"],
        format: ["esm", "cjs"],
        target: "es2022",
        treeshake: false,
        sourcemap: true,
        clean: true,
        dts: true,
        outDir: "dist",
        ...options,
    });

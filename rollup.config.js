import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from  "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
	input: "src/main.ts",
	output: [
		{
			file: "dist/bundle.js",
			format: "es",
			name: "wrPreactBundle",
			sourcemap: true,
		},
	],
	plugins: [
		nodeResolve(),
		typescript(),
		copy({
			targets: [
				{ src: "src/**/*", dest: "dist" },
			],
		}),
	],
};
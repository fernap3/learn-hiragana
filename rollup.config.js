import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

export default {
	input: "main.ts",
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
	],
};
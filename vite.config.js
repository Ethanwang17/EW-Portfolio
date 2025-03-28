import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	base: "/", // Updated for custom domain
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	assetsInclude: ["**/*.glb"],
	build: {
		outDir: "dist",
		assetsInclude: ["**/*.jsx"],
	},
});

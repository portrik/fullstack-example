import { defineConfig } from 'vite';
import path from 'node:path';
import url from 'node:url';

/**
 * Module replacement for `__dirname`.
 *
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
 */
const directoryName = path.dirname(url.fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		emptyOutDir: true
	},

	test: {
		globals: true,
		environment: 'happy-dom',
		clearMocks: true
	},

	server: {
		port: 8080
	},

	preview: {
		port: 8081
	},

	resolve: {
		alias: {
			'@pages': path.resolve(directoryName, 'src', 'pages')
		}
	}
});

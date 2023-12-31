module.exports = {
	env: { browser: true, es2020: true, node: true },
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],

	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		quotes: ['error', 'single'],
		'no-unused-vars': [0],
		'react/prop-types': 'off',
	},
};

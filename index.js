module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
		'./rules/imports',
		'./rules/strict',
		'./rules/sonar'
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {}
};

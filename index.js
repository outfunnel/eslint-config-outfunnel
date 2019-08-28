module.exports = {
	extends: [
		'eslint:recommended',
		'./rules/best-practices',
		'./rules/errors',
		'./rules/node',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
		'./rules/imports',
		'./rules/strict'
	].map(require.resolve),
	parserOptions: {
	  ecmaVersion: 2018
	},
	rules: {}
  };
module.exports = {
	extends: ['./index', './rules/node'].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {}
};

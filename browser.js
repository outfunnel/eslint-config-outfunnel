module.exports = {
	env: {
		browser: true
	},

	extends: require.resolve('./index'),

	rules: {
		'no-restricted-imports': ['error', {
			patterns: [
				'../*',
				'./../*'
			]
		}]
	}
};

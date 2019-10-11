module.exports = {
	extends: ['prettier'],

	plugins: ['prettier'],

	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				printWidth: 100,
				useTabs: true,
				bracketSpacing: true
			}
		]
	}
};

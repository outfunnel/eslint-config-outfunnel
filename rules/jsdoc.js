module.exports = {
	// https://github.com/gajus/eslint-plugin-jsdoc
	plugins: ['jsdoc'],

	rules: {
		// Reports invalid alignment of JSDoc block asterisks
		'jsdoc/check-alignment': 'warn',

		// Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
		'jsdoc/check-examples': 'warn',

		// Reports invalid padding inside JSDoc block
		'jsdoc/check-indentation': 'warn',

		// Ensures that parameter names in JSDoc match those in the function declaration
		'jsdoc/check-param-names': 'warn',

		// Reports against Google Closure Compiler syntax
		'jsdoc/check-syntax': 'off',

		// Reports invalid block tag names
		'jsdoc/check-tag-names': 'warn',

		//  Reports invalid types
		'jsdoc/check-types': 'warn',

		// Reports an issue with any non-constructor function using @implements
		'jsdoc/implements-on-classes': 'warn',

		// Enforces a regular expression pattern on descriptions
		'jsdoc/match-description': 'off',

		// Enforces a consistent padding of the block description
		'jsdoc/newline-after-description': 'off',

		// This rule reports types being used on @param or @returns
		'jsdoc/no-types': 'off',

		'jsdoc/no-undefined-types': 'off',

		// Checks that types in jsdoc comments are defined. This can be used to check unimported types.
		'jsdoc/require-description': 'off',

		// Requires that block description, explicit @description,
		// and @param/@returns tag descriptions are written in complete sentences
		'jsdoc/require-description-complete-sentence': 'warn',

		// Requires that all functions have examples
		'jsdoc/require-example': 'off',

		// Requires a hyphen before the @param description
		'jsdoc/require-hyphen-before-param-description': 'off',

		// Checks for presence of jsdoc comments, on class declarations as well as functions
		'jsdoc/require-jsdoc': 'off',

		// Requires that all function parameters are documented
		'jsdoc/require-param': 'off',

		// Requires that @param tag has description value
		'jsdoc/require-param-description': 'off',

		// Requires that all function parameters have name
		'jsdoc/require-param-name': 'warn',

		// Requires that @param tag has type value
		'jsdoc/require-param-type': 'warn',

		// Requires that all function parameters are documented
		'jsdoc/require-returns': 'off',

		// Requires a return statement in function body if a @returns tag is specified in jsdoc comment
		'jsdoc/require-returns-check': 'warn',

		// Requires that @returns tag has description value
		'jsdoc/require-returns-description': 'off',

		// Requires that @returns tag has type value
		'jsdoc/require-returns-type': 'warn',

		// Requires all types to be valid JSDoc or Closure compiler types without syntax errors
		'jsdoc/valid-types': 'off'
	},

	settings: {
		jsdoc: {
			tagNamePreference: {
				arg: 'param',
				returns: 'return'
			},
			preferredTypes: {
				boolean: 'Boolean',
				number: 'Number',
				object: 'Object',
				string: 'String',
				array: 'Array',
				function: 'Function'
			}
		}
	}
};

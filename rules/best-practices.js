module.exports = {
	rules: {
		/*
		 * Enforces getter/setter pairs in objects and classes
		 * https://eslint.org/docs/rules/accessor-pairs
		 */
		'accessor-pairs': 'off',

		/*
		 * Enforces return statements in callbacks of array's methods
		 * https://eslint.org/docs/rules/array-callback-return
		 */
		'array-callback-return': ['error', { allowImplicit: true }],

		/*
		 * Treat var statements as if they were block scoped
		 * https://eslint.org/docs/rules/block-scoped-var
		 */
		'block-scoped-var': 'error',

		/*
		 * Specify the maximum cyclomatic complexity allowed in a program
		 * https://eslint.org/docs/rules/complexity
		 */
		complexity: ['off', 11],

		/*
		 * Enforce that class methods use "this"
		 * https://eslint.org/docs/rules/class-methods-use-this
		 */
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: []
			}
		],

		/*
		 * Require return statements to either always or never specify values
		 * https://eslint.org/docs/rules/consistent-return
		 */
		'consistent-return': 'error',

		/*
		 * Specify curly brace conventions for all control statements
		 * https://eslint.org/docs/rules/curly
		 */
		curly: ['error', 'all'],

		/*
		 * Require default case in switch statements
		 * https://eslint.org/docs/rules/default-case
		 */
		'default-case': ['error', { commentPattern: '^no default$' }],

		/*
		 * Encourages use of dot notation whenever possible
		 * https://eslint.org/docs/rules/dot-notation
		 */
		'dot-notation': ['error', { allowKeywords: true }],

		/*
		 * Enforces consistent newlines before or after dots
		 * https://eslint.org/docs/rules/dot-location
		 */
		'dot-location': ['error', 'property'],

		/*
		 * Require the use of === and !==
		 * https://eslint.org/docs/rules/eqeqeq
		 */
		eqeqeq: ['error', 'always', { null: 'ignore' }],

		/*
		 * Make sure for-in loops have an if statement
		 * https://eslint.org/docs/rules/guard-for-in
		 */
		'guard-for-in': 'error',

		/*
		 * Enforce a maximum number of classes per file
		 * https://eslint.org/docs/rules/max-classes-per-file
		 */
		'max-classes-per-file': ['error', 1],

		/*
		 * Disallow the use of alert, confirm, and prompt
		 * https://eslint.org/docs/rules/no-alert
		 */
		'no-alert': 'warn',

		/*
		 * Disallow use of arguments.caller or arguments.callee
		 * https://eslint.org/docs/rules/no-caller
		 */
		'no-caller': 'error',

		/*
		 * Disallow lexical declarations in case/default clauses
		 * https://eslint.org/docs/rules/no-case-declarations.html
		 */
		'no-case-declarations': 'error',

		/*
		 * Disallow division operators explicitly at beginning of regular expression
		 * https://eslint.org/docs/rules/no-div-regex
		 */
		'no-div-regex': 'off',

		/*
		 * Disallow else after a return in an if
		 * https://eslint.org/docs/rules/no-else-return
		 */
		'no-else-return': ['error', { allowElseIf: false }],

		/*
		 * Disallow empty functions, except for standalone funcs/arrows
		 * https://eslint.org/docs/rules/no-empty-function
		 */
		'no-empty-function': [
			'error',
			{
				allow: ['arrowFunctions', 'functions', 'methods']
			}
		],

		/*
		 * Disallow empty destructuring patterns
		 * https://eslint.org/docs/rules/no-empty-pattern
		 */
		'no-empty-pattern': 'error',

		/*
		 * Disallow comparisons to null without a type-checking operator
		 * https://eslint.org/docs/rules/no-eq-null
		 */
		'no-eq-null': 'off',

		/*
		 * Disallow use of eval()
		 * https://eslint.org/docs/rules/no-eval
		 */
		'no-eval': 'error',

		/*
		 * Disallow adding to native types
		 * https://eslint.org/docs/rules/no-extend-native
		 */
		'no-extend-native': 'error',

		/*
		 * Disallow unnecessary function binding
		 * https://eslint.org/docs/rules/no-extra-bind
		 */
		'no-extra-bind': 'error',

		/*
		 * Disallow unnecessary labels
		 * https://eslint.org/docs/rules/no-extra-label
		 */
		'no-extra-label': 'error',

		/*
		 * Disallow fallthrough of case statements
		 * https://eslint.org/docs/rules/no-fallthrough
		 */
		'no-fallthrough': 'error',

		/*
		 * Disallow the use of leading or trailing decimal points in numeric literals
		 * https://eslint.org/docs/rules/no-floating-decimal
		 */
		'no-floating-decimal': 'error',

		/*
		 * Disallow reassignments of native objects or read-only globals
		 * https://eslint.org/docs/rules/no-global-assign
		 */
		'no-global-assign': ['error', { exceptions: [] }],

		/*
		 * Disallow reassignments of native objects
		 * This rule was deprecated in ESLint v3.3.0 and replaced by the no-global-assign rule.
		 * https://eslint.org/docs/rules/no-native-reassign
		 */
		'no-native-reassign': 'off',

		/*
		 * Disallow implicit type conversions
		 * https://eslint.org/docs/rules/no-implicit-coercion
		 */
		'no-implicit-coercion': [
			'off',
			{
				boolean: false,
				number: true,
				string: true,
				allow: []
			}
		],

		/*
		 * Disallow var and named functions in global scope
		 * https://eslint.org/docs/rules/no-implicit-globals
		 */
		'no-implicit-globals': 'off',

		/*
		 * Disallow use of eval()-like methods
		 * https://eslint.org/docs/rules/no-implied-eval
		 */
		'no-implied-eval': 'error',

		/*
		 * Disallow this keywords outside of classes or class-like objects
		 * https://eslint.org/docs/rules/no-invalid-this
		 */
		'no-invalid-this': 'off',

		/*
		 * Disallow usage of __iterator__ property
		 * https://eslint.org/docs/rules/no-iterator
		 */
		'no-iterator': 'error',

		/*
		 * Disallow use of labels for anything other then loops and switches
		 * https://eslint.org/docs/rules/no-labels
		 */
		'no-labels': ['error', {
			allowLoop: false, allowSwitch: false
		}],

		/*
		 * Disallow unnecessary nested blocks
		 * https://eslint.org/docs/rules/no-lone-blocks
		 */
		'no-lone-blocks': 'error',

		/*
		 * Disallow creation of functions within loops
		 * https://eslint.org/docs/rules/no-loop-func
		 */
		'no-loop-func': 'error',

		/*
		 * Disallow magic numbers
		 * https://eslint.org/docs/rules/no-magic-numbers
		 */
		'no-magic-numbers': [
			'error',
			{
				ignore: [-1, 0, 1, 2, 24, 60, 100, 1000, 1024, 3600],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false
			}
		],

		/*
		 * Disallow use of multiple spaces
		 * https://eslint.org/docs/rules/no-multi-spaces
		 */
		'no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: false
			}
		],

		/*
		 * Disallow use of multiline strings
		 * https://eslint.org/docs/rules/no-multi-str
		 */
		'no-multi-str': 'error',

		/*
		 * Disallow use of new operator when not part of the assignment or comparison
		 * https://eslint.org/docs/rules/no-new
		 */
		'no-new': 'error',

		/*
		 * Disallow use of new operator for Function object
		 * https://eslint.org/docs/rules/no-new-func
		 */
		'no-new-func': 'error',

		/*
		 * Disallows creating new instances of String, Number, and Boolean
		 * https://eslint.org/docs/rules/no-new-wrappers
		 */
		'no-new-wrappers': 'error',

		/*
		 * Disallow use of (old style) octal literals
		 * https://eslint.org/docs/rules/no-octal
		 */
		'no-octal': 'error',

		/*
		 * Disallow use of octal escape sequences in string literals, such as
		 * var foo = 'Copyright \251';
		 * https://eslint.org/docs/rules/no-octal-escape
		 */
		'no-octal-escape': 'error',

		/*
		 * Disallow reassignment of function parameters
		 * Disallow parameter object manipulation except for specific exclusions
		 * https://eslint.org/docs/rules/no-param-reassign.html
		 */
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					// for reduce accumulators
					'acc',
					// for reduce accumulators
					'accumulator',
					// for e.returnvalue
					'e',
					// for Koa routing
					'ctx',
					// for Express requests
					'req',
					// for Express requests
					'request',
					// for Express responses
					'res',
					// for Express responses
					'response',
					// for Angular 1 scopes
					'$scope',
					// for ReactRouter context
					'staticContext'
				]
			}
		],

		/*
		 * Disallow usage of __proto__ property
		 * https://eslint.org/docs/rules/no-proto
		 */
		'no-proto': 'error',

		/*
		 * Disallow declaring the same variable more then once
		 * https://eslint.org/docs/rules/no-redeclare
		 */
		'no-redeclare': 'error',

		/*
		 * Disallow certain object properties
		 * https://eslint.org/docs/rules/no-restricted-properties
		 */
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated'
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead'
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead'
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead'
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.'
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.'
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.'
			}
		],

		/*
		 * Disallow use of assignment in return statement
		 * https://eslint.org/docs/rules/no-return-assign
		 */
		'no-return-assign': ['error', 'always'],

		/*
		 * Disallow redundant `return await`
		 * https://eslint.org/docs/rules/no-return-await
		 */
		'no-return-await': 'error',

		/*
		 * Disallow use of `javascript:` urls.
		 * https://eslint.org/docs/rules/no-script-url
		 */
		'no-script-url': 'error',

		/*
		 * Disallow self assignment
		 * https://eslint.org/docs/rules/no-self-assign
		 */
		'no-self-assign': [
			'error',
			{
				props: true
			}
		],

		/*
		 * Disallow comparisons where both sides are exactly the same
		 * https://eslint.org/docs/rules/no-self-compare
		 */
		'no-self-compare': 'error',

		/*
		 * Disallow use of comma operator
		 * https://eslint.org/docs/rules/no-sequences
		 */
		'no-sequences': 'error',

		/*
		 * Restrict what can be thrown as an exception
		 * https://eslint.org/docs/rules/no-throw-literal
		 */
		'no-throw-literal': 'error',

		/*
		 * Disallow unmodified conditions of loops
		 * https://eslint.org/docs/rules/no-unmodified-loop-condition
		 */
		'no-unmodified-loop-condition': 'off',

		/*
		 * Disallow usage of expressions in statement position
		 * https://eslint.org/docs/rules/no-unused-expressions
		 */
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false
			}
		],

		/*
		 * Disallow unused labels
		 * https://eslint.org/docs/rules/no-unused-labels
		 */
		'no-unused-labels': 'error',

		/*
		 * Disallow unnecessary .call() and .apply()
		 * https://eslint.org/docs/rules/no-useless-call
		 */
		'no-useless-call': 'off',

		/*
		 * Disallow unnecessary catch clauses
		 * https://eslint.org/docs/rules/no-useless-catch
		 */
		'no-useless-catch': 'error',

		/*
		 * Disallow useless string concatenation
		 * https://eslint.org/docs/rules/no-useless-concat
		 */
		'no-useless-concat': 'error',

		/*
		 * Disallow unnecessary string escaping
		 * https://eslint.org/docs/rules/no-useless-escape
		 */
		'no-useless-escape': 'error',

		/*
		 * Disallow redundant return; keywords
		 * https://eslint.org/docs/rules/no-useless-return
		 */
		'no-useless-return': 'error',

		/*
		 * Disallow use of void operator
		 * https://eslint.org/docs/rules/no-void
		 */
		'no-void': 'error',

		/*
		 * Disallow usage of configurable warning terms in comments: e.g. todo
		 * https://eslint.org/docs/rules/no-warning-comments
		 */
		'no-warning-comments': ['off', {
			terms: ['todo', 'fixme', 'xxx'], location: 'start'
		}],

		/*
		 * Disallow use of the with statement
		 * https://eslint.org/docs/rules/no-with
		 */
		'no-with': 'error',

		/*
		 * Require using Error objects as Promise rejection reasons
		 * https://eslint.org/docs/rules/prefer-promise-reject-errors
		 */
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

		/*
		 * Suggest using named capture group in regular expression
		 * https://eslint.org/docs/rules/prefer-named-capture-group
		 */
		'prefer-named-capture-group': 'off',

		/*
		 * Require use of the second argument for parseInt()
		 * https://eslint.org/docs/rules/radix
		 */
		radix: 'error',

		/*
		 * Require `await` in `async function` (note: this is a horrible rule that should never be used)
		 * https://eslint.org/docs/rules/require-await
		 */
		'require-await': 'off',

		/*
		 * Enforce the use of u flag on RegExp
		 * https://eslint.org/docs/rules/require-unicode-regexp
		 */
		'require-unicode-regexp': 'off',

		/*
		 * Requires to declare all vars on top of their containing scope
		 * https://eslint.org/docs/rules/vars-on-top
		 */
		'vars-on-top': 'error',

		/*
		 * Require immediate function invocation to be wrapped in parentheses
		 * https://eslint.org/docs/rules/wrap-iife.html
		 */
		'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

		/*
		 * Require or disallow Yoda conditions
		 * https://eslint.org/docs/rules/yoda
		 */
		yoda: 'error'
	}
};

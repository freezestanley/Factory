module.exports = {
  processors: [],
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  ignoreFiles: ['**/*.js', '**/*.md'],
  rules: {
    'prettier/prettier': [true, { singleQuote: true, tabWidth: 2 }],
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules',
      'at-rules'
    ],
    'block-no-empty': true,
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'no-extra-semicolons': true,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function'
        ]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] }
    ]
  }
}

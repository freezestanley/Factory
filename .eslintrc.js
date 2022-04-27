module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  plugins: ['babel', '@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    allowImportExportEverywhere: true,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
  },
  ignorePatterns: [
    'node_modules/*',
    './config/**/*.js',
    'config/*',
    '*.js',
    '*.test.js',
    '*.test.tsx',
    '*.test.ts'
  ],
  rules: {
    'no-unused-vars': 0, // 未没被使用的变量
    'no-cond-assign': 2,
    'no-debugger': 0,
    'no-dupe-args': 'error',
    'no-caller': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-with': 'error',
    'no-catch-shadow': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    //{ "allowTypedFunctionExpressions": false }
    'prettier/prettier': [
      'warn',
      {
        useTabs: false,
        proseWrap: 'preserve',
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      0,
      {
        allowString: false,
        allowNumber: false
      }
    ],
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 0,
    'babel/quotes': 0,
    'babel/semi': 0,
    'babel/no-unused-expressions': 1,
    'babel/valid-typeof': 1
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', require('path').resolve(__dirname, './src')],
          ['@P', require('path').resolve(__dirname, './src/Pages')],
          ['@A', require('path').resolve(__dirname, './src/Api')],
          ['@T', require('path').resolve(__dirname, './src/Theme')],
          ['@U', require('path').resolve(__dirname, './src/Utils')]
        ]
      },
      extension: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.53' // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      // for rules that check exact prop wrappers
      { property: 'forbidExtraProps', exact: true }
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { property: 'styled' }, // `object` is optional
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' } // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { name: 'Form', formAttribute: 'endpoint' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  }
}

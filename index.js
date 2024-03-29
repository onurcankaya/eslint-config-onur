module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: [
    'react',
    'prettier'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      spread: true,
      defaultParams: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false
      }
    ]
  }
}

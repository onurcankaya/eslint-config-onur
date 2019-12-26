module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard'
  ],
  plugins: [
    'prettier'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false
      }
    ]
  }
}

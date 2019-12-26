module.exports = {
  extends: [
    'prettier',
    'prettier/standard'
  ],
  plugins: [
    'prettier'
  ],
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

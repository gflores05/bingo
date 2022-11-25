module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'react',
    'react-hooks',
    "plugin:tailwindcss/recommended"
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'tailwindcss'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ['.eslintrc.js'],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // TypeScript
    camelcase: 'off', // We like using the TypeScript ESLint rule for this.
    'import/no-duplicates': process.env.CI ? 'off' : 'warn', // This is slow AF so only run locally
    'space-before-function-paren': 'off', // We like not having spaces between function name and parens
    'no-useless-constructor': 'off', // We like using `private`/`public` initializers
    'no-void': 'off', // We like using `void stuff() ||`
    'no-dupe-class-members': 'off', // We like having TS handle this for us.
    'no-empty-pattern': 'off', // We like empty object patterns for React components.
    'no-unused-expressions': 'off', // We like TS optional chaining, which this rule catches as an unused expression
    'no-use-before-define': 'off', // We like hoisting
    '@typescript-eslint/no-inferrable-types': 'off', // We like observables to work in mobx 6
    '@typescript-eslint/no-extra-semi': 'off', // We like having Prettier do this for us
    '@typescript-eslint/no-unused-expressions': 'warn', // But we also like that rule, so use the TS supported one.
    '@typescript-eslint/no-use-before-define': 'off', // We like hoisting
    '@typescript-eslint/explicit-function-return-type': 'off', // We like inference
    '@typescript-eslint/no-explicit-any': 'off', // We like being explicit about `any`.
    '@typescript-eslint/no-non-null-assertion': 'off', // We like null assertions
    '@typescript-eslint/no-var-requires': 'off', // Some modules are not typed, and sometimes it's not worth the hassle (see the ifvisible.js usage in dom-util.ts)
    '@typescript-eslint/no-empty-interface': 'off', // We like empty interfaces that extend other interfaces
    '@typescript-eslint/camelcase': 'off', // We like snake_cased DTO props
    '@typescript-eslint/explicit-module-boundary-types': 'off', // We like inference, even at the module boundary, because we can
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // We like picking props from the rest using destructuring to filter out things.
        ignoreRestSiblings: true,
        // We like using underscores to prefix known unused variables which are there for TS reasons.
        argsIgnorePattern: '^_',
      },
    ],

    // React
    'react/display-name': 'off', // We like to use inline components for tasks.
    'react/prop-types': 'off', // We like TypeScript for prop validation.
    'react/no-unescaped-entities': 'off', // We like readable React components
    'react/no-deprecated': process.env.CI ? 'off' : 'warn', // This is slow AF so only run locally
    'react-hooks/rules-of-hooks': 'error', // We like hooks
  },
};
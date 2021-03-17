declare const _default: {
  stylelint: {
    extends: string[];
    plugins: string[];
    rules: {
      'no-descending-specificity': null;
      'function-calc-no-invalid': null;
      'function-url-quotes': string;
      'font-family-no-missing-generic-family-keyword': null;
      'plugin/declaration-block-no-ignored-properties': boolean;
      'unit-no-unknown': (
        | boolean
        | {
            ignoreUnits: string[];
          }
      )[];
    };
    ignoreFiles: string[];
  };
  prettier: {
    singleQuote: boolean;
    trailingComma: string;
    printWidth: number;
    proseWrap: string;
    endOfLine: string;
    overrides: {
      files: string;
      options: {
        parser: string;
      };
    }[];
  };
  eslint: {
    extends: string[];
    parser: string;
    plugins: string[];
    env: {
      browser: boolean;
      node: boolean;
      es6: boolean;
      mocha: boolean;
      jest: boolean;
      jasmine: boolean;
    };
    rules: {
      'no-undef'?: number | undefined;
      '@typescript-eslint/adjacent-overload-signatures'?: number | undefined;
      '@typescript-eslint/array-type'?: string | undefined;
      '@typescript-eslint/await-thenable'?: number | undefined;
      '@typescript-eslint/ban-ts-comment'?: number | undefined;
      '@typescript-eslint/ban-tslint-comment'?: number | undefined;
      'brace-style'?: string | undefined;
      '@typescript-eslint/brace-style'?: number | undefined;
      '@typescript-eslint/class-literal-property-style'?: number | undefined;
      'comma-dangle'?: string | undefined;
      '@typescript-eslint/comma-dangle'?: number | undefined;
      'comma-spacing'?: string | undefined;
      '@typescript-eslint/comma-spacing'?: number | undefined;
      '@typescript-eslint/consistent-indexed-object-style'?: number | undefined;
      '@typescript-eslint/consistent-type-assertions'?: number | undefined;
      '@typescript-eslint/consistent-type-definitions'?: number | undefined;
      '@typescript-eslint/consistent-type-imports'?: number | undefined;
      'default-param-last'?: string | undefined;
      '@typescript-eslint/default-param-last'?: number | undefined;
      'dot-notation'?: string | undefined;
      '@typescript-eslint/dot-notation'?: number | undefined;
      '@typescript-eslint/explicit-function-return-type'?: number | undefined;
      'func-call-spacing'?: string | undefined;
      '@typescript-eslint/func-call-spacing'?: number | undefined;
      indent?: string | undefined;
      'init-declarations'?: string | undefined;
      '@typescript-eslint/init-declarations'?: number | undefined;
      'keyword-spacing'?: string | undefined;
      '@typescript-eslint/keyword-spacing'?: number | undefined;
      'lines-between-class-members'?: string | undefined;
      '@typescript-eslint/lines-between-class-members'?: number | undefined;
      '@typescript-eslint/member-delimiter-style'?: number | undefined;
      '@typescript-eslint/member-ordering'?: number | undefined;
      '@typescript-eslint/method-signature-style'?: string | undefined;
      'no-array-constructor'?: string | undefined;
      '@typescript-eslint/no-array-constructor'?: number | undefined;
      '@typescript-eslint/no-base-to-string'?: number | undefined;
      '@typescript-eslint/no-confusing-non-null-assertion'?: string | undefined;
      '@typescript-eslint/no-confusing-void-expression'?: number | undefined;
      'no-dupe-class-members'?: string | undefined;
      '@typescript-eslint/no-dupe-class-members'?: string | undefined;
      'no-duplicate-imports'?: string | undefined;
      '@typescript-eslint/no-duplicate-imports'?: number | undefined;
      '@typescript-eslint/no-dynamic-delete'?: number | undefined;
      'no-empty-function'?: string | undefined;
      '@typescript-eslint/no-empty-function'?: number | undefined;
      '@typescript-eslint/no-empty-interface'?: number | undefined;
      '@typescript-eslint/no-extra-non-null-assertion'?: number | undefined;
      'no-extra-parens'?: string | undefined;
      '@typescript-eslint/no-extra-parens'?: number | undefined;
      'no-extra-semi'?: string | undefined;
      '@typescript-eslint/no-extra-semi'?: number | undefined;
      '@typescript-eslint/no-extraneous-class'?: number | undefined;
      '@typescript-eslint/no-floating-promises'?: number | undefined;
      '@typescript-eslint/no-for-in-array'?: string | undefined;
      '@typescript-eslint/no-implicit-any-catch'?: number | undefined;
      'no-implied-eval'?: string | undefined;
      '@typescript-eslint/no-implied-eval'?: number | undefined;
      '@typescript-eslint/no-inferrable-types'?: number | undefined;
      'no-invalid-this'?: string | undefined;
      '@typescript-eslint/no-invalid-this'?: string | undefined;
      '@typescript-eslint/no-invalid-void-type'?: number | undefined;
      'no-loop-func'?: string | undefined;
      '@typescript-eslint/no-loop-func'?: string | undefined;
      'no-loss-of-precision'?: string | undefined;
      '@typescript-eslint/no-loss-of-precision'?: number | undefined;
      'no-magic-numbers'?: string | undefined;
      '@typescript-eslint/no-magic-numbers'?: number | undefined;
      '@typescript-eslint/no-misused-new'?: string | undefined;
      '@typescript-eslint/no-misused-promises'?: number | undefined;
      '@typescript-eslint/no-namespace'?: number | undefined;
      '@typescript-eslint/no-non-null-asserted-optional-chain'?: string | undefined;
      '@typescript-eslint/no-parameter-properties'?: string | undefined;
      'no-redeclare'?: string | undefined;
      '@typescript-eslint/no-redeclare'?: string | undefined;
      '@typescript-eslint/no-require-imports'?: number | undefined;
      'no-shadow'?: string | undefined;
      '@typescript-eslint/no-shadow'?: string | undefined;
      '@typescript-eslint/no-this-alias'?: string | undefined;
      'no-throw-literal'?: string | undefined;
      '@typescript-eslint/no-throw-literal'?: string | undefined;
      '@typescript-eslint/no-type-alias'?: number | undefined;
      '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: number | undefined;
      '@typescript-eslint/no-unnecessary-condition'?: number | undefined;
      '@typescript-eslint/no-unnecessary-qualifier'?: number | undefined;
      '@typescript-eslint/no-unnecessary-type-arguments'?: number | undefined;
      '@typescript-eslint/no-unnecessary-type-assertion'?: number | undefined;
      '@typescript-eslint/no-unnecessary-type-constraint'?: number | undefined;
      '@typescript-eslint/no-unsafe-assignment'?: number | undefined;
      '@typescript-eslint/no-unsafe-call'?: number | undefined;
      '@typescript-eslint/no-unsafe-member-access'?: number | undefined;
      '@typescript-eslint/no-unsafe-return'?: number | undefined;
      'no-unused-expressions'?: string | undefined;
      '@typescript-eslint/no-unused-expressions'?: string | undefined;
      'no-unused-vars'?: string | undefined;
      'no-use-before-define'?: string | undefined;
      'no-useless-constructor'?: string | undefined;
      '@typescript-eslint/no-useless-constructor'?: string | undefined;
      '@typescript-eslint/non-nullable-type-assertion-style'?: number | undefined;
      '@typescript-eslint/prefer-as-const'?: number | undefined;
      '@typescript-eslint/prefer-enum-initializers'?: number | undefined;
      '@typescript-eslint/prefer-for-of'?: number | undefined;
      '@typescript-eslint/prefer-function-type'?: number | undefined;
      '@typescript-eslint/prefer-includes'?: number | undefined;
      '@typescript-eslint/prefer-literal-enum-member'?: number | undefined;
      '@typescript-eslint/prefer-namespace-keyword'?: number | undefined;
      '@typescript-eslint/prefer-nullish-coalescing'?: number | undefined;
      '@typescript-eslint/prefer-optional-chain'?: number | undefined;
      '@typescript-eslint/prefer-readonly'?: number | undefined;
      '@typescript-eslint/prefer-readonly-parameter-types'?: number | undefined;
      '@typescript-eslint/prefer-reduce-type-parameter'?: number | undefined;
      '@typescript-eslint/prefer-regexp-exec'?: number | undefined;
      '@typescript-eslint/prefer-string-starts-ends-with'?: number | undefined;
      '@typescript-eslint/prefer-ts-expect-error'?: number | undefined;
      '@typescript-eslint/promise-function-async'?: number | undefined;
      quotes?: string | undefined;
      '@typescript-eslint/quotes'?: number | undefined;
      '@typescript-eslint/require-array-sort-compare'?: number | undefined;
      'require-await'?: string | undefined;
      '@typescript-eslint/require-await'?: number | undefined;
      '@typescript-eslint/restrict-plus-operands'?: number | undefined;
      '@typescript-eslint/restrict-template-expressions'?: number | undefined;
      'no-return-await'?: string | undefined;
      '@typescript-eslint/return-await'?: number | undefined;
      semi?: string | undefined;
      '@typescript-eslint/semi'?: number | undefined;
      'space-before-function-paren': string | number;
      '@typescript-eslint/space-before-function-paren'?: number | undefined;
      'space-infix-ops'?: string | undefined;
      '@typescript-eslint/space-infix-ops'?: number | undefined;
      '@typescript-eslint/strict-boolean-expressions'?: number | undefined;
      '@typescript-eslint/switch-exhaustiveness-check'?: string | undefined;
      '@typescript-eslint/triple-slash-reference'?: string | undefined;
      '@typescript-eslint/type-annotation-spacing'?: string | undefined;
      '@typescript-eslint/typedef'?: string | undefined;
      '@typescript-eslint/unbound-method'?: number | undefined;
      '@typescript-eslint/unified-signatures'?: string | undefined;
      '@typescript-eslint/indent'?: number | undefined;
      '@typescript-eslint/no-use-before-define'?:
        | (
            | string
            | {
                functions: boolean;
                classes: boolean;
                variables: boolean;
                typedefs: boolean;
              }
          )[]
        | undefined;
      camelcase?: number | undefined;
      '@typescript-eslint/camelcase'?: number | undefined;
      '@typescript-eslint/no-var-requires'?: number | undefined;
      '@typescript-eslint/explicit-member-accessibility'?: number | undefined;
      '@typescript-eslint/interface-name-prefix'?: number | undefined;
      '@typescript-eslint/no-non-null-assertion'?: number | undefined;
      '@typescript-eslint/no-explicit-any'?: number | undefined;
      '@typescript-eslint/ban-types'?: number | undefined;
      '@typescript-eslint/explicit-module-boundary-types'?: number | undefined;
      '@typescript-eslint/naming-convention'?: number | undefined;
      '@typescript-eslint/no-unused-vars'?:
        | (
            | string
            | {
                vars: string;
                args: string;
                ignoreRestSiblings: boolean;
              }
          )[]
        | undefined;
      'react/display-name': number;
      'react/jsx-props-no-spreading': number;
      'react/state-in-constructor': number;
      'react/static-property-placement': number;
      'react/destructuring-assignment': string;
      'react/jsx-filename-extension': string;
      'react/no-array-index-key': string;
      'react-hooks/rules-of-hooks': string;
      'react-hooks/exhaustive-deps': string;
      'react/require-default-props': number;
      'react/jsx-fragments': number;
      'react/jsx-wrap-multilines': number;
      'react/prop-types': number;
      'react/forbid-prop-types': number;
      'react/sort-comp': number;
      'react/react-in-jsx-scope': number;
      'react/jsx-one-expression-per-line': number;
      'generator-star-spacing': number;
      'function-paren-newline': number;
      'import/no-unresolved': number;
      'import/order': number;
      'import/no-named-as-default': number;
      'import/no-cycle': number;
      'import/prefer-default-export': number;
      'import/no-default-export': number;
      'import/no-extraneous-dependencies': number;
      'import/named': number;
      'import/no-named-as-default-member': number;
      'import/no-duplicates': number;
      'import/no-self-import': number;
      'import/extensions': number;
      'import/no-useless-path-segments': number;
      'jsx-a11y/no-noninteractive-element-interactions': number;
      'jsx-a11y/click-events-have-key-events': number;
      'jsx-a11y/no-static-element-interactions': number;
      'jsx-a11y/anchor-is-valid': number;
      'sort-imports': number;
      'class-methods-use-this': number;
      'no-confusing-arrow': number;
      'linebreak-style': number;
      'no-prototype-builtins': string;
      'unicorn/prevent-abbreviations': string;
      'arrow-body-style': number;
      'arrow-parens': number;
      'object-curly-newline': number;
      'implicit-arrow-linebreak': number;
      'operator-linebreak': number;
      'eslint-comments/no-unlimited-disable': number;
      'no-param-reassign': number;
    };
    settings: {
      'import/resolver': {
        node: {
          extensions: string[];
        };
      };
      'import/parsers': {
        '@typescript-eslint/parser': string[];
      };
      'import/extensions': string[];
      'import/external-module-folders': string[];
      polyfills: string[];
    };
    parserOptions: {
      ecmaFeatures: {
        jsx: boolean;
      };
      babelOptions: {
        presets: string[];
        plugins: (
          | (
              | string
              | {
                  legacy: boolean;
                }
            )[]
          | (
              | string
              | {
                  loose: boolean;
                }
            )[]
        )[];
      };
      requireConfigFile: boolean;
      project: string;
    };
  };
};

export default _default;

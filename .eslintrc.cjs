module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended", "nuxtjs/eslint-config-typescript"],
  "rules": {
    // 콘솔관련
    "no-debugger": process.env.NODE_ENV === 'production' ? 'off' : 'on',
    "no-console": process.env.NODE_ENV === 'production' ? 'on' : 'off',
    
    // 코드스타일 관련
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "brace-style": ["error", "1tbs"],
    "curly": ["error", "multi-line", "consistent"],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": "off",
    "keyword-spacing": [
      "error",
      {
        "after": true
      }
    ],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "func-call-spacing": ["error", "never"],
    "no-trailing-spaces": "error",
    "no-else-return": "error",
    "vars-on-top": "error",
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["error", "that"],
    "function-call-argument-newline": ["error", "consistent"],
    "indent": ["error", 2],
    "max-len": [
      "error",
      {
        "code": 256,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "max-lines": "off",
    "max-lines-per-function": [
      "error",
      {
        "max": 600,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-nested-callbacks": ["error", 5],
    "max-params": ["error", 10],
    "multiline-ternary": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": 0,
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": false
      }
    ],
    "sort-keys": "off",
    "sort-vars": "off",
    "template-tag-spacing": "off",
    "no-template-curly-in-string": "error",
    "require-atomic-updates": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": ["error"],
    "eqeqeq": "error",
    "grouped-accessor-pairs": "error",
    "no-caller": "error",
    "no-constructor-return": "error",
    "no-empty-function": [
      "error",
      {
        "allow": ["constructors", "functions", "arrowFunctions"]
      }
    ],
    "no-eq-null": "error",
    "no-eval": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "warn",
    "no-proto": "error",
    "no-return-assign": 0,
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "off",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "nonblock-statement-body-position": "off",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "require-await": "off",
    "yoda": [
      "error",
      "never",
      {
        "exceptRange": true
      }
    ],
    
    // strict 모드
    "strict": ["error", "never"],
    
    // 변수선언
    "no-shadow": "off",
    "no-unused-vars": 0,
    
    // 로직 관련
    "no-use-before-define": 0,
    "func-names": 0,
    "camelcase": "off",
    "eol-last": "error",
    
    // 코멘트 관련
    "line-comment-position": ["off", "above"],
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "no-warning-comments": [
      "error",
      {
        "terms": ["TODO", "FIXME"]
      }
    ],
    "multiline-comment-style": ["error", "separate-lines"],
    "spaced-comment": "off",
    "space-infix-ops": "error",
    
    // 그외
    "no-async-promise-executor": "warn",
    "vue/no-multiple-template-root": 0,
    "vue/multi-word-component-names": 0,
    "synbol-description": 0
  }
}

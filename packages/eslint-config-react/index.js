
module.exports = {
    extends: "eslint:recommended",
    rules: {
        "array-bracket-spacing": [
            "warn",
            "never",
            {
                "singleValue": false,
                "objectsInArrays": true,
                "arraysInArrays": true
            }
        ],
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "array-element-newline": [
            "warn",
            "consistent"
        ],
        "arrow-parens": [
            "warn",
            "as-needed"
        ],
        "arrow-spacing": [
            "warn",
            {
                "before": true,
                "after": true
            }
        ],
        "brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": "warn",
        "comma-dangle": [
            "warn",
            "only-multiline"
        ],
        "comma-style": "off",
        "eol-last": [
            "warn",
            "always"
        ],
        "function-call-argument-newline": [
            "warn",
            "consistent"
        ],
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1,
                "ignoredNodes": [
                    "FunctionExpression > .params[decorators.length > 0]",
                    "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                    "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
                ]
            }
        ],
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "key-spacing": [
            "warn",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "warn",
            {
                "before": true,
                "after": true
            }
        ],
        "max-len": [
            "warn",
            {
                "code": 120,
                "comments": 120,
                "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\(",
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreTrailingComments": true,
                "ignoreUrls": true
            }
        ],
        "multiline-comment-style": [
            "warn",
            "separate-lines"
        ],
        "multiline-ternary": [
            "warn",
            "always-multiline"
        ],
        "no-empty-function": "off",
        "no-multi-spaces": "warn",
        "no-trailing-spaces": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "space-before-blocks": [
            "warn",
            "always"
        ],
        "space-before-function-paren": [
            "warn",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": "warn",
        "space-infix-ops": [
            "warn",
            {
                "int32Hint": false
            }
        ],
        "switch-colon-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ]
    }
}

# @elementium/eslint-config-typescript

## Installation

To install the package, download it, and then run:

- Note that this package requires `eslint`, `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`

```sh
npm install --save-dev file:../elementium/packages/eslint-config-typescript eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
# or
yarn add -D file:../elementium/packages/eslint-config-typescript eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage

To use the package, edit you eslint config file, like `.eslintrc.json`:

```json
{
    "extends": [
        // ...
        "@elementium/eslint-config-typescript"
    ]
    // ...
}
```

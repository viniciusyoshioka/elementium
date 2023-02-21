# @elementium/eslint-config-react-typescript

## Installation

To install the package, download it, and then run:

```sh
npm add -D file:../elementium/packages/eslint-config-react-typescript
# or
yarn add -D file:../elementium/packages/eslint-config-react-typescript
```

Also, you have to install other libraries this package requires:

```sh
npm add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
# or
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage

To use the package, edit you eslint config file, like `.eslintrc.json`:

```json
{
    "extends": [
        // ...
        "@elementium/eslint-config-react-typescript"
    ]
    // ...
}
```

# @elementium/theme

Theme library to build interfaces for React and React Native.

It implements [Material Design 3's](https://m3.material.io/) color, typography, shape, elevation and state.

## Installation

To install the package, download it, and then run:

Note that:
- this library requires [react](https://react.dev/), and won't work without it.
- supports [react native](https://reactnative.dev/)

```sh
npm install --save-dev file:../elementium/packages/theme
# or
yarn add -D file:../elementium/packages/theme
```

## Usage

To use the library, first you need to add `ElementiumThemeProvider` at the root of your application.

```ts
import { ElementiumThemeProvider } from "@elementium/theme"
import { useState } from "react"


export function App() {


    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const elementiumTheme = isDarkTheme ? ElementiumDarkTheme : ElementiumLightTheme


    return (
        <ElementiumThemeProvider value={isDarkTheme}>
            {/* Your app here */}
        </ElementiumThemeProvider>
    )
}
```

When you are creating a component and want to use elementium theme, you can use the `useElementiumTheme` hook.

```ts
import { useElementiumTheme } from "@elementium/theme"

import { OtherComponent } from "./OtherComponent"


export function Component() {


    const { color } = useElementiumTheme()


    return (
        <OtherComponent
            style={{
                backgroundColor: color.background,
            }}
        />
    )
}
```

## Docs

### ElementiumLightTheme

Object that contains the properties of elementium theme for light mode.

### ElementiumDarkTheme

Object that contains the properties of elementium theme for dark mode.

### ElementiumThemeProvider

A provider that receives an elementium theme object and passes it through components tree.

### useElementiumTheme

Hook that returns current elementium theme object

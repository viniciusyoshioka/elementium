# @elementium/color

## Installation

To install the package, download it, and then run:

```sh
npm install --save-dev file:../elementium/packages/color
# or
yarn add -D file:../elementium/packages/color
```

## Docs

- ### Color
    A class that represents a color

    The constructor receives a `RgbColorObject` or a string in the following formats: hexadecimal, rgb, rgba or CSS color name

    ```ts
    import { Color, ColorName } from "@elementium/color"

    const hexColor1 = new Color("#abc")
    const hexColor2 = new Color("#abcd")
    const hexColor3 = new Color("#aabbcc")
    const hexColor4 = new Color("#aabbccdd")
    const rgbColor = new Color("rgb(255, 255, 255)")
    const rgbaColor = new Color("rgba(255, 255, 255, 0.5)")
    const cssNameColor = new Color("teal" as ColorName)
    const rgbObjectColor = new Color({
        r: 30,
        g: 30,
        b: 30,
        a: 0.9,
    })
    ```

- ### ColorVector

    A class to execute math operations with colors as vectors, such as:

    - sum
    - subtract
    - multiply
    - divide

- ### Prisma

    A class to execute more complex operations with colors, such as:

    - addColors

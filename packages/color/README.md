# @elementium/color

Library to manipulate colors programmatically

## Installation

To install the package, download it, and then run:

```sh
npm install --save-dev file:../elementium/packages/color
# or
yarn add -D file:../elementium/packages/color
```

## Docs

### Color
A class that represents a color

The constructor receives an object of type [`RgbColorObject`](#rgbcolorobject) or a `string` in the following formats: hexadecimal, rgb, rgba or CSS color name (type [`ColorName`](#colorname)).

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

**Observation**

When using the `RgbColorObject`, the class expects an integer in an interval from 0 to 255 for the properties `r`, `g` and `b`. For the `a` property, its expected and integer or float value from 0 to 1.

The class will not thrown an error if invalid values is provided, but is can cause unexpected behavior.

---

### ColorVector

**Attention**: The use of this class is not recommended, as it may return color channels with values less than 0, greater than 255, `NaN` or `Infinity`. It is used by [`Prism`](#prism) class and is exported if it is necessary to implement an algorithm not provided by this library.

A class to execute math operations with colors as vectors, such as:

- `sum`

    ```ts
    ColorVector.sum(a: Color, b: Color): Color
    ```

    Example:
    ```ts
    import { Color, ColorName, ColorVector } from "@elementium/color"

    const red = new Color("red" as ColorName) // { r: 255, g: 0, b: 0, a: 1 }
    const blur = new Color("blue" as ColorName) // { r: 0, g: 0, b: 255, a: 1 }

    ColorVector.sum(red, blue) // { r: 255, g: 0, b: 255, a: 2 }
    ```

- `subtract`

    ```ts
    ColorValue.subtract(a: Color, b: Color): Color
    ```

    Example:
    ```ts
    import { Color, ColorName, ColorVector } from "@elementium/color"

    const purple = new Color("purple" as ColorName) // { r: 128, g: 0, b: 128, a: 1 }
    const blur = new Color("blue" as ColorName) // { r: 0, g: 0, b: 255, a: 1 }

    ColorVector.subtract(purple, blue) // { r: 128, g: 0, b: -127, a: 0 }
    ```

- `multiply`

    ```ts
    ColorValue.multiply(a: Color, b: number): Color
    ```

    Example:
    ```ts
    import { Color, ColorName, ColorVector } from "@elementium/color"

    const gray = new Color("gray" as ColorName) // { r: 128, g: 128, b: 128, a: 1 }

    ColorVector.multiply(gray, 1.5) // { r: 192, g: 192, b: 192, a: 1.5 }
    ```

- `divide`

    ```ts
    ColorValue.divide(a: Color, b: number): Color
    ```

    Example:
    ```ts
    import { Color, ColorName, ColorVector } from "@elementium/color"

    const white = new Color("white" as ColorName) // { r: 255, g: 255, b: 255, a: 1 }

    ColorVector.divide(white, 2) // { r: 127.5, g: 127.5, b: 127.5, a: 0.5 }
    ```

---

### Prism

A class to execute more complex operations with colors, such as:

- `addColors`

    This method takes the alpha channel in consideration when addind the colors, by using the [alpha composition algorithm](https://en.wikipedia.org/wiki/Alpha_compositing)

    ```ts
    Prism.addColors(base: Color, overlay: Color): Color
    ```

    Example:
    ```ts
    import { Color, ColorName, Prism } from "@elementium/color"

    const red = new Color("red" as ColorName) // { r: 255, g: 0, b: 0, a: 1 }
    const whiteOverlay = new Color("white" as ColorName).setA(0.2) // { r: 255, g: 255, b: 255, a: 0.2 }

    Prism.addColors(red, whiteOverlay) // { r: 255, g: 51, b: 51, a: 1 }
    ```

---

### ALL_CSS_COLORS

An object with the key-value relationship of each CSS color name with its hexadecimal value. Its type is [`CssColorMap`](#csscolormap)

The color names and their hexadecimal values were extracted from [W3 Schools](https://www.w3schools.com/colors/colors_names.asp)

## Types

### RgbColorObject

```ts
type RgbColorObject = {
    r: number
    g: number
    b: number
    a: number
}
```

**Observation:**

For `r`, `g` and `b` any value is accepted, however, the [`Color`](#color) class expects an integer in the interval from 0 to 255.

For `a`, any value is accepted, however, the [`Color`](#color) class expects an integer or float in the interval from 0 to 1.

As it is a type, there is no verification. It is intended to be used by the library to receive and return the value of each color channel.

---

### ColorName

Its a string of the name of CSS colors. The names were extracted from [W3 Schools](https://www.w3schools.com/colors/colors_names.asp)

---

### CssColorMap

It describes an object where the key is a [`ColorName`](#colorname) and the value is the color's hexadecimal code.

```ts
type CssColorMap = {
    [key in ColorName]: string
}
```

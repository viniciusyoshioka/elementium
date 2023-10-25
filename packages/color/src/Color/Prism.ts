import { Color } from "./Color"
import { ColorVector } from "./ColorVector"


export class Prism {
    static addColors(base: Color, overlay: Color): Color {
        // Formula from https://en.wikipedia.org/wiki/Alpha_compositing

        const colorA = overlay
        const colorB = base

        const alphaResultant = colorA.getA() + colorB.getA() * (1 - colorA.getA())

        const ca = ColorVector.multiply(colorA, colorA.getA())
        const cb = ColorVector.multiply(colorB, colorB.getA())
        const a = (1 - colorA.getA())

        const numerator = ColorVector.sum(ca, ColorVector.multiply(cb, a))
        const colorResultant = ColorVector.divide(numerator, alphaResultant)

        return new Color({
            r: Math.floor(colorResultant.getR()),
            g: Math.floor(colorResultant.getG()),
            b: Math.floor(colorResultant.getB()),
            a: alphaResultant,
        })
    }
}

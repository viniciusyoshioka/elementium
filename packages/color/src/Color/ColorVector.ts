import { Color } from "./Color"


export class ColorVector {
    static sum(a: Color, b: Color): Color {
        return new Color({
            r: a.getR() + b.getR(),
            g: a.getG() + b.getG(),
            b: a.getB() + b.getB(),
            a: a.getA() + b.getA(),
        })
    }

    static subtract(a: Color, b: Color): Color {
        return new Color({
            r: a.getR() - b.getR(),
            g: a.getG() - b.getG(),
            b: a.getB() - b.getB(),
            a: a.getA() - b.getA(),
        })
    }

    static multiply(a: Color, b: number): Color {
        return new Color({
            r: a.getR() * b,
            g: a.getG() * b,
            b: a.getB() * b,
            a: a.getA() * b,
        })
    }

    static divide(a: Color, b: number): Color {
        return new Color({
            r: a.getR() / b,
            g: a.getG() / b,
            b: a.getB() / b,
            a: a.getA() / b,
        })
    }
}

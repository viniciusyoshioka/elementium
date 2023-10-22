import { ALL_CSS_COLORS, ColorName } from "../CssColor"
import { RgbColorObject } from "./types"


export class Color {


    static HexRegex = /^#([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{3})$/
    static RgbRegex = /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/
    static RgbaRegex = /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?((0?\.\d+)|(1(\.0)?))\)$/


    private r: number
    private g: number
    private b: number
    private a: number


    constructor(color: string | RgbColorObject) {
        const { r, g, b, a } = (typeof color === "string")
            ? Color.parse(color)
            : color

        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }


    static isValidHexColor(color: string): boolean {
        return this.HexRegex.test(color)
    }

    static isValidRgbColor(color: string): boolean {
        return this.RgbRegex.test(color)
    }

    static isValidRgbaColor(color: string): boolean {
        return this.RgbaRegex.test(color)
    }

    static isValidNameColor(color: string): boolean {
        return ALL_CSS_COLORS[color as ColorName] !== undefined
    }


    static parseHex(color: string): RgbColorObject {
        color = color.toLowerCase()
        if (!this.isValidHexColor(color)) {
            throw new Error(`Invalid hex color: ${color}`)
        }

        color = color.replace("#", "")
        if (color.length === 3) return {
            r: parseInt(color[0], 16),
            g: parseInt(color[1], 16),
            b: parseInt(color[2], 16),
            a: 1,
        }
        if (color.length === 4) return {
            r: parseInt(color[0], 16),
            g: parseInt(color[1], 16),
            b: parseInt(color[2], 16),
            a: parseInt(color[3], 16) / 255,
        }
        if (color.length === 6) return {
            r: parseInt(color.slice(0, 2), 16),
            g: parseInt(color.slice(2, 4), 16),
            b: parseInt(color.slice(4, 6), 16),
            a: 1,
        }
        if (color.length === 8) return {
            r: parseInt(color.slice(0, 2), 16),
            g: parseInt(color.slice(2, 4), 16),
            b: parseInt(color.slice(4, 6), 16),
            a: parseInt(color.slice(6, 8), 16) / 255,
        }

        throw new Error(`Invalid hex color: ${color}. If the color code is valid, this line should never be reached.`)
    }

    static parseRgb(color: string): RgbColorObject {
        color = color.toLowerCase()
        if (!this.isValidRgbColor(color)) {
            throw new Error(`Invalid rgb color: ${color}`)
        }

        color = color.replace("rgb", "")
        color = color.replace("(", "")
        color = color.replace(")", "")
        color = color.replaceAll(" ", "")

        const [r, g, b] = color.split(",")
        return {
            r: parseInt(r),
            g: parseInt(g),
            b: parseInt(b),
            a: 1,
        }
    }

    static parseRgba(color: string): RgbColorObject {
        color = color.toLowerCase()
        if (!this.isValidRgbaColor(color)) {
            throw new Error(`Invalid rgba color: ${color}`)
        }

        color = color.replace("rgba", "")
        color = color.replace("(", "")
        color = color.replace(")", "")
        color = color.replaceAll(" ", "")

        const [r, g, b, a] = color.split(",")
        return {
            r: parseInt(r),
            g: parseInt(g),
            b: parseInt(b),
            a: parseFloat(a),
        }
    }

    static parseName(color: string): RgbColorObject {
        color = color.toLowerCase()
        if (!this.isValidNameColor(color)) {
            throw new Error(`Invalid color name: ${color}`)
        }

        const hexColorFromName = ALL_CSS_COLORS[color as ColorName].toLowerCase()
        try {
            return this.parseHex(hexColorFromName)
        } catch (error) {
            throw new Error(`Invalid color name: ${color}. If the color name is valid, this line should never be reached.`)
        }
    }

    static parse(color: string): RgbColorObject {
        if (this.isValidHexColor(color)) return this.parseHex(color)
        if (this.isValidRgbColor(color)) return this.parseRgb(color)
        if (this.isValidRgbaColor(color)) return this.parseRgba(color)
        if (this.isValidNameColor(color)) return this.parseName(color)
        throw new Error(`Invalid color: ${color}`)
    }


    toHex(): string {
        const r = this.r.toString(16)
        const g = this.g.toString(16)
        const b = this.b.toString(16)

        if (this.a === 1) {
            return `#${r}${g}${b}`
        }

        const a = Math.round(this.a * 255).toString(16)
        return `#${r}${g}${b}${a}`
    }

    toRgb(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

    toRgba(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }

    toRgbObject(): RgbColorObject {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a,
        }
    }


    getR(): number {
        return this.r
    }

    getG(): number {
        return this.g
    }

    getB(): number {
        return this.b
    }

    getA(): number {
        return this.a
    }


    setR(r: number) {
        this.r = r
        return this
    }

    setG(g: number) {
        this.g = g
        return this
    }

    setB(b: number) {
        this.b = b
        return this
    }

    setA(a: number) {
        this.a = a
        return this
    }
}

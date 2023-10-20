
export interface Color {
    primary: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    inversePrimary: string

    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string

    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string

    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string

    background: string
    onBackground: string

    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    surfaceDim: string
    surfaceBright: string
    surfaceContainerLowest: string
    surfaceContainerLow: string
    surfaceContainer: string
    surfaceContainerHigh: string
    surfaceContainerHighest: string
    inverseSurface: string
    inverseOnSurface: string

    outline: string
    outlineVariant: string
}


export interface Elevation {
    level0: number
    level1: number
    level2: number
    level3: number
    level4: number
    level5: number
    opacityLevel0: number
    opacityLevel1: number
    opacityLevel2: number
    opacityLevel3: number
    opacityLevel4: number
    opacityLevel5: number
}


export interface Shape {
    none: number
    extraSmall: number
    small: number
    medium: number
    large: number
    extraLarge: number
    full: number
}


export type InteractionState = "enabled" | "disabled" | "hover" | "pressed" | "dragged" | "focused"

export interface OpacityState {
    disabled: number
    hover: number
    pressed: number
    dragged: number
    focused: number
}

export interface SurfaceStates {
    container: OpacityState
    content: OpacityState
}


export type TypographyVariant = "display" | "headline" | "title" | "body" | "label"

export type TypographySize = "large" | "medium" | "small"

export type TypographyWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"

export interface TypographyStyle {
    fontSize: number
    fontWeight: TypographyWeight
    lineHeight: number
    letterSpacing: number
}

export type Typography = {
    [variant in TypographyVariant]: {
        [size in TypographySize]: TypographyStyle
    }
}


export interface ElementiumCommonThemeType {
    elevation: Elevation
    shape: Shape
    state: SurfaceStates
    typography: Typography
}


export interface ElementiumThemeType extends ElementiumCommonThemeType {
    isDark: boolean
    color: Color
}

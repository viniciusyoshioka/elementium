
export interface Color {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;

    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;

    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;

    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;

    background: string;
    onBackground: string;

    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;

    outline: string;
    outlineVariant: string;
}


export interface Elevation {
    level0: number;
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
}


export interface Shape {
    none: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    full: number;
}


export interface OpacityState {
    disabled: number;
    hover: number;
    pressed: number;
    dragged: number;
    focused: number;
}

export interface SurfaceStates {
    container: OpacityState;
    content: OpacityState;
    overlay: number;
}


export type TypographyVariant = "display" | "headline" | "title" | "body" | "label"

export type TypographySize = "large" | "medium" | "small"

export type TypographyWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"

export interface TypographyStyle {
    fontSize: number;
    fontWeight: TypographyWeight;
    lineHeight: number;
    letterSpacing: number;
}

export type Typography = {
    [variant in TypographyVariant]: {
        [size in TypographySize]: TypographyStyle;
    };
}


export interface CommonThemeType {
    elevation: Elevation
    shape: Shape;
    state: SurfaceStates;
    typography: Typography;
}


export interface ThemeType extends CommonThemeType {
    isDark: boolean;
    color: Color;
}

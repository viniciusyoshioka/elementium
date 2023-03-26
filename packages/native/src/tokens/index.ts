
export interface ColorThemeTokens {
    background: string;
    onBackground: string;

    surface: string;
    onSurface: string;

    surfaceVariant: string;
    onSurfaceVariant: string;

    outline: string;
    outlineVariant: string;

    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;

    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
}

export interface ElevationTokens {
    level0: number;
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
}

export interface ShapeTokens {
    none: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    full: number;
}

export type InteractionStateToken = "enabled" | "hover" | "focus" | "pressed" | "dragged" | "disabled"

export interface StateOpacityTokens {
    hover: number;
    focus: number;
    pressed: number;
    dragged: number;
    disabled: number;
}

export interface Tokens {
    color: {
        light: ColorThemeTokens;
        dark: ColorThemeTokens;
    };
    elevation: ElevationTokens;
    shape: ShapeTokens;
    stateOpacity: {
        container: StateOpacityTokens;
        containerOverlay: number;
        content: StateOpacityTokens;
    };
}


export const tokens: Tokens = {
    color: {
        light: {
            background: "transparent",
            onBackground: "transparent",

            surface: "#FFFBFE",
            onSurface: "#1C1B1F",

            surfaceVariant: "transparent",
            onSurfaceVariant: "transparent",

            outline: "#79747E",
            outlineVariant: "transparent",

            error: "transparent",
            onError: "transparent",
            errorContainer: "transparent",
            onErrorContainer: "transparent",

            primary: "transparent",
            onPrimary: "transparent",
            primaryContainer: "transparent",
            onPrimaryContainer: "transparent",
        },
        dark: {
            background: "transparent",
            onBackground: "transparent",

            surface: "#1C1B1F",
            onSurface: "#E6E1E5",

            surfaceVariant: "transparent",
            onSurfaceVariant: "transparent",

            outline: "#938F99",
            outlineVariant: "transparent",

            error: "transparent",
            onError: "transparent",
            errorContainer: "transparent",
            onErrorContainer: "transparent",

            primary: "transparent",
            onPrimary: "transparent",
            primaryContainer: "transparent",
            onPrimaryContainer: "transparent",
        },
    },
    elevation: {
        level0: 0,
        level1: 1,
        level2: 3,
        level3: 6,
        level4: 8,
        level5: 12,
    },
    shape: {
        none: 0,
        extraSmall: 4,
        small: 8,
        medium: 12,
        large: 16,
        extraLarge: 28,
        full: 10000,
    },
    stateOpacity: {
        container: {
            hover: 0.08,
            focus: 0.12,
            pressed: 0.12,
            dragged: 0.16,
            disabled: 0.12,
        },
        containerOverlay: 0.12,
        content: {
            hover: 0.08,
            focus: 0.12,
            pressed: 0.12,
            dragged: 0.16,
            disabled: 0.38,
        },
    },
}

import type { AppThemeType } from "./types"


export const LightTheme: AppThemeType = {
    name: "Light theme",
    isDark: false,
    switchTheme: () => {},
    color: {
        background: "rgb(222, 222, 222)",
        onBackground: "rgb(0, 0, 0)",

        surface: "rgb(255, 255, 255)",
        onSurface: "rgb(0, 0, 0)",
        surfaceVariant: "rgb(200, 200, 200)",
        onSurfaceVariant: "rgb(0, 0, 0)",
        outline: "rgb(121, 116, 126)",
        outlineVariant: "rgb(180, 180, 180)",

        primary: "teal",
        onPrimary: "white",
        primaryContainer: "lightcyan",
        onPrimaryContainer: "#006900",

        error: "#d80000",
        onError: "white",
        errorContainer: "#ffc8c8",
        onErrorContainer: "#b30000",
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
    typography: {
        display: {
            large: {
                font: "Roboto Regular",
                lineHeight: 64,
                size: 57,
                tracking: 0,
                weight: "400",
            },
            medium: {
                font: "Roboto Regular",
                lineHeight: 52,
                size: 45,
                tracking: 0,
                weight: "400",
            },
            small: {
                font: "Roboto Regular",
                lineHeight: 44,
                size: 36,
                tracking: 0,
                weight: "400",
            },
        },
        headline: {
            large: {
                font: "Roboto Regular",
                lineHeight: 40,
                size: 32,
                tracking: 0,
                weight: "400",
            },
            medium: {
                font: "Roboto Regular",
                lineHeight: 36,
                size: 28,
                tracking: 0,
                weight: "400",
            },
            small: {
                font: "Roboto Regular",
                lineHeight: 32,
                size: 24,
                tracking: 0,
                weight: "400",
            },
        },
        title: {
            large: {
                font: "Roboto Regular",
                lineHeight: 28,
                size: 22,
                tracking: 0,
                weight: "400",
            },
            medium: {
                font: "Roboto Medium",
                lineHeight: 24,
                size: 16,
                tracking: 0.15,
                weight: "500",
            },
            small: {
                font: "Roboto Medium",
                lineHeight: 20,
                size: 14,
                tracking: 0.1,
                weight: "500",
            },
        },
        label: {
            large: {
                font: "Roboto Medium",
                lineHeight: 20,
                size: 14,
                tracking: 0.1,
                weight: "500",
            },
            medium: {
                font: "Roboto Medium",
                lineHeight: 16,
                size: 12,
                tracking: 0.5,
                weight: "500",
            },
            small: {
                font: "Roboto Medium",
                lineHeight: 16,
                size: 11,
                tracking: 0.5,
                weight: "500",
            },
        },
        body: {
            large: {
                font: "Roboto Medium",
                lineHeight: 24,
                size: 16,
                tracking: 0.5,
                weight: "400",
            },
            medium: {
                font: "Roboto Regular",
                lineHeight: 20,
                size: 14,
                tracking: 0.25,
                weight: "400",
            },
            small: {
                font: "Roboto Regular",
                lineHeight: 16,
                size: 12,
                tracking: 0.4,
                weight: "400",
            },
        },
    },
}

import { ElementiumCommonThemeType } from "./types"


export const ElementiumCommonTheme: ElementiumCommonThemeType = {
    elevation: {
        level0: 0,
        level1: 1,
        level2: 3,
        level3: 6,
        level4: 8,
        level5: 12,
        opacityLevel0: 0,
        opacityLevel1: 0.05,
        opacityLevel2: 0.08,
        opacityLevel3: 0.11,
        opacityLevel4: 0.12,
        opacityLevel5: 0.14,
    },
    shape: {
        none: 0,
        extraSmall: 4,
        small: 8,
        medium: 12,
        large: 16,
        extraLarge: 28,
        full: 1_000_000_000,
    },
    state: {
        container: {
            disabled: 0.12,
            hover: 0.08,
            pressed: 0.12,
            dragged: 0.16,
            focused: 0.12,
        },
        content: {
            disabled: 0.38,
            hover: 0.08,
            pressed: 0.12,
            dragged: 0.16,
            focused: 0.12,
        },
    },
    typography: {
        display: {
            large: {
                fontSize: 57,
                fontWeight: "normal",
                lineHeight: 64,
                letterSpacing: 0,
            },
            medium: {
                fontSize: 45,
                fontWeight: "normal",
                lineHeight: 52,
                letterSpacing: 0,
            },
            small: {
                fontSize: 36,
                fontWeight: "normal",
                lineHeight: 44,
                letterSpacing: 0,
            },
        },
        headline: {
            large: {
                fontSize: 32,
                fontWeight: "normal",
                lineHeight: 40,
                letterSpacing: 0,
            },
            medium: {
                fontSize: 28,
                fontWeight: "normal",
                lineHeight: 36,
                letterSpacing: 0,
            },
            small: {
                fontSize: 24,
                fontWeight: "normal",
                lineHeight: 32,
                letterSpacing: 0,
            },
        },
        title: {
            large: {
                fontSize: 22,
                fontWeight: "normal",
                lineHeight: 28,
                letterSpacing: 0,
            },
            medium: {
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 24,
                letterSpacing: 0.15,
            },
            small: {
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                letterSpacing: 0.1,
            },
        },
        body: {
            large: {
                fontSize: 16,
                fontWeight: "normal",
                lineHeight: 24,
                letterSpacing: 0.5,
            },
            medium: {
                fontSize: 14,
                fontWeight: "normal",
                lineHeight: 20,
                letterSpacing: 0.25,
            },
            small: {
                fontSize: 12,
                fontWeight: "normal",
                lineHeight: 16,
                letterSpacing: 0.4,
            },
        },
        label: {
            large: {
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                letterSpacing: 0.1,
            },
            medium: {
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 16,
                letterSpacing: 0.5,
            },
            small: {
                fontSize: 11,
                fontWeight: "500",
                lineHeight: 16,
                letterSpacing: 0.5,
            },
        },
    },
}

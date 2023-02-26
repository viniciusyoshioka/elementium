
export type FontWeight = "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"


export interface AppThemeType {
    name: string;
    isDark: boolean;
    switchTheme: () => void;
    color: {
        background: string;
        onBackground: string;

        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
        outline: string;
        outlineVariant: string;

        primary: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;

        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
    };
    elevation: {
        level0: number;
        level1: number;
        level2: number;
        level3: number;
        level4: number;
        level5: number;
    };
    shape: {
        none: number;
        extraSmall: number;
        small: number;
        medium: number;
        large: number;
        extraLarge: number;
        full: number;
    };
    typography: {
        display: {
            large: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            medium: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            small: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
        };
        headline: {
            large: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            medium: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            small: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
        };
        title: {
            large: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            medium: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            small: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
        };
        label: {
            large: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            medium: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            small: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
        };
        body: {
            large: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            medium: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
            small: {
                font: string;
                lineHeight: number;
                size: number;
                tracking: number;
                weight: FontWeight;
            };
        };
    };
}

import { ThemeType } from "."
import { CommonTheme } from "./common"


export const LightTheme: ThemeType = {
    ...CommonTheme,
    isDark: false,
    color: {
        primary: "#6750a4ff",
        onPrimary: "#ffffffff",
        primaryContainer: "#eaddffff",
        onPrimaryContainer: "#21005dff",
        secondary: "#625b71ff",
        onSecondary: "#ffffffff",
        secondaryContainer: "#e8def8ff",
        onSecondaryContainer: "#1d192bff",
        tertiary: "#7d5260ff",
        onTertiary: "#ffffffff",
        tertiaryContainer: "#ffd8e4ff",
        onTertiaryContainer: "#31111dff",
        error: "#b3261eff",
        onError: "#ffffffff",
        errorContainer: "#f9dedcff",
        onErrorContainer: "#410e0bff",
        background: "#fffbfeff",
        onBackground: "#1c1b1fff",
        surface: "#fffbfeff",
        onSurface: "#1c1b1fff",
        surfaceVariant: "#e7e0ecff",
        onSurfaceVariant: "#49454fff",
        outline: "#79747eff",
        outlineVariant: "#cac4d0ff",
    },
}

import { ThemeType } from "."
import { CommonTheme } from "./common"


export const DarkTheme: ThemeType = {
    ...CommonTheme,
    isDark: true,
    color: {
        primary: "#d0bcffff",
        onPrimary: "#381e72ff",
        primaryContainer: "#4f378bff",
        onPrimaryContainer: "#eaddffff",
        secondary: "#ccc2dcff",
        onSecondary: "#332d41ff",
        secondaryContainer: "#4a4458ff",
        onSecondaryContainer: "#e8def8ff",
        tertiary: "#efb8c8ff",
        onTertiary: "#492532ff",
        tertiaryContainer: "#633b48ff",
        onTertiaryContainer: "#ffd8e4ff",
        error: "#f2b8b5ff",
        onError: "#601410ff",
        errorContainer: "#8c1d18ff",
        onErrorContainer: "#f9dedcff",
        background: "#1c1b1fff",
        onBackground: "#e6e1e5ff",
        surface: "#1c1b1fff",
        onSurface: "#e6e1e5ff",
        surfaceVariant: "#49454fff",
        onSurfaceVariant: "#cac4d0ff",
        outline: "#938f99ff",
        outlineVariant: "#49454fff",
    },
}

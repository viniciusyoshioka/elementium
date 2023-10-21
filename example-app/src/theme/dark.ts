import { ElementiumDarkTheme } from "@elementium/theme"

import { AppThemeType } from "./types"


export const DarkTheme: AppThemeType = {
    ...ElementiumDarkTheme,
    name: "Dark theme",
    switchTheme: () => {},
}

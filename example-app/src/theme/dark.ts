import { ElementiumDarkTheme } from "@elementium/native"

import { AppThemeType } from "./types"


export const DarkTheme: AppThemeType = {
    ...ElementiumDarkTheme,
    name: "Dark theme",
    switchTheme: () => {},
}

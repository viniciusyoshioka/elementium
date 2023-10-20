import { ElementiumLightTheme } from "@elementium/native"

import { AppThemeType } from "./types"


export const LightTheme: AppThemeType = {
    ...ElementiumLightTheme,
    name: "Light theme",
    switchTheme: () => {},
}

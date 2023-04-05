import { createContext, useContext } from "react"

import { LightTheme } from "./light"
import { AppThemeType } from "./types"


const AppThemeContext = createContext<AppThemeType>(LightTheme)


export const AppThemeProvider = AppThemeContext.Provider


export function useAppTheme() {
    return useContext(AppThemeContext)
}

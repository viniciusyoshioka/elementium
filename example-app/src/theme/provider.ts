import { createContext, useContext } from "react"

import { LightTheme } from "./light"


const AppThemeContext = createContext(LightTheme)


export const AppThemeProvider = AppThemeContext.Provider


export function useAppTheme() {
    return useContext(AppThemeContext)
}

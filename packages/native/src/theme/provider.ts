import { createContext, useContext } from "react"

import { ElementiumLightTheme } from "./light"


const ElementiumThemeContext = createContext(ElementiumLightTheme)


export const ElementiumThemeProvider = ElementiumThemeContext.Provider


export function useElementiumTheme() {
    return useContext(ElementiumThemeContext)
}

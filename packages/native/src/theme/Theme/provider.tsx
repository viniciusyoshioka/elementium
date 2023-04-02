import { createContext, ProviderProps, useContext } from "react"

import { LightTheme } from "./light"
import { ThemeType } from "./types"


const ThemeContext = createContext(LightTheme)


export function ThemeProvider(props: ProviderProps<ThemeType>) {
    return <ThemeContext.Provider {...props} />
}


export function useTheme() {
    return useContext(ThemeContext)
}

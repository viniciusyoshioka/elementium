import { createContext, ReactNode, useContext } from "react"


export type ThemeScheme = "light" | "dark"


const ThemeSchemeContext = createContext<ThemeScheme>("light")


export interface ThemeSchemeProviderProps {
    value: ThemeScheme;
    children?: ReactNode;
}

export function ThemeSchemeProvider(props: ThemeSchemeProviderProps) {
    return (
        <ThemeSchemeContext.Provider value={props.value}>
            {props.children}
        </ThemeSchemeContext.Provider>
    )
}


export function useThemeScheme() {
    return useContext(ThemeSchemeContext)
}

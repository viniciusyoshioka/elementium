import { ElementiumDarkTheme, ElementiumLightTheme, ElementiumThemeProvider } from "@elementium/native"
import { useState } from "react"
import { useColorScheme } from "react-native"
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper"

import { useKeepAwakeOnDev } from "@hooks"
import { Router } from "@router"
import { AppThemeProvider, AppThemeType } from "@theme"


export function App() {


    useKeepAwakeOnDev()


    const colorTheme = useColorScheme()

    const [isDarkTheme, setIsDarkTheme] = useState(colorTheme === "dark")


    function getTheme(): AppThemeType {
        const switchTheme = () => setIsDarkTheme(!isDarkTheme)

        if (isDarkTheme) {
            const DarkTheme = require("./theme").DarkTheme as AppThemeType
            DarkTheme.switchTheme = switchTheme
            return DarkTheme
        }

        const LightTheme = require("./theme").LightTheme as AppThemeType
        LightTheme.switchTheme = switchTheme
        return LightTheme
    }


    return (
        <ElementiumThemeProvider value={isDarkTheme ? ElementiumDarkTheme : ElementiumLightTheme}>
            <PaperProvider theme={isDarkTheme ? MD3DarkTheme : MD3LightTheme}>
                <AppThemeProvider value={getTheme()}>
                    <Router />
                </AppThemeProvider>
            </PaperProvider>
        </ElementiumThemeProvider>
    )
}

import { StatusBar as RNStatusBar, StatusBarProps } from "react-native"

import { useTheme } from "./provider"


export function StatusBar(props: StatusBarProps) {


    const { color, isDark } = useTheme()


    return (
        <RNStatusBar
            {...props}
            barStyle={props.barStyle ?? (isDark ? "light-content" : "dark-content")}
            backgroundColor={props.backgroundColor ?? color.background}
            hidden={props.hidden ?? false}
        />
    )
}

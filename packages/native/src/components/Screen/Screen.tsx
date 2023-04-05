import { StyleSheet, View, ViewProps } from "react-native"

import { useTheme } from "../../theme"


export interface ScreenProps extends ViewProps {}


export function Screen(props: ScreenProps) {

    const { color } = useTheme()

    return (
        <View
            {...props}
            style={[
                styles.screen,
                { backgroundColor: color.background },
                props.style
            ]}
        />
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
})

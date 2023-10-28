import { useElementiumTheme } from "@elementium/theme"
import { StyleSheet, View, ViewProps } from "react-native"


export interface ScreenProps extends ViewProps {}


export function Screen(props: ScreenProps) {

    const { color } = useElementiumTheme()

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
    },
})

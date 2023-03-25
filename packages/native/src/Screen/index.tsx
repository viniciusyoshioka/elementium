import { StyleSheet, View, ViewProps } from "react-native"


export interface ScreenProps extends ViewProps {}


export function Screen(props: ScreenProps) {
    return (
        <View
            {...props}
            style={[styles.screen, props.style]}
        />
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
})

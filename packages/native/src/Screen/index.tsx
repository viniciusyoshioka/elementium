import { StyleSheet, View, ViewProps } from "react-native"


export function Screen(props: ViewProps) {
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

import { StyleSheet, View } from "react-native"

import { Text, TextProps } from ".."
import { useElementiumTheme } from "../../theme"


export interface ModalDescriptionProps extends TextProps {}


export function ModalDescription(props: ModalDescriptionProps) {

    const { color } = useElementiumTheme()

    return (
        <View style={styles.wrapper}>
            <Text
                variant={"body"}
                size={"medium"}
                {...props}
                style={[styles.description, { color: color.onSurfaceVariant }, props.style]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
    description: {
        flex: 1,
        marginTop: 16,
    },
})

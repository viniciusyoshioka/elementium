import { StyleSheet, View } from "react-native"

import { Text, TextProps } from ".."


export interface ModalDescriptionProps extends TextProps {}


export function ModalDescription(props: ModalDescriptionProps) {
    return (
        <View style={styles.wrapper}>
            <Text
                variant={"body"}
                size={"medium"}
                {...props}
                style={[styles.description, props.style]}
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

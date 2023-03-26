import { StyleSheet, View, ViewProps } from "react-native"


export interface ModalActionsProps extends ViewProps {}


export function ModalActions(props: ModalActionsProps) {
    return (
        <View
            {...props}
            style={[styles.actions, props.style]}
        />
    )
}


const styles = StyleSheet.create({
    actions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 24,
        columnGap: 8,
    },
})

import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native"


export interface ModalScrimProps extends TouchableOpacityProps {}


export function ModalScrim(props: ModalScrimProps) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            {...props}
            style={[styles.scrim, props.style]}
        />
    )
}


const styles = StyleSheet.create({
    scrim: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
})

import { StyleSheet, View } from "react-native"

import { Icon, IconProps } from ".."


export interface ModalIconProps extends IconProps {}


export function ModalIcon(props: ModalIconProps) {
    return (
        <View style={styles.wrapper}>
            <Icon
                size={24}
                {...props}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
})

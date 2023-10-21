import { useElementiumTheme } from "@elementium/theme"
import { StyleSheet, View } from "react-native"

import { Icon, IconProps } from ".."


export interface ModalIconProps extends IconProps {}


export function ModalIcon(props: ModalIconProps) {


    const { color } = useElementiumTheme()


    return (
        <View style={styles.wrapper}>
            <Icon
                size={24}
                color={color.secondary}
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
        marginTop: 24,
        marginHorizontal: 24,
    },
})

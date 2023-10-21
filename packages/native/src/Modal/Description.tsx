import { useElementiumTheme } from "@elementium/theme"
import { StyleSheet, TextStyle, View } from "react-native"
import { Text, TextProps } from "react-native-paper"


export interface ModalDescriptionProps extends TextProps<"bodyMedium"> {}


export function ModalDescription(props: ModalDescriptionProps) {


    const { color } = useElementiumTheme()


    const descriptionStyle: TextStyle = {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 24,
        color: color.onSurfaceVariant,
    }


    return (
        <View style={styles.wrapper}>
            <Text
                variant={"bodyMedium"}
                {...props}
                style={[descriptionStyle, props.style]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
})

import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import { useTheme } from "../../theme"


export type DividerVariant = "horizontal" | "vertical"


export interface DividerProps {
    variant?: DividerVariant;
    style?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
}


export function Divider(props: DividerProps) {


    const { color } = useTheme()

    const style = StyleSheet.flatten(props.style)
    const dividerColor = (style && style.backgroundColor) ?? color.outlineVariant
    const dividerColorStyle = { backgroundColor: dividerColor }


    if (props.variant === "vertical") {
        return (
            <View style={props.wrapperStyle}>
                <View
                    style={[styles.dividerVertical, dividerColorStyle, style]}
                />
            </View>
        )
    }


    return (
        <View style={props.wrapperStyle}>
            <View
                style={[styles.dividerHorizontal, dividerColorStyle, style]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    dividerHorizontal: {
        width: "100%",
        height: 1,
    },
    dividerVertical: {
        width: 1,
        height: "100%",
    },
})

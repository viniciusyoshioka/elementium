import { Color } from "@elementium/color"
import { PressableProps, StyleProp, StyleSheet, ViewStyle } from "react-native"

import { ExtendableIconProps, Icon, Pressable } from "../../"
import { useElementiumTheme } from "../../../theme"


export const HEADER_BUTTON_SIZE = 48
export const HEADER_BUTTON_RADIUS = HEADER_BUTTON_SIZE / 2


type PropsToOmitFromPressable = "style"
type OmittedPressableProps = Omit<PressableProps, PropsToOmitFromPressable>

type PropsToOmitFromIcon = "children" | "style" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress"
type OmittedIconProps = Omit<ExtendableIconProps, PropsToOmitFromIcon>

export interface HeaderButtonProps extends OmittedPressableProps, OmittedIconProps {
    style?: StyleProp<ViewStyle>
}


export function HeaderButton(props: HeaderButtonProps) {


    const { color, state } = useElementiumTheme()


    const colorStyle = props.iconColor ?? color.onSurface

    const contentColor = props.disabled
        ? new Color(colorStyle as string).setA(state.content.disabled).toRgba()
        : colorStyle
    const rippleColor = new Color(colorStyle as string).setA(state.container.pressed).toRgba()


    return (
        <Pressable
            android_ripple={{ color: rippleColor, radius: HEADER_BUTTON_RADIUS }}
            {...props}
            style={[styles.container, props.style]}
        >
            <Icon
                name={props.iconName}
                group={props.iconGroup}
                size={props.iconSize ?? 24}
                color={contentColor}
            />
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: HEADER_BUTTON_SIZE,
        height: HEADER_BUTTON_SIZE,
    },
})

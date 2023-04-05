import { Color } from "@elementium/color"
import { useCallback, useMemo } from "react"
import { ColorValue, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"

import { ExtendableOptionalIconProps, Icon, Pressable, PressableProps, Text } from ".."
import { useTheme } from "../../theme"


type PropertiesToRemove = "style" | "children" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled"


export type ButtonVariant = "filled" | "outline" | "text"


export interface ButtonProps extends PressableProps, Omit<ExtendableOptionalIconProps, PropertiesToRemove> {
    text: string;
    variant?: ButtonVariant;
    style?: StyleProp<TextStyle>;
}


export const defaultButtonVariant: ButtonVariant = "filled"


export function Button(props: ButtonProps) {


    const { color, state } = useTheme()


    const style = StyleSheet.flatten(props.style)

    const backgroundColorStyle: ColorValue = useMemo(() => {
        const backgroundColorFromStyle = (style && style.backgroundColor)

        if (!props.variant || props.variant === "filled") {
            return backgroundColorFromStyle ?? color.primary
        }
        return "transparent"
    }, [style, props.variant, color.primary])

    const colorStyle: ColorValue = useMemo(() => {
        const colorFromStyle = (style && style.color)

        if (!props.variant || props.variant === "filled") {
            return colorFromStyle ?? color.onPrimary
        }
        return colorFromStyle ?? color.primary
    }, [style, props.variant, color.onPrimary, color.primary])

    const borderColorStyle: ColorValue = useMemo(() => {
        const borderColorFromStyle = (style && style.borderColor)
        return borderColorFromStyle ?? color.outline
    }, [style, color.outline])


    const containerStyle: ViewStyle = useMemo(() => {
        const styleObject: ViewStyle = {
            ...styles.container,
            paddingLeft: 24,
            paddingRight: 24,
        }

        if (!props.variant || props.variant === "filled") {
            if (props.iconName) styleObject.paddingLeft = 16
        } else if (props.variant === "outline") {
            if (props.iconName) styleObject.paddingLeft = 16
            styleObject.borderWidth = 1
        } else if (props.variant === "text") {
            props.iconName ? styleObject.paddingLeft = 12 : styleObject.paddingLeft = 12
            props.iconName ? styleObject.paddingRight = 16 : styleObject.paddingRight = 12
            styleObject.minWidth = 48
        }

        return styleObject
    }, [props.variant, props.iconName])

    const containerColorStyle: ViewStyle = useMemo(() => {
        if (!props.variant || props.variant === "filled") {
            if (props.disabled) {
                const disabledBackgroundColor = new Color(color.onSurface)
                    .setA(state.container.disabled)
                    .toRgba()

                return { backgroundColor: disabledBackgroundColor }
            }
            return { backgroundColor: backgroundColorStyle }
        }

        if (props.variant === "outline") {
            if (props.disabled) {
                const disabledBorderColor = new Color(color.onSurface)
                    .setA(state.container.disabled)
                    .toRgba()

                return { borderColor: disabledBorderColor, backgroundColor: backgroundColorStyle }
            }
            return { borderColor: borderColorStyle, backgroundColor: backgroundColorStyle }
        }

        return { backgroundColor: backgroundColorStyle }
    }, [
        props.variant,
        props.disabled,
        color.onSurface,
        state.container.disabled,
        backgroundColorStyle,
        borderColorStyle
    ])

    const contentColor: ColorValue = useMemo(() => {
        if (props.disabled) {
            return new Color(color.onSurface)
                .setA(state.content.disabled)
                .toRgba()
        }

        return colorStyle
    }, [props.disabled, color.onSurface, state.content.disabled, colorStyle])

    const rippleColor: ColorValue = useMemo(() => {
        if (!props.variant || props.variant === "filled") {
            return new Color(colorStyle as string)
                .setA(state.container.hover)
                .toRgba()
        }

        return new Color(colorStyle as string)
            .setA(state.container.pressed)
            .toRgba()
    }, [props.variant, colorStyle, state.container.hover, state.container.pressed])


    const ButtonIcon = useCallback(() => {
        if (!props.iconName) return null

        return (
            <Icon
                name={props.iconName}
                group={props.iconGroup}
                size={18}
                style={{ paddingRight: 8, color: contentColor }}
            />
        )
    }, [props.iconName, props.iconGroup, contentColor])


    return (
        <Pressable
            {...props}
            style={[containerStyle, props.style, containerColorStyle]}
            android_ripple={{ color: rippleColor }}
        >
            <ButtonIcon />

            <Text
                variant={"label"}
                size={"large"}
                style={{ color: contentColor }}
                children={props.text}
            />
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 40,
        maxHeight: 40,
        borderRadius: 20,
    },
})

import { Color } from "@elementium/color"
import { useMemo } from "react"
import { ColorValue, GestureResponderEvent, StyleProp, StyleSheet, ViewStyle } from "react-native"

import { Icon, Pressable, PressableProps } from ".."
import { useElementiumTheme } from "../../theme"


export interface RadioButtonColors {
    checked: ColorValue
    unchecked: ColorValue
}


export interface RadioButtonEspecificProps {
    value?: boolean
    onValueChange?: (value: boolean) => void
    colors?: RadioButtonColors
    style?: StyleProp<ViewStyle>
}


export interface RadioButtonProps extends Omit<PressableProps, "style">, RadioButtonEspecificProps {}


export function RadioButton(props: RadioButtonProps) {


    const { color, state } = useElementiumTheme()

    const style = StyleSheet.flatten(props.style)
    const checkedColor = props.colors?.checked ?? color.primary
    const uncheckedColor = props.colors?.unchecked ?? color.onSurfaceVariant

    const contentColor = useMemo(() => {
        if (props.disabled) {
            return new Color(color.onSurface).setA(state.content.disabled).toRgba()
        }
        if (props.value) {
            return checkedColor
        }
        return uncheckedColor
    }, [props.disabled, color.onSurface, state.content.disabled, props.value, checkedColor, uncheckedColor])

    const rippleColor = useMemo(() => {
        if (props.value) {
            return new Color(color.onSurface).setA(state.content.pressed).toRgba()
        }
        return new Color(checkedColor as string).setA(state.content.pressed).toRgba()
    }, [props.value, color.onSurface, state.content.pressed, checkedColor])


    function RadioIcon() {
        const iconName = props.value ? "radio-button-checked" : "radio-button-unchecked"
        return (
            <Icon
                name={iconName}
                size={20}
                color={contentColor}
            />
        )
    }


    function onPress(e: GestureResponderEvent) {
        if (props.onValueChange && !props.disabled) {
            props.onValueChange(!props.value)
        }
        if (props.onPress) {
            props.onPress(e)
        }
    }


    return (
        <Pressable
            android_ripple={{ color: rippleColor }}
            {...props}
            style={[styles.container, style]}
            onPress={onPress}
        >
            <RadioIcon />
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
    },
})

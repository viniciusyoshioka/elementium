import { Color, Prisma } from "@elementium/color"
import { useCallback, useMemo, useState } from "react"
import {
    ColorValue,
    GestureResponderEvent,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle
} from "react-native"

import { ExtendableOptionalIconProps, Icon, Text, useThemeScheme } from ".."
import { InteractionStateToken, tokens } from "../tokens"


export interface OutlineButtonProps extends
    Omit<ExtendableOptionalIconProps, "style">,
    Omit<TouchableOpacityProps, "style">
{
    text: string;
    style?: StyleProp<TextStyle>;
}


const defaultOutlineButtonBackgroundColor: string | ColorValue = "transparent"
const defaultOutlineButtonBorderColor: string | ColorValue = "gray"


// TODO add ripple effect
// TODO add animation for color change
// TODO add hover state
// TODO add focus state
export function OutlineButton(props: OutlineButtonProps) {


    const themeScheme = useThemeScheme()

    const style = useMemo(() => StyleSheet.flatten(props.style), [props.style])
    const backgroundColor = useMemo(() => (
        style.backgroundColor ?? defaultOutlineButtonBackgroundColor
    ), [style.backgroundColor])
    const borderColor = useMemo(() => (
        style.borderColor ?? defaultOutlineButtonBorderColor
    ), [style.borderColor])
    const color = useMemo(() => {
        const themeContentColor = themeScheme === "dark" ? "white" : "black"
        return style.color ?? themeContentColor
    }, [style.color])

    const [interactionState, setInteractionState] = useState<InteractionStateToken>("enabled")


    const contentColor: string | ColorValue = useMemo(() => {
        if (props.disabled) {
            return new Color(tokens.color[themeScheme ?? "light"].onSurface)
                .setA(tokens.stateOpacity.content.disabled)
                .toRgba()
        }

        return color
    }, [props.disabled, themeScheme, color])

    const buttonStyle: ViewStyle = useMemo(() => {
        const buttonPaddingLeft = props.iconName ? 16 : 24
        const buttonPaddingRight = props.iconName ? 24 : 24
        return {
            ...styles.container,
            paddingLeft: buttonPaddingLeft,
            paddingRight: buttonPaddingRight,
        }
    }, [props.iconName])

    const buttonColorStyle: ViewStyle = useMemo(() => {
        const colorStyle: ViewStyle = {
            borderColor: borderColor,
            backgroundColor: backgroundColor,
        }

        if (props.disabled) {
            const disabledBorderColor = new Color(tokens.color[themeScheme ?? "light"].onSurface)
                .setA(tokens.stateOpacity.container.disabled)
                .toRgba()

            colorStyle.borderColor = disabledBorderColor
            colorStyle.backgroundColor = "transparent"
        } else if (interactionState === "pressed") {
            const currentBackgroundColor = new Color(backgroundColor as string)
            const overlayColor = new Color(contentColor as string).setA(tokens.stateOpacity.container.pressed)
            const newBackgroundColor = Prisma.addColors(currentBackgroundColor, overlayColor).toRgba()

            colorStyle.backgroundColor = newBackgroundColor
        }

        return colorStyle
    }, [borderColor, backgroundColor, props.disabled, themeScheme, interactionState, contentColor])


    const ButtonIcon = useCallback(() => {
        if (!props.iconName) return null

        return (
            <Icon
                name={props.iconName}
                group={props.iconGroup}
                size={18}
                style={{
                    paddingRight: 8,
                    color: contentColor,
                }}
            />
        )
    }, [props.iconName, props.iconGroup, contentColor])


    function onPressIn(e: GestureResponderEvent) {
        setInteractionState("pressed")
        if (props.onPressIn) props.onPressIn(e)
    }

    function onPressOut(e: GestureResponderEvent) {
        setInteractionState("enabled")
        if (props.onPressOut) props.onPressOut(e)
    }


    return (
        <TouchableOpacity
            activeOpacity={1}
            {...props}
            style={[buttonStyle, props.style, buttonColorStyle]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <ButtonIcon />

            <Text
                variant={"label"}
                size={"large"}
                style={{ color: contentColor }}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
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
        borderWidth: 1,
    },
})

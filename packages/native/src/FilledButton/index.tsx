import { Color, Prisma } from "@elementium/color"
import { useCallback, useMemo, useState } from "react"
import {
    ColorValue,
    GestureResponderEvent,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle
} from "react-native"

import { ExtendableOptionalIconProps, Icon, Text, useThemeScheme } from ".."
import { InteractionStateToken, tokens } from "../tokens"


export interface FilledButtonProps extends
    Omit<ExtendableOptionalIconProps, "style">,
    Omit<TouchableOpacityProps, "style">
{
    text: string;
    style?: TextStyle;
}


const defaultBackgroundColor = "teal"


export function FilledButton(props: FilledButtonProps) {


    const themeScheme = useThemeScheme()

    const backgroundColor = useMemo(() => (
        props.style?.backgroundColor ?? defaultBackgroundColor
    ), [props.style?.backgroundColor])
    const color = useMemo(() => {
        const themeContentColor = themeScheme === "dark" ? "white" : "black"
        return props.style?.color ?? themeContentColor
    }, [props.style?.color])

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
        const defaultButtonStyle: ViewStyle = {
            ...styles.container,
            paddingLeft: buttonPaddingLeft,
            paddingRight: buttonPaddingRight,
            backgroundColor: backgroundColor,
        }

        if (props.disabled) {
            const disabledBackgroundColor = new Color(tokens.color[themeScheme ?? "light"].onSurface)
                .setA(tokens.stateOpacity.container.disabled)
                .toRgba()

            defaultButtonStyle.backgroundColor = disabledBackgroundColor
        } else if (interactionState === "pressed") {
            const currentBackgroundColor = new Color(backgroundColor as string)
            const overlayColor = new Color(contentColor as string).setA(tokens.stateOpacity.container.hover)
            const newBackgroundColor = Prisma.addColors(currentBackgroundColor, overlayColor).toRgba()

            defaultButtonStyle.backgroundColor = newBackgroundColor
            defaultButtonStyle.elevation = tokens.elevation.level0
        }

        return defaultButtonStyle
    }, [props.iconName, backgroundColor, props.disabled, themeScheme, interactionState, contentColor])


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
            style={[buttonStyle, props.style]}
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
    },
})
import { Color } from "@elementium/color"
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


export interface TextButtonProps extends
    Omit<ExtendableOptionalIconProps, "style">,
    Omit<TouchableOpacityProps, "style">
{
    text: string;
    style?: StyleProp<TextStyle>;
}


// TODO add ripple effect
// TODO add animation for color change
// TODO add hover state
// TODO add focus state
export function TextButton(props: TextButtonProps) {


    const themeScheme = useThemeScheme()

    const style = useMemo(() => StyleSheet.flatten(props.style), [props.style])
    const color = useMemo(() => style.color ?? "teal", [style.color])

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
        const buttonPaddingLeft = props.iconName ? 12 : 12
        const buttonPaddingRight = props.iconName ? 16 : 12
        return {
            ...styles.container,
            paddingLeft: buttonPaddingLeft,
            paddingRight: buttonPaddingRight,
        }
    }, [props.iconName])

    const buttonColorStyle: ViewStyle = useMemo(() => {
        const colorStyle: ViewStyle = {
            backgroundColor: "transparent",
        }

        if (interactionState === "pressed") {
            const pressedBackgroundColor = new Color(contentColor as string)
                .setA(tokens.stateOpacity.container.pressed)
                .toRgba()

            colorStyle.backgroundColor = pressedBackgroundColor
        }

        return colorStyle
    }, [interactionState, contentColor])


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
        minWidth: 48,
        height: 40,
        maxHeight: 40,
        borderRadius: 20,
    },
})

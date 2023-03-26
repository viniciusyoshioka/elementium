import { Color, Prisma } from "@elementium/color"
import { useMemo } from "react"
import {
    ColorValue,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    useWindowDimensions,
    ViewStyle
} from "react-native"

import { useThemeScheme } from ".."
import { tokens } from "../tokens"


export interface ModalContainerProps extends TouchableOpacityProps {
    tintColor?: string | ColorValue;
}


export const defaultModalContainerTintColor = "transparent"
export const defaultModalContainerMinWidth = 280
export const defaultModalContainerMaxWidth = 560
export const defaultModalContainerMaxHeight = 560
export const defaultModalContainerEdgeMargin = 56
export const defaultModalContainerPadding = 24


export function ModalContainer(props: ModalContainerProps) {


    const { width, height } = useWindowDimensions()
    const themeScheme = useThemeScheme()

    const containerSizeStyle: ViewStyle = useMemo(() => {
        const maxWidthWithinWindow = Math.max(
            width - (2 * defaultModalContainerEdgeMargin),
            defaultModalContainerMinWidth
        )
        const maxHeightWithinWindow = height - (2 * defaultModalContainerEdgeMargin)
        const containerWidth = Math.min(maxWidthWithinWindow, defaultModalContainerMaxWidth)
        const containerHeight = Math.min(maxHeightWithinWindow, defaultModalContainerMaxHeight)
        return { maxWidth: containerWidth, maxHeight: containerHeight }
    }, [width, height])

    const style = StyleSheet.flatten(props.style)
    const backgroundColor = (style && style.backgroundColor) ?? (themeScheme === "dark" ? "black" : "white")
    const tintColor = props.tintColor ?? defaultModalContainerTintColor
    const containerColorStyle: ViewStyle = useMemo(() => {
        const containerBackgound = new Color(backgroundColor as string)
        const containerOverlay = new Color(tintColor as string).setA(tokens.stateOpacity.containerOverlay)
        const newContainerBackground = Prisma.addColors(containerBackgound, containerOverlay).toRgba()
        return { backgroundColor: newContainerBackground }
    }, [backgroundColor, tintColor])


    return (
        <TouchableOpacity
            activeOpacity={1}
            {...props}
            style={[styles.container, containerSizeStyle, style, containerColorStyle]}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        minWidth: defaultModalContainerMinWidth,
        maxWidth: defaultModalContainerMaxWidth,
        maxHeight: defaultModalContainerMaxHeight,
        padding: defaultModalContainerPadding,
        borderRadius: tokens.shape.extraLarge,
    },
})

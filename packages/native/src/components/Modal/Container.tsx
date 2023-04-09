import { Color, Prisma } from "@elementium/color"
import { useMemo } from "react"
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    useWindowDimensions,
    ViewStyle
} from "react-native"

import { useTheme } from "../../theme"


export interface ModalContainerProps extends TouchableOpacityProps {
    hasTintColor?: boolean;
}


export const defaultModalContainerMinWidth = 280
export const defaultModalContainerMaxWidth = 560
export const defaultModalContainerMaxHeight = 560
export const defaultModalContainerEdgeMargin = 48
export const defaultModalContainerPadding = 24


export function ModalContainer(props: ModalContainerProps) {


    const { width, height } = useWindowDimensions()
    const { color, elevation, shape } = useTheme()


    const containerStyle: ViewStyle = {
        borderRadius: shape.extraLarge,
        elevation: elevation.level3,
    }

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
    const hasTintColor = props.hasTintColor ?? true
    const backgroundColor = (style && style.backgroundColor) ?? color.surface
    const tintColor = (hasTintColor && color.primary) ?? "transparent"
    const containerColorStyle: ViewStyle = useMemo(() => {
        const containerBackgound = new Color(backgroundColor as string)
        const containerOverlay = new Color(tintColor as string).setA(elevation.opacityLevel3)
        const newContainerBackground = Prisma.addColors(containerBackgound, containerOverlay).toRgba()
        return { backgroundColor: newContainerBackground }
    }, [backgroundColor, tintColor, elevation.opacityLevel3])


    return (
        <TouchableOpacity
            activeOpacity={1}
            {...props}
            style={[
                styles.container,
                containerStyle,
                containerSizeStyle,
                style,
                containerColorStyle
            ]}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        minWidth: defaultModalContainerMinWidth,
        maxWidth: defaultModalContainerMaxWidth,
        width: "100%",
        maxHeight: defaultModalContainerMaxHeight,
        padding: defaultModalContainerPadding,
    },
})

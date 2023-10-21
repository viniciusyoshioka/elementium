import { Color, Prisma } from "@elementium/color"
import { useElementiumTheme } from "@elementium/theme"
import { useState } from "react"
import {
    LayoutChangeEvent,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
    useWindowDimensions
} from "react-native"


const MIN_WIDTH = 280
const MAX_WIDTH = 560
const MAX_HEIGHT = 560
const EDGE_MARGIN = 48
const PADDING = 24


export interface ModalContainerProps extends TouchableOpacityProps {
    hasTintColor?: boolean
}


export function ModalContainer(props: ModalContainerProps) {


    const hasTintColor = props.hasTintColor ?? true
    const style = StyleSheet.flatten(props.style)


    const { width, height } = useWindowDimensions()
    const { color, elevation, shape } = useElementiumTheme()

    const [containerHeight, setContainerHeight] = useState<number>()


    const minWidth = (width < MIN_WIDTH) ? width : MIN_WIDTH
    const maxWidth = (width < MAX_WIDTH) ? width : MAX_WIDTH
    const maxHeight = (height < MAX_HEIGHT) ? height : MAX_HEIGHT
    const borderRadius = (width < MIN_WIDTH && height <= (containerHeight ?? 0)) ? 0 : shape.extraLarge
    const containerStyle: ViewStyle = {
        minWidth,
        maxWidth,
        maxHeight,
        borderRadius,
        elevation: elevation.level3,
    }


    const backgroundColor = (style && style.backgroundColor) ?? color.surfaceContainerHigh
    const tintColor = hasTintColor ? color.primary : "transparent"
    const containerBackgound = new Color(backgroundColor)
    const containerOverlay = new Color(tintColor).setA(elevation.opacityLevel3)
    const newContainerBackground = Prisma.addColors(containerBackgound, containerOverlay).toRgba()
    const containerColorStyle: ViewStyle = { backgroundColor: newContainerBackground }


    function onLayout(e: LayoutChangeEvent) {
        if (containerHeight === undefined) {
            setContainerHeight(e.nativeEvent.layout.height)
        }

        if (props.onLayout) {
            props.onLayout(e)
        }
    }


    return (
        <TouchableOpacity
            activeOpacity={1}
            {...props}
            onLayout={onLayout}
            style={[containerStyle, style, containerColorStyle]}
        />
    )
}

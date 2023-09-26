import { ForwardedRef, forwardRef, useImperativeHandle } from "react"
import { StyleSheet } from "react-native"
import Reanimated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated"

import { useTheme } from "../../../theme"
import { Header, HeaderProps } from "../Header"


const AnimatedHeaderBase = Reanimated.createAnimatedComponent(Header)


export type AnimatedHeaderRef = {
    setBackgroundColor: (color: string) => void;
}


export const AnimatedHeader = forwardRef((props: HeaderProps, ref: ForwardedRef<AnimatedHeaderRef>) => {


    const { color } = useTheme()

    const flattenStyle = StyleSheet.flatten(props.style)
    const backgroundColor = useSharedValue(flattenStyle?.backgroundColor ?? color.surface)


    useImperativeHandle(ref, () => ({
        setBackgroundColor,
    }))


    function setBackgroundColor(color: string) {
        backgroundColor.value = color
    }


    const animatedStyle = useAnimatedStyle(() => ({
        ...flattenStyle,
        backgroundColor: backgroundColor.value
    }), [flattenStyle, backgroundColor.value])


    return (
        <AnimatedHeaderBase
            {...props}
            style={animatedStyle}
        />
    )
})

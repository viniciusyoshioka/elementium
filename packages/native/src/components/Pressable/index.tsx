import {
    Pressable as RNPressble,
    PressableProps as RNPressableProps,
    PressableStateCallbackType,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle
} from "react-native"


type PressableStyleProp = StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)
    | undefined

type AnyStyle = {
    [key: string]: unknown;
}

interface ProcessedStyle {
    viewStyle: ViewStyle;
    pressableStyle: ViewStyle;
}


function processStyle(style: PressableStyleProp): ProcessedStyle {
    const viewStyle: AnyStyle = {}
    const pressableStyle: AnyStyle = {}
    let styleObject: AnyStyle = {}

    if (style === undefined) return { viewStyle, pressableStyle }

    if (typeof style === "function") {
        style = style({ pressed: false })
    }
    if (typeof style === "object") {
        styleObject = StyleSheet.flatten(style) as AnyStyle
    }

    const keys = Object.keys(styleObject) as string[]
    keys.forEach(key => {
        const includesPadding = key.toLowerCase().includes("padding")
        const includesMargin = key.toLowerCase().includes("margin")
        const includesBorder = key.toLowerCase().includes("border")
        const value = styleObject[key]

        if (includesPadding) {
            pressableStyle[key] = value
        } else if (includesMargin || includesBorder) {
            viewStyle[key] = value
        } else {
            viewStyle[key] = value
            pressableStyle[key] = value
        }
    })

    return { viewStyle, pressableStyle }
}


export interface PressableProps extends RNPressableProps {}


export function Pressable(props: PressableProps) {


    const { viewStyle, pressableStyle } = processStyle(props.style)


    return (
        <View style={[viewStyle, { overflow: "hidden" } ]}>
            <RNPressble
                android_ripple={{ color: "white" }}
                {...props}
                style={pressableStyle}
            />
        </View>
    )
}

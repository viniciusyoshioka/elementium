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


function processStyle(style: PressableStyleProp) {
    const viewStyle: ViewStyle = {}
    const pressableStyle: ViewStyle = {}
    let styleObject: ViewStyle = {}

    if (style === undefined) return { viewStyle, pressableStyle }

    if (typeof style === "function") {
        style = style({ pressed: false })
    }
    if (typeof style === "object") {
        styleObject = StyleSheet.flatten(style)
    }

    const keys = Object.keys(styleObject) as (keyof ViewStyle)[]
    keys.forEach(key => {
        const includesMargin = key.toLowerCase().includes("margin")
        const includesBorder = key.toLowerCase().includes("border")

        if (includesMargin || includesBorder) {
            viewStyle[key] = styleObject[key]
        } else {
            pressableStyle[key] = styleObject[key]
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

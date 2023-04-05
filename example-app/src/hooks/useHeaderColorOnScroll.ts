import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { NativeScrollEvent, NativeSyntheticEvent, StatusBar } from "react-native"
import { interpolateColor, runOnJS, useAnimatedReaction, useSharedValue } from "react-native-reanimated"

import { useAppTheme } from "@theme"


export function useHeaderColorOnScroll(inputRange?: number[], outputRange?: string[]) {


    const navigation = useNavigation()

    const { color, name } = useAppTheme()
    const scrollY = useSharedValue(0)


    const _inputRange = inputRange ?? [0, 56]
    const _outputRange = outputRange ?? [color.background, color.surfaceVariant]


    function updateHeaderColor(scrollY: number) {
        const headerColor = interpolateColor(scrollY, _inputRange, _outputRange)
        navigation.setOptions({
            headerStyle: { backgroundColor: headerColor }
        })
        StatusBar.setBackgroundColor(headerColor)
    }

    function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
        scrollY.value = event.nativeEvent.contentOffset.y
    }


    useAnimatedReaction(
        () => scrollY.value,
        current => runOnJS(updateHeaderColor)(current)
    )


    useEffect(() => {
        setTimeout(() => {
            updateHeaderColor(scrollY.value)
        }, 1)
    }, [name])


    return onScroll
}

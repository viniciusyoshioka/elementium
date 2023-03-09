import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { StatusBar } from "react-native"
import { interpolateColor, runOnJS, useAnimatedReaction, useSharedValue } from "react-native-reanimated"

import { useAppTheme } from "@theme"


export function useHeaderColorOnScroll(inputRange: number[], outputRange: string[]) {


    const navigation = useNavigation()

    const { name } = useAppTheme()

    const scrollY = useSharedValue(0)


    function updateHeaderColor(scrollY: number) {
        const headerColor = interpolateColor(scrollY, inputRange, outputRange)
        navigation.setOptions({
            headerStyle: { backgroundColor: headerColor }
        })
        StatusBar.setBackgroundColor(headerColor)
    }


    useAnimatedReaction(
        () => scrollY.value,
        current => {
            if (current > inputRange[1]) return
            runOnJS(updateHeaderColor)(current)
        }
    )


    useEffect(() => {
        setTimeout(() => {
            updateHeaderColor(scrollY.value)
        }, 1)
    }, [name])


    return scrollY
}

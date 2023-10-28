import { useElementiumTheme } from "@elementium/theme"
import { ScrollView, ScrollViewProps } from "react-native"


export interface ScrollScreenProps extends ScrollViewProps {}


export function ScrollScreen(props: ScrollScreenProps) {

    const { color } = useElementiumTheme()

    return (
        <ScrollView
            {...props}
            style={[ { backgroundColor: color.background }, props.style]}
        />
    )
}

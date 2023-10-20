import { ScrollView, ScrollViewProps } from "react-native"

import { useElementiumTheme } from "../../theme"


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

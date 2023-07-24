import { ScrollView, ScrollViewProps } from "react-native"

import { useTheme } from "../../theme"


export interface ScrollScreenProps extends ScrollViewProps {}


export function ScrollScreen(props: ScrollScreenProps) {

    const { color } = useTheme()

    return (
        <ScrollView
            {...props}
            style={[ { backgroundColor: color.background }, props.style]}
        />
    )
}

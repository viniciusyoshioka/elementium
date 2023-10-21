import { TextStyle } from "react-native"
import { Text, TextProps } from "react-native-paper"

import { useElementiumTheme } from "../../theme"


export interface ModalTitleProps extends TextProps<"headlineSmall"> {
    hasIconAbove?: boolean
}


export function ModalTitle(props: ModalTitleProps) {


    const { color } = useElementiumTheme()


    const titleWithIconStyle: TextStyle = {
        marginTop: props.hasIconAbove ? 16 : 24,
        marginHorizontal: 24,
        textAlign: props.hasIconAbove ? "center" : undefined,
        color: color.onSurface,
    }


    return (
        <Text
            variant={"headlineSmall"}
            {...props}
            style={[titleWithIconStyle, props.style]}
        />
    )
}

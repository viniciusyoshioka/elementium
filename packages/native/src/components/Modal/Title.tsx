import { TextStyle } from "react-native"

import { Text, TextProps } from ".."
import { useElementiumTheme } from "../../theme"


export interface ModalTitleProps extends TextProps {
    hasIconAbove?: boolean
}


export function ModalTitle(props: ModalTitleProps) {


    const { color } = useElementiumTheme()


    const titleWithIconStyle: TextStyle | undefined = props.hasIconAbove
        ? { marginTop: 16, textAlign: "center" }
        : undefined


    return (
        <Text
            variant={"headline"}
            size={"small"}
            {...props}
            style={[titleWithIconStyle, { color: color.onSurface }, props.style]}
        />
    )
}

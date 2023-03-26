import { TextStyle } from "react-native"

import { Text, TextProps } from ".."


export interface ModalTitleProps extends TextProps {
    hasIconAbove?: boolean;
}


export function ModalTitle(props: ModalTitleProps) {


    const titleWithIconStyle: TextStyle | undefined = props.hasIconAbove
        ? { marginTop: 16, textAlign: "center" }
        : undefined


    return (
        <Text
            variant={"headline"}
            size={"small"}
            {...props}
            style={[titleWithIconStyle, props.style]}
        />
    )
}

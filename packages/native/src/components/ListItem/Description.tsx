import { LayoutChangeEvent } from "react-native"

import { Text, TextProps } from ".."
import { TypographySize, TypographyVariant, useTheme } from "../../theme"


const variant: TypographyVariant = "body"
const size: TypographySize = "medium"


export interface DescriptionProps extends TextProps {
    onViewHeightChange?: (isTallerThanLineHeight: boolean) => void
}


export function Description(props: DescriptionProps) {


    const { typography } = useTheme()


    function onLayout(event: LayoutChangeEvent) {
        if (props.onViewHeightChange) {
            const viewHeight = event.nativeEvent.layout.height
            const { lineHeight } = typography[variant][size]
            props.onViewHeightChange(viewHeight > lineHeight)
        }

        if (props.onLayout) {
            props.onLayout(event)
        }
    }


    return (
        <Text
            variant={variant}
            size={size}
            {...props}
            onLayout={onLayout}
        />
    )
}

import { Text as RNText, TextProps as RNTextProps } from "react-native"

import { TypographySize, TypographyVariant, useTheme } from "../../theme"


export interface TextProps extends RNTextProps {
    variant?: TypographyVariant;
    size?: TypographySize;
}


export const defaultTextVariant: TypographyVariant = "body"
export const defaultTextSize: TypographySize = "medium"


export function Text(props: TextProps) {


    const { typography } = useTheme()

    const variant = props.variant ?? defaultTextVariant
    const size = props.size ?? defaultTextSize
    const typographyStyle = typography[variant][size]


    return (
        <RNText
            {...props}
            style={[typographyStyle, props.style]}
        />
    )
}

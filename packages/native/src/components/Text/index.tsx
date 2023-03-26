import { useMemo } from "react"
import {
    StyleProp,
    StyleSheet,
    Text as RNText,
    TextProps as RNTextProps,
    TextStyle
} from "react-native"


export type TextVariant = "display" | "headline" | "title" | "body" | "label"


export type TextSize = "large" | "medium" | "small"


export type TextTypographyStyle = {
    [key in TextVariant]: {
        [key in TextSize]: StyleProp<TextStyle>;
    };
}


export interface TextProps extends RNTextProps {
    variant?: TextVariant;
    size?: TextSize;
    typographyStyle?: TextTypographyStyle;
}


export const defaultTextVariant: TextVariant = "body"
export const defaultTextSize: TextSize = "medium"
export const defaultTextTypography: TextTypographyStyle = {
    display: StyleSheet.create({
        large: {
            lineHeight: 64,
            fontSize: 57,
        },
        medium: {
            lineHeight: 52,
            fontSize: 45,
        },
        small: {
            lineHeight: 44,
            fontSize: 36,
        },
    }),
    headline: StyleSheet.create({
        large: {
            lineHeight: 40,
            fontSize: 32,
        },
        medium: {
            lineHeight: 36,
            fontSize: 28,
        },
        small: {
            lineHeight: 32,
            fontSize: 24,
        },
    }),
    title: StyleSheet.create({
        large: {
            lineHeight: 28,
            fontSize: 22,
        },
        medium: {
            lineHeight: 24,
            fontSize: 16,
            fontWeight: "500",
        },
        small: {
            lineHeight: 20,
            fontSize: 14,
            fontWeight: "500",
        },
    }),
    body: StyleSheet.create({
        large: {
            lineHeight: 24,
            fontSize: 16,
        },
        medium: {
            lineHeight: 20,
            fontSize: 14,
        },
        small: {
            lineHeight: 16,
            fontSize: 12,
        },
    }),
    label: StyleSheet.create({
        large: {
            lineHeight: 20,
            fontSize: 14,
            fontWeight: "500",
        },
        medium: {
            lineHeight: 16,
            fontSize: 12,
            fontWeight: "500",
        },
        small: {
            lineHeight: 16,
            fontSize: 11,
            fontWeight: "500",
        },
    }),
}


export function Text(props: TextProps) {


    const typographyStyle = useMemo(() => {
        const typography = props.typographyStyle ?? defaultTextTypography
        const variant = props.variant ?? defaultTextVariant
        const size = props.size ?? defaultTextSize
        return typography[variant][size]
    }, [props.typographyStyle, props.variant, props.size])


    return (
        <RNText
            {...props}
            style={[typographyStyle, props.style]}
        />
    )
}

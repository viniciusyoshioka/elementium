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
            fontSize: 57,
            lineHeight: 64,
            letterSpacing: -0.25,
        },
        medium: {
            fontSize: 45,
            lineHeight: 52,
            letterSpacing: 0,
        },
        small: {
            fontSize: 36,
            lineHeight: 44,
            letterSpacing: 0,
        },
    }),
    headline: StyleSheet.create({
        large: {
            fontSize: 32,
            lineHeight: 40,
            letterSpacing: 0,
        },
        medium: {
            fontSize: 28,
            lineHeight: 36,
            letterSpacing: 0,
        },
        small: {
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0,
        },
    }),
    title: StyleSheet.create({
        large: {
            fontSize: 22,
            lineHeight: 28,
            letterSpacing: 0,
        },
        medium: {
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            letterSpacing: 0.15,
        },
        small: {
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 20,
            letterSpacing: 0.1,
        },
    }),
    body: StyleSheet.create({
        large: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.5,
        },
        medium: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.25,
        },
        small: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.4,
        },
    }),
    label: StyleSheet.create({
        large: {
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 20,
            letterSpacing: 0.1,
        },
        medium: {
            fontSize: 12,
            fontWeight: "500",
            lineHeight: 16,
            letterSpacing: 0.5,
        },
        small: {
            fontSize: 11,
            fontWeight: "500",
            lineHeight: 16,
            letterSpacing: 0.5,
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

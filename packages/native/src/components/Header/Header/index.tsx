import React, { Children, ForwardedRef, cloneElement, forwardRef } from "react"
import { StatusBar, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native"

import { useTheme } from "../../../theme"
import { HeaderButton, HeaderButtonProps } from "../Button"
import { HeaderTitle, HeaderTitleProps } from "../Title"


export const HEADER_HEIGHT = 56


export interface HeaderProps extends ViewProps {
    overrideStatusBar?: boolean;
}


export const Header = forwardRef((props: HeaderProps, ref: ForwardedRef<unknown>) => {


    const { color } = useTheme()

    const flattenStyle = StyleSheet.flatten(props.style)
    const overrideStatusBarStyle: ViewStyle = {
        height: props.overrideStatusBar ? HEADER_HEIGHT + (StatusBar.currentHeight ?? 0) : HEADER_HEIGHT,
        paddingTop: props.overrideStatusBar ? StatusBar.currentHeight : undefined,
    }
    const colorStyle: ViewStyle = {
        backgroundColor: flattenStyle?.backgroundColor ?? color.surface,
    }
    const headerStyle = [styles.header, overrideStatusBarStyle, colorStyle, flattenStyle]


    return (
        <View {...props} style={headerStyle}>
            {Children.toArray(props.children)
                .filter(child => child != null && typeof child !== "boolean")
                .map((child, index) => {
                    const isValidElement = React.isValidElement(child)

                    const isHeaderButton = isValidElement && child.type === HeaderButton
                    if (isHeaderButton && index === 0) {
                        const styleProps: StyleProp<ViewStyle> = { marginLeft: 4 }

                        const childProps = child.props as HeaderButtonProps
                        const componentProps = {
                            ...childProps,
                            style: [styleProps, childProps.style],
                        }
                        return cloneElement(child, componentProps)
                    }

                    const isHeaderTitle = isValidElement && child.type === HeaderTitle
                    if (isHeaderTitle) {
                        const styleProps: StyleProp<ViewStyle> = { marginLeft: index === 0 ? 16 : 4 }

                        const childProps = child.props as HeaderTitleProps
                        const componentProps = {
                            ...childProps,
                            style: [styleProps, childProps.style],
                        }
                        return cloneElement(child, componentProps)
                    }

                    return child
                })}
        </View>
    )
})


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
})

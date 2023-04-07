import { Color, Prisma } from "@elementium/color"
import { ComponentType, ReactElement, useCallback, useMemo, useState } from "react"
import { ColorValue, StyleSheet, View, ViewStyle } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"

import { ExtendableIconProps, Icon, Text } from ".."
import { useTheme } from "../../theme"
import { Description } from "./Description"
import { Title } from "./Title"


export interface ListItemProps extends RectButtonProps {
    title: string;
    description?: string;

    leadingIcon?: ExtendableIconProps;
    LeadingComponent?: ReactElement | ComponentType<unknown>;

    trailingText?: string;
    trailingIcon?: ExtendableIconProps;
    TrailingComponent?: ReactElement | ComponentType<unknown>;

    disabled?: boolean;
    alignOnCenterInThreeLines?: boolean;
}


export function ListItem(props: ListItemProps) {


    const { color, state } = useTheme()

    const [threeLinesDescription, setThreeLinesDescription] = useState<boolean>()

    const hasLeadingComponent = !!props.leadingIcon || !!props.LeadingComponent
    const hasTrailingComponent = !!props.trailingIcon || !!props.trailingText || !!props.TrailingComponent
    const alignOnCenterInThreeLines = props.alignOnCenterInThreeLines ?? false
    const style = StyleSheet.flatten(props.style)

    const backgroundColorStyle = (style && style.backgroundColor) ?? color.surface
    const minHeight = !props.description ? 56 : 72
    const maxHeight = !props.description ? 56 : undefined

    const contentColor: ColorValue = useMemo(() => {
        if (props.disabled) {
            return new Color(color.onSurface).setA(state.content.disabled).toRgba()
        }
        return color.onSurface
    }, [props.disabled, color.onSurface, state.content.disabled])

    const contentVariantColor: ColorValue = useMemo(() => {
        if (props.disabled) {
            return new Color(color.onSurface).setA(state.content.disabled).toRgba()
        }
        return color.onSurfaceVariant
    }, [props.disabled, color.onSurface, state.content.disabled, color.onSurfaceVariant])

    const containerColorStyle: ViewStyle = useMemo(() => {
        if (props.disabled) {
            const background = new Color(backgroundColorStyle as string)
            const overlay = new Color(color.onSurface as string).setA(state.container.focused)
            return { backgroundColor: Prisma.addColors(background, overlay).toRgba() }
        }

        return { backgroundColor: color.surface }
    }, [props.disabled, backgroundColorStyle, color.onSurface, state.container.focused, color.surface])

    const containerStyle: ViewStyle = useMemo(() => {
        const baseStyle = { ...styles.container, minHeight, maxHeight }

        if (!alignOnCenterInThreeLines && threeLinesDescription) {
            return { ...baseStyle, ...styles.heigherContainer }
        }
        if (threeLinesDescription) {
            return { ...baseStyle, ...styles.heigherContainerPadding }
        }

        return baseStyle
    }, [minHeight, maxHeight, alignOnCenterInThreeLines, threeLinesDescription])

    const textContainerStyle: ViewStyle = {
        marginLeft: hasLeadingComponent ? 16 : undefined,
        marginRight: hasTrailingComponent ? 16 : undefined,
    }

    const rippleColor = new Color(color.onSurface).setA(state.container.pressed).toRgba()


    const LeadingComponent = useCallback((): JSX.Element | null => {
        if (props.leadingIcon) return (
            <Icon
                name={props.leadingIcon.iconName}
                group={props.leadingIcon.iconGroup}
                size={props.leadingIcon.iconSize ?? 24}
                color={props.leadingIcon.iconColor ?? contentVariantColor}
                {...props.leadingIcon}
            />
        )

        // ComponentProp={() => <Component />}
        if (props.LeadingComponent && props.LeadingComponent instanceof Function) {
            return <props.LeadingComponent />
        }
        // ComponentProps={<Component />}
        if (props.LeadingComponent && props.LeadingComponent instanceof Object) {
            return props.LeadingComponent
        }

        return null
    }, [props.leadingIcon, props.LeadingComponent, contentVariantColor])

    const TrailingComponent = useCallback((): JSX.Element | null => {
        if (props.trailingIcon) return (
            <Icon
                name={props.trailingIcon.iconName}
                group={props.trailingIcon.iconGroup}
                size={props.trailingIcon.iconSize ?? 24}
                color={props.trailingIcon.iconColor ?? contentVariantColor}
                {...props.trailingIcon}
            />
        )

        if (props.trailingText) return (
            <Text
                variant={"label"}
                size={"small"}
                style={{ color: contentVariantColor }}
                children={props.trailingText}
            />
        )

        // ComponentProp={() => <Component />}
        if (props.TrailingComponent && props.TrailingComponent instanceof Function) {
            return <props.TrailingComponent />
        }
        // ComponentProps={<Component />}
        if (props.TrailingComponent && props.TrailingComponent instanceof Object) {
            return props.TrailingComponent
        }

        return null
    }, [props.trailingIcon, props.trailingText, props.TrailingComponent, contentVariantColor])


    return (
        <RectButton
            rippleColor={rippleColor}
            {...props}
            style={[containerStyle, style, containerColorStyle]}
        >
            {hasLeadingComponent && <LeadingComponent />}

            <View style={[styles.textContainer, textContainerStyle]}>
                <Title children={props.title} style={{ color: contentColor }} />

                {props.description && (
                    <Description
                        children={props.description}
                        style={{ color: contentVariantColor }}
                        onViewHeightChange={setThreeLinesDescription}
                    />
                )}
            </View>

            {hasTrailingComponent && <TrailingComponent />}
        </RectButton>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 24,
    },
    heigherContainer: {
        alignItems: "flex-start",
        paddingTop: 12,
        paddingBottom: 12,
    },
    heigherContainerPadding: {
        paddingTop: 12,
        paddingBottom: 12,
    },
    textContainer: {
        flex: 1,
    },
})

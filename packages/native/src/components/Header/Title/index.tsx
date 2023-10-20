import { StyleSheet } from "react-native"

import { Text, TextProps } from "../../"
import { useTheme } from "../../../theme"


export interface HeaderTitleProps extends TextProps {
    title?: string;
}


export function HeaderTitle(props: HeaderTitleProps) {


    const { color } = useTheme()


    return (
        <Text
            variant={"title"}
            size={"large"}
            numberOfLines={1}
            {...props}
            children={props.children ?? props.title}
            style={[styles.title, { color: color.onSurface }, props.style]}
        />
    )
}


const styles = StyleSheet.create({
    title: {
        flex: 1,
    },
})
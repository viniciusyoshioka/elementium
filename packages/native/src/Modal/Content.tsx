import { useElementiumTheme } from "@elementium/theme"
import { ScrollView, ScrollViewProps, View, ViewStyle } from "react-native"
import { Divider } from "react-native-paper"


export interface ModalContentProps extends ScrollViewProps {
    hasDivider?: boolean
}


export function ModalContent(props: ModalContentProps) {


    const hasDivider = props.hasDivider ?? true

    const { color } = useElementiumTheme()


    const topDividerStyle: ViewStyle = {
        height: 1,
        marginTop: 16,
        backgroundColor: color.outline,
        opacity: hasDivider ? 1 : 0,
    }

    const bottomDividerStyle: ViewStyle = {
        height: 1,
        backgroundColor: color.outline,
        opacity: hasDivider ? 1 : 0,
    }

    const scrollViewStyle: ViewStyle = {
        flexGrow: 0,
    }


    return <>
        <Divider style={topDividerStyle} />

        <ScrollView
            keyboardShouldPersistTaps={"handled"}
            showsVerticalScrollIndicator={false}
            {...props}
            style={[scrollViewStyle, props.style]}
        >
            <View>
                {props.children}
            </View>
        </ScrollView>

        <Divider style={bottomDividerStyle} />
    </>
}

import { ScrollView, ScrollViewProps, View } from "react-native"

import { Divider } from ".."


export interface ModalContentProps extends ScrollViewProps {
    hasDivider?: boolean
}


export function ModalContent(props: ModalContentProps) {


    const hasDivider = props.hasDivider ?? true


    return (
        <>
            {hasDivider && <Divider style={{ marginTop: 16 }} />}

            <ScrollView
                showsVerticalScrollIndicator={false}
                {...props}
                style={[ { flexGrow: 0 }, props.style]}
            >
                <View>

                    {props.children}
                </View>
            </ScrollView>

            {hasDivider && <Divider />}
        </>
    )
}

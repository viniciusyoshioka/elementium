import {
    ColorValue,
    Modal as RNModal,
    ModalProps as RNModalProps,
    StyleProp,
    ViewStyle
} from "react-native"

import { ModalContainer, ModalScrim } from "."


export interface ModalProps extends RNModalProps {
    scrimStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    tintColor?: string | ColorValue;
}


export function Modal(props: ModalProps) {
    return (
        <RNModal
            transparent={true}
            statusBarTranslucent={true}
            {...props}
        >
            <ModalScrim onPress={props.onRequestClose} style={props.scrimStyle}>
                <ModalContainer style={props.containerStyle} tintColor={props.tintColor}>
                    {props.children}
                </ModalContainer>
            </ModalScrim>
        </RNModal>
    )
}

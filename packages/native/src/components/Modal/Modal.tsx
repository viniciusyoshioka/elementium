import {
    Modal as RNModal,
    ModalProps as RNModalProps,
    StyleProp,
    ViewStyle
} from "react-native"

import { ModalContainer } from "./Container"
import { ModalScrim } from "./Scrim"


export interface ModalProps extends RNModalProps {
    scrimStyle?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
    hasTintColor?: boolean
}


export function Modal(props: ModalProps) {
    return (
        <RNModal transparent={true} {...props}>
            <ModalScrim onPress={props.onRequestClose} style={props.scrimStyle}>
                <ModalContainer style={props.containerStyle} hasTintColor={props.hasTintColor}>
                    {props.children}
                </ModalContainer>
            </ModalScrim>
        </RNModal>
    )
}

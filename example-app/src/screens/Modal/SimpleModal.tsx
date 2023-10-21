import { Modal, ModalProps } from "@elementium/native"
import { Button } from "react-native-paper"


export interface SimpleModalProps extends ModalProps {}


export function SimpleModal(props: SimpleModalProps) {
    return (
        <Modal.Modal {...props}>
            <Modal.Title>
                Simple modal
            </Modal.Title>

            <Modal.Description>
                This is a simple modal.
                It has a title, description and the actions section
                with one "Ok" button.
            </Modal.Description>

            <Modal.Actions>
                <Button
                    mode={"text"}
                    children={"Ok"}
                    onPress={props.onRequestClose}
                />
            </Modal.Actions>
        </Modal.Modal>
    )
}

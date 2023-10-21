import { Modal, ModalProps } from "@elementium/native"
import { Button } from "react-native-paper"


export interface CompleteModalProps extends ModalProps {}


export function CompleteModal(props: CompleteModalProps) {
    return (
        <Modal.Modal {...props}>
            <Modal.Icon name={"cellphone-check"} />

            <Modal.Title hasIconAbove={true}>
                Complete modal
            </Modal.Title>

            <Modal.Description>
                This is a complete modal.
                It has an icon, title, description and the actions section
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

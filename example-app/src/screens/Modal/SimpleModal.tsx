import {
    Button,
    Modal,
    ModalActions,
    ModalDescription,
    ModalProps,
    ModalTitle
} from "@elementium/native"


export interface SimpleModalProps extends ModalProps {}


export function SimpleModal(props: SimpleModalProps) {
    return (
        <Modal hasTintColor={true} {...props}>
            <ModalTitle>
                Simple modal
            </ModalTitle>

            <ModalDescription>
                This is a simple modal.
                It has a title, description and the actions section
                with one "Ok" button.
            </ModalDescription>

            <ModalActions>
                <Button variant={"text"} text={"Ok"} onPress={props.onRequestClose} />
            </ModalActions>
        </Modal>
    )
}

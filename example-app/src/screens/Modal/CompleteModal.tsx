import {
    Button,
    Modal,
    ModalActions,
    ModalDescription,
    ModalIcon,
    ModalProps,
    ModalTitle
} from "@elementium/native"


export interface CompleteModalProps extends ModalProps {}


export function CompleteModal(props: CompleteModalProps) {
    return (
        <Modal hasTintColor={true} {...props}>
            <ModalIcon name={"mobile-friendly"} />

            <ModalTitle hasIconAbove={true}>
                Complete modal
            </ModalTitle>

            <ModalDescription>
                This is a complete modal.
                It has an icon, title, description and the actions section
                with one "Ok" button.
            </ModalDescription>

            <ModalActions>
                <Button variant={"text"} text={"Ok"} onPress={props.onRequestClose} />
            </ModalActions>
        </Modal>
    )
}

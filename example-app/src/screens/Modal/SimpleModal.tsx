import {
    Button,
    Modal,
    ModalActions,
    ModalDescription,
    ModalProps,
    ModalTitle
} from "@elementium/native"

import { useAppTheme } from "@theme"


export interface SimpleModalProps extends ModalProps {}


export function SimpleModal(props: SimpleModalProps) {


    const { color } = useAppTheme()


    return (
        <Modal
            containerStyle={{ backgroundColor: color.surface }}
            hasTintColor={true}
            {...props}
        >
            <ModalTitle style={{ color: color.onSurface }}>
                Simple modal
            </ModalTitle>

            <ModalDescription style={{ color: color.onSurfaceVariant }}>
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

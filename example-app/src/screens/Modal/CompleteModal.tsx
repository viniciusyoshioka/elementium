import {
    Modal,
    ModalActions,
    ModalDescription,
    ModalIcon,
    ModalProps,
    ModalTitle,
    TextButton
} from "@elementium/native"

import { useAppTheme } from "@theme"


export interface CompleteModalProps extends ModalProps {}


export function CompleteModal(props: CompleteModalProps) {


    const { color } = useAppTheme()


    return (
        <Modal
            containerStyle={{ backgroundColor: color.surface }}
            tintColor={color.primary}
            {...props}
        >
            <ModalIcon
                name={"mobile-friendly"}
                color={color.onSurface} // TODO use color.secondary
            />

            <ModalTitle style={{ color: color.onSurface }} hasIconAbove={true}>
                Complete modal
            </ModalTitle>

            <ModalDescription style={{ color: color.onSurfaceVariant }}>
                This is a complete modal.
                It has an icon, title, description and the actions section
                with one "Ok" button.
            </ModalDescription>

            <ModalActions>
                <TextButton text={"Ok"} onPress={props.onRequestClose} />
            </ModalActions>
        </Modal>
    )
}

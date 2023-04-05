import {
    Button,
    Modal,
    ModalActions,
    ModalDescription,
    ModalIcon,
    ModalProps,
    ModalTitle
} from "@elementium/native"

import { useAppTheme } from "@theme"


export interface CompleteModalProps extends ModalProps {}


export function CompleteModal(props: CompleteModalProps) {


    const { color } = useAppTheme()


    return (
        <Modal
            containerStyle={{ backgroundColor: color.surface }}
            hasTintColor={true}
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
                <Button variant={"text"} text={"Ok"} onPress={props.onRequestClose} />
            </ModalActions>
        </Modal>
    )
}

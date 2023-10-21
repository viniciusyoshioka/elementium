export type { ModalActionsProps } from "./Actions"
export type { ModalContainerProps } from "./Container"
export type { ModalContentProps } from "./Content"
export type { ModalDescriptionProps } from "./Description"
export type { ModalIconProps } from "./Icon"
export type { ModalProps } from "./Modal"
export type { ModalScrimProps } from "./Scrim"
export type { ModalTitleProps } from "./Title"


import { ModalActions } from "./Actions"
import { ModalContainer } from "./Container"
import { ModalContent } from "./Content"
import { ModalDescription } from "./Description"
import { ModalIcon } from "./Icon"
import { Modal as ModalComponent } from "./Modal"
import { ModalScrim } from "./Scrim"
import { ModalTitle } from "./Title"


export const Modal = {
    Scrim: ModalScrim,
    Container: ModalContainer,
    Icon: ModalIcon,
    Title: ModalTitle,
    Description: ModalDescription,
    Content: ModalContent,
    Modal: ModalComponent,
    Actions: ModalActions,
}

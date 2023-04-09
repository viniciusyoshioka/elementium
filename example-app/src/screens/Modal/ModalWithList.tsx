import {
    Button, Modal,
    ModalActions,
    ModalContent,
    ModalDescription,
    ModalIcon,
    ModalProps,
    ModalTitle,
    RadioListItem
} from "@elementium/native"
import { useState } from "react"


export interface ModalWithListProps extends ModalProps {}


export function ModalWithList(props: ModalWithListProps) {


    const [selectedItem, setSelectedItem] = useState("A")


    return (
        <Modal hasTintColor={true} {...props}>
            <ModalIcon name={"mobile-friendly"} />

            <ModalTitle hasIconAbove={true}>
                Modal with list
            </ModalTitle>

            <ModalDescription>
                This is a complete modal with a list.
                It has an icon, title, description, list of radio buttons and the actions section
                with one "Ok" button.
            </ModalDescription>

            <ModalContent>
                <RadioListItem
                    title={"Item A"}
                    value={selectedItem === "A"}
                    onPress={() => setSelectedItem("A")}
                    style={{ backgroundColor: "transparent" }}
                />

                <RadioListItem
                    title={"Item B"}
                    value={selectedItem === "B"}
                    onPress={() => setSelectedItem("B")}
                    style={{ backgroundColor: "transparent" }}
                />

                <RadioListItem
                    title={"Item C"}
                    value={selectedItem === "C"}
                    onPress={() => setSelectedItem("C")}
                    style={{ backgroundColor: "transparent" }}
                />

                <RadioListItem
                    title={"Item D"}
                    value={selectedItem === "D"}
                    onPress={() => setSelectedItem("D")}
                    style={{ backgroundColor: "transparent" }}
                />

                <RadioListItem
                    title={"Item E"}
                    value={selectedItem === "E"}
                    onPress={() => setSelectedItem("E")}
                    style={{ backgroundColor: "transparent" }}
                />

                <RadioListItem
                    title={"Item F"}
                    value={selectedItem === "F"}
                    onPress={() => setSelectedItem("F")}
                    style={{ backgroundColor: "transparent" }}
                />
            </ModalContent>

            <ModalActions>
                <Button variant={"text"} text={"Cancel"} onPress={props.onRequestClose} />

                <Button variant={"text"} text={"Ok"} onPress={props.onRequestClose} />
            </ModalActions>
        </Modal>
    )
}

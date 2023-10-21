import { Modal, ModalProps, RadioListItem } from "@elementium/native"
import { useState } from "react"
import { Button } from "react-native-paper"


export interface ModalWithListProps extends ModalProps {}


export function ModalWithList(props: ModalWithListProps) {


    const [selectedItem, setSelectedItem] = useState("A")


    return (
        <Modal.Modal {...props}>
            <Modal.Icon name={"cellphone-check"} />

            <Modal.Title hasIconAbove={true}>
                Modal with list
            </Modal.Title>

            <Modal.Description>
                This is a complete modal with a list.
                It has an icon, title, description, list of radio buttons and the actions section
                with one "Ok" button.
            </Modal.Description>

            <Modal.Content>
                <RadioListItem
                    title={"Item A"}
                    value={selectedItem === "A"}
                    onPress={() => setSelectedItem("A")}
                    style={{ backgroundColor: "transparent", paddingLeft: 24 }}
                />

                <RadioListItem
                    title={"Item B"}
                    value={selectedItem === "B"}
                    onPress={() => setSelectedItem("B")}
                    style={{ backgroundColor: "transparent", paddingLeft: 24 }}
                />

                <RadioListItem
                    title={"Item C"}
                    value={selectedItem === "C"}
                    onPress={() => setSelectedItem("C")}
                    style={{ backgroundColor: "transparent", paddingLeft: 24 }}
                />

                <RadioListItem
                    title={"Item D"}
                    value={selectedItem === "D"}
                    onPress={() => setSelectedItem("D")}
                    style={{ backgroundColor: "transparent", paddingLeft: 24 }}
                />

                <RadioListItem
                    title={"Item E"}
                    value={selectedItem === "E"}
                    onPress={() => setSelectedItem("E")}
                    style={{ backgroundColor: "transparent", paddingLeft: 24 }}
                />

                <RadioListItem
                    title={"Item F"}
                    value={selectedItem === "F"}
                    onPress={() => setSelectedItem("F")}
                    style={{ backgroundColor: "transparent", paddingLeft: 24 }}
                />
            </Modal.Content>

            <Modal.Actions>
                <Button
                    mode={"text"}
                    children={"Cancel"}
                    onPress={props.onRequestClose}
                />

                <Button
                    mode={"text"}
                    children={"Ok"}
                    onPress={props.onRequestClose}
                />
            </Modal.Actions>
        </Modal.Modal>
    )
}

import { Modal, ModalProps } from "@elementium/native"
import { useState } from "react"
import { Button, RadioButton } from "react-native-paper"


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
                <RadioButton.Group
                    value={selectedItem}
                    onValueChange={newValue => setSelectedItem(newValue)}
                >
                    <RadioButton.Item
                        label={"Item A"}
                        value={"A"}
                        style={{ paddingLeft: 24 }}
                    />

                    <RadioButton.Item
                        label={"Item B"}
                        value={"B"}
                        style={{ paddingLeft: 24 }}
                    />

                    <RadioButton.Item
                        label={"Item C"}
                        value={"C"}
                        style={{ paddingLeft: 24 }}
                    />

                    <RadioButton.Item
                        label={"Item D"}
                        value={"D"}
                        style={{ paddingLeft: 24 }}
                    />

                    <RadioButton.Item
                        label={"Item E"}
                        value={"E"}
                        style={{ paddingLeft: 24 }}
                    />

                    <RadioButton.Item
                        label={"Item F"}
                        value={"F"}
                        style={{ paddingLeft: 24 }}
                    />
                </RadioButton.Group>
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

import { Button, Screen } from "@elementium/native"
import { useState } from "react"

import { CompleteModal } from "./CompleteModal"
import { ModalWithList } from "./ModalWithList"
import { SimpleModal } from "./SimpleModal"


export function ModalScreen() {


    const [isSimpleModalVisible, setIsSimpleModalVisible] = useState(false)
    const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false)
    const [isModalWithListVisible, setIsModalWithListVisible] = useState(false)


    return (
        <Screen style={{ alignItems: "center", justifyContent: "center", rowGap: 16 }}>
            <Button
                text={"Simple Modal"}
                onPress={() => setIsSimpleModalVisible(true)}
            />

            <Button
                text={"Complete Modal"}
                onPress={() => setIsCompleteModalVisible(true)}
            />

            <Button
                text={"Modal with list"}
                onPress={() => setIsModalWithListVisible(true)}
            />

            <SimpleModal
                visible={isSimpleModalVisible}
                onRequestClose={() => setIsSimpleModalVisible(false)}
            />

            <CompleteModal
                visible={isCompleteModalVisible}
                onRequestClose={() => setIsCompleteModalVisible(false)}
            />

            <ModalWithList
                visible={isModalWithListVisible}
                onRequestClose={() => setIsModalWithListVisible(false)}
            />
        </Screen>
    )
}

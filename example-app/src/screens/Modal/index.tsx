import { Button, Screen } from "@elementium/native"
import { useState } from "react"

import { CompleteModal } from "./CompleteModal"
import { SimpleModal } from "./SimpleModal"


export function ModalScreen() {


    const [isSimpleModalVisible, setIsSimpleModalVisible] = useState(false)
    const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false)


    function openSimpleModal() {
        setIsSimpleModalVisible(true)
    }

    function openCompleteModal() {
        setIsCompleteModalVisible(true)
    }


    return (
        <Screen style={{ justifyContent: "center" }}>
            <Button
                text={"Simple Modal"}
                onPress={openSimpleModal}
            />

            <Button
                text={"Complete Modal"}
                onPress={openCompleteModal}
                style={{ marginTop: 16 }}
            />

            <SimpleModal
                visible={isSimpleModalVisible}
                onRequestClose={() => setIsSimpleModalVisible(false)}
            />

            <CompleteModal
                visible={isCompleteModalVisible}
                onRequestClose={() => setIsCompleteModalVisible(false)}
            />
        </Screen>
    )
}

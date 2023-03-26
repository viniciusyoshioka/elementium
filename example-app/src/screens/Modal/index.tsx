import { FilledButton, Screen } from "@elementium/native"
import { useState } from "react"

import { CompleteModal } from "./CompleteModal"


export function ModalScreen() {


    const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false)


    function openCompleteModal() {
        setIsCompleteModalVisible(true)
    }


    return (
        <Screen style={{ justifyContent: "center" }}>
            <FilledButton
                text={"Complete Modal"}
                onPress={openCompleteModal}
            />

            <CompleteModal
                visible={isCompleteModalVisible}
                onRequestClose={() => setIsCompleteModalVisible(false)}
            />
        </Screen>
    )
}

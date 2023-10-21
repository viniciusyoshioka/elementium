import { Screen } from "@elementium/native"
import { useState } from "react"
import { Button } from "react-native-paper"

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
                mode={"contained"}
                children={"Simple Modal"}
                onPress={() => setIsSimpleModalVisible(true)}
            />

            <Button
                mode={"contained"}
                children={"Complete Modal"}
                onPress={() => setIsCompleteModalVisible(true)}
            />

            <Button
                mode={"contained"}
                children={"Modal with list"}
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

import { RadioButton, RadioListItem, Screen } from "@elementium/native"
import { useState } from "react"


export function RadioButtonScreen() {


    const [isRadioButtonChecked, setIsRadioButtonChecked] = useState(false)
    const [isRadioListItemChecked, setIsRadioListItemChecked] = useState(false)


    return (
        <Screen>
            <RadioButton value={isRadioButtonChecked} onValueChange={setIsRadioButtonChecked} />
            <RadioButton value={false} />
            <RadioButton value={true} />
            <RadioButton value={false} disabled />
            <RadioButton value={true} disabled />

            <RadioListItem
                title={"RadioListItem"}
                value={isRadioListItemChecked}
                onPress={() => setIsRadioListItemChecked(!isRadioListItemChecked)}
            />
            <RadioListItem title={"RadioListItem"} value={false} />
            <RadioListItem title={"RadioListItem"} value={true} />
            <RadioListItem title={"RadioListItem"} value={false} disabled />
            <RadioListItem title={"RadioListItem"} value={true} disabled />
        </Screen>
    )
}

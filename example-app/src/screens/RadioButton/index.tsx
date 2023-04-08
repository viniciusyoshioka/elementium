import { RadioButton, Screen } from "@elementium/native"
import { useState } from "react"


export function RadioButtonScreen() {


    const [isRadioButtonChecked, setIsRadioButtonChecked] = useState(false)


    return (
        <Screen>
            <RadioButton value={isRadioButtonChecked} onValueChange={setIsRadioButtonChecked} />
            <RadioButton value={false} />
            <RadioButton value={true} />
            <RadioButton value={false} disabled />
            <RadioButton value={true} disabled />
        </Screen>
    )
}

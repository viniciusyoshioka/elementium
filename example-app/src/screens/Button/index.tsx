import { FilledButton, Screen, Text } from "@elementium/native"

import { useAppTheme } from "@theme"


export function ButtonScreen() {


    const { color } = useAppTheme()


    return (
        <Screen style={{ margin: 16 }}>
            <>
                <Text
                    variant={"title"}
                    size={"large"}
                    style={{ color: color.onBackground, width: "100%" }}
                    children={"FilledButton"}
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16, color: "white" }}
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16, color: "white" }}
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16, color: "white" }}
                    disabled
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16, color: "white" }}
                    disabled
                />
            </>
        </Screen>
    )
}

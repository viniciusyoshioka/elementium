import { FilledButton, Text } from "@elementium/native"
import { ScrollView } from "react-native"

import { useHeaderColorOnScroll } from "@hooks"
import { useAppTheme } from "@theme"


export function ButtonScreen() {


    const { color } = useAppTheme()

    const scrollY = useHeaderColorOnScroll([0, 56], [color.background, color.surface])


    return (
        <ScrollView
            contentContainerStyle={{ padding: 16, alignItems: "center" }}
            onScroll={e => scrollY.value = e.nativeEvent.contentOffset.y}
        >
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
        </ScrollView>
    )
}

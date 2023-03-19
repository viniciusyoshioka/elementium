import { FilledButton, OutlineButton, Text, TextButton } from "@elementium/native"
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
                    style={{
                        marginTop: 16,
                        backgroundColor: color.primary,
                        color: color.onPrimary,
                    }}
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{
                        marginTop: 16,
                        backgroundColor: color.primary,
                        color: color.onPrimary,
                    }}
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    style={{
                        marginTop: 16,
                        backgroundColor: color.primary,
                        color: color.onPrimary,
                    }}
                    disabled
                />

                <FilledButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{
                        marginTop: 16,
                        backgroundColor: color.primary,
                        color: color.onPrimary,
                    }}
                    disabled
                />
            </>

            <>
                <Text
                    variant={"title"}
                    size={"large"}
                    style={{ color: color.onBackground, width: "100%", marginTop: 32 }}
                    children={"OutlineButton"}
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                    }}
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                    }}
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                    }}
                    disabled
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                    }}
                    disabled
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                        backgroundColor: color.primaryContainer,
                    }}
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                        backgroundColor: color.primaryContainer,
                    }}
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                        backgroundColor: color.primaryContainer,
                    }}
                    disabled
                />

                <OutlineButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{
                        marginTop: 16,
                        color: color.primary,
                        borderColor: color.outline,
                        backgroundColor: color.primaryContainer,
                    }}
                    disabled
                />
            </>

            <>
                <Text
                    variant={"title"}
                    size={"large"}
                    style={{ color: color.onBackground, width: "100%", marginTop: 32 }}
                    children={"TextButton"}
                />

                <TextButton
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16,color: color.primary }}
                />

                <TextButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16,color: color.primary }}
                />

                <TextButton
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16,color: color.primary }}
                    disabled
                />

                <TextButton
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16,color: color.primary }}
                    disabled
                />
            </>
        </ScrollView>
    )
}

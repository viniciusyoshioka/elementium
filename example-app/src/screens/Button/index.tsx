import { Button, ScrollScreen, Text } from "@elementium/native"

import { useHeaderColorOnScroll } from "@hooks"
import { useAppTheme } from "@theme"


export function ButtonScreen() {


    const { color } = useAppTheme()

    const onScroll = useHeaderColorOnScroll()


    return (
        <ScrollScreen contentContainerStyle={{ padding: 16 }} onScroll={onScroll}>
            <>
                <Text
                    variant={"title"}
                    size={"large"}
                    style={{ color: color.onBackground, width: "100%" }}
                    children={"Filled"}
                />

                <Button
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16 }}
                />

                <Button
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16 }}
                />

                <Button
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16 }}
                    disabled
                />

                <Button
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16 }}
                    disabled
                />
            </>

            <>
                <Text
                    variant={"title"}
                    size={"large"}
                    style={{ color: color.onBackground, width: "100%", marginTop: 32 }}
                    children={"Outline"}
                />

                <Button
                    variant={"outline"}
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16 }}
                />

                <Button
                    variant={"outline"}
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16 }}
                />

                <Button
                    variant={"outline"}
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16 }}
                    disabled
                />

                <Button
                    variant={"outline"}
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16 }}
                    disabled
                />
            </>

            <>
                <Text
                    variant={"title"}
                    size={"large"}
                    style={{ color: color.onBackground, width: "100%", marginTop: 32 }}
                    children={"Text"}
                />

                <Button
                    variant={"text"}
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16 }}
                />

                <Button
                    variant={"text"}
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16 }}
                />

                <Button
                    variant={"text"}
                    text={"Olá, mundo!"}
                    style={{ marginTop: 16 }}
                    disabled
                />

                <Button
                    variant={"text"}
                    text={"Olá, mundo!"}
                    iconName={"add"}
                    style={{ marginTop: 16 }}
                    disabled
                />
            </>
        </ScrollScreen>
    )
}

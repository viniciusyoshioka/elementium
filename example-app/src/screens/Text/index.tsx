import { Text } from "@elementium/native"
import { ScrollView } from "react-native"

import { useAppTheme } from "@theme"


export function TextScreen() {


    const { color } = useAppTheme()


    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Display Large
            </Text>

            <Text variant={"display"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Display Medium
            </Text>

            <Text variant={"display"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Display Small
            </Text>

            <Text variant={"display"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Headline Large
            </Text>

            <Text variant={"headline"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Headline Medium
            </Text>

            <Text variant={"headline"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Headline Small
            </Text>

            <Text variant={"headline"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Title Large
            </Text>

            <Text variant={"title"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Title Medium
            </Text>

            <Text variant={"title"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Title Small
            </Text>

            <Text variant={"title"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Body Large
            </Text>

            <Text variant={"body"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Body Medium
            </Text>

            <Text variant={"body"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Body Small
            </Text>

            <Text variant={"body"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Label Large
            </Text>

            <Text variant={"label"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Label Medium
            </Text>

            <Text variant={"label"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Lorem ipsum dolor sit amet.
            </Text>


            <Text variant={"title"} size={"large"} style={{ color: color.onBackground }}>
                Label Small
            </Text>

            <Text variant={"label"} size={"small"} style={{ color: color.onBackground }}>
                Lorem ipsum dolor sit amet.
            </Text>
        </ScrollView>
    )
}

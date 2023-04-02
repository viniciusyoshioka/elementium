import { Text } from "@elementium/native"
import { ScrollView } from "react-native"

import { useHeaderColorOnScroll } from "@hooks"
import { useAppTheme } from "@theme"


export function TextScreen() {


    const { color } = useAppTheme()

    const scrollY = useHeaderColorOnScroll([0, 56], [color.background, color.surface])


    return (
        <ScrollView
            contentContainerStyle={{ padding: 16 }}
            onScroll={e => scrollY.value = e.nativeEvent.contentOffset.y}
        >
            <Text variant={"display"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Display Large
            </Text>

            <Text variant={"display"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Display Medium
            </Text>

            <Text variant={"display"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Display Small
            </Text>

            <Text variant={"headline"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Headline Large
            </Text>

            <Text variant={"headline"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Headline Medium
            </Text>

            <Text variant={"headline"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Headline Small
            </Text>

            <Text variant={"title"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Title Large
            </Text>

            <Text variant={"title"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Title Medium
            </Text>

            <Text variant={"title"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Title Small
            </Text>

            <Text variant={"body"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Body Large
            </Text>

            <Text variant={"body"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Body Medium
            </Text>

            <Text variant={"body"} size={"small"} style={{ color: color.onBackground, marginBottom: 24 }}>
                Body Small
            </Text>

            <Text variant={"label"} size={"large"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Label Large
            </Text>

            <Text variant={"label"} size={"medium"} style={{ color: color.onBackground, marginBottom: 8 }}>
                Label Medium
            </Text>

            <Text variant={"label"} size={"small"} style={{ color: color.onBackground }}>
                Label Small
            </Text>
        </ScrollView>
    )
}

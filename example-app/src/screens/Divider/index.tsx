import { Divider, Screen, Text, useTheme } from "@elementium/native"


export function DividerScreen() {


    const { color } = useTheme()


    return (
        <Screen style={{ alignItems: "flex-start", padding: 16 }}>
            <Text children={"Divider"} style={{ color: color.onBackground }} />
            <Divider style={{ marginBottom: 16 }} />

            <Text children={"Divider"} style={{ color: color.onBackground }} />
            <Divider style={{ marginBottom: 16 }} />

            <Text children={"Divider"} style={{ color: color.onBackground }} />
            <Divider style={{ marginBottom: 16 }} />

            <Text children={"Divider"} style={{ color: color.onBackground }} />
            <Divider style={{ marginBottom: 16 }} />

            <Text children={"Divider"} style={{ color: color.onBackground }} />
            <Divider style={{ marginBottom: 16 }} />
        </Screen>
    )
}

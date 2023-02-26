import { Icon, Screen } from "@elementium/native"

import { useAppTheme } from "@theme"


export function IconScreen() {


    const { color } = useAppTheme()


    return (
        <Screen style={{ justifyContent: "center" }}>
            <Icon
                name={"add"}
                size={32}
                color={color.onBackground}
                style={{ marginBottom: 8 }}
            />

            <Icon
                name={"menu"}
                size={32}
                color={color.onBackground}
                style={{ marginBottom: 8 }}
            />

            <Icon
                name={"camera"}
                size={32}
                color={color.onBackground}
                style={{ marginBottom: 8 }}
            />
        </Screen>
    )
}

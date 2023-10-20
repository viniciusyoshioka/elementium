import { Icon, Screen } from "@elementium/native"

import { useAppTheme } from "@theme"


export function IconScreen() {


    const { color } = useAppTheme()


    return (
        <Screen style={{ flexDirection: "row", flexWrap: "wrap", padding: 16, gap: 16 }}>
            <Icon name={"plus"} size={32} color={color.onBackground} />
            <Icon name={"menu"} size={32} color={color.onBackground} />
            <Icon name={"dots-vertical"} size={32} color={color.onBackground} />
            <Icon name={"account-circle-outline"} size={32} color={color.onBackground} />
            <Icon name={"application-brackets-outline"} size={32} color={color.onBackground} />
            <Icon name={"backup-restore"} size={32} color={color.onBackground} />
            <Icon name={"barcode-scan"} size={32} color={color.onBackground} />
            <Icon name={"battery-low"} size={32} color={color.onBackground} />
            <Icon name={"beaker-outline"} size={32} color={color.onBackground} />
            <Icon name={"brain"} size={32} color={color.onBackground} />
            <Icon name={"bug"} size={32} color={color.onBackground} />
            <Icon name={"bug-outline"} size={32} color={color.onBackground} />
            <Icon name={"cake"} size={32} color={color.onBackground} />
            <Icon name={"cake-variant"} size={32} color={color.onBackground} />
            <Icon name={"chart-bar"} size={32} color={color.onBackground} />
            <Icon name={"check-decagram-outline"} size={32} color={color.onBackground} />
            <Icon name={"cheese"} size={32} color={color.onBackground} />
            <Icon name={"cloud-sync-outline"} size={32} color={color.onBackground} />
            <Icon name={"dialpad"} size={32} color={color.onBackground} />
            <Icon name={"dna"} size={32} color={color.onBackground} />
            <Icon name={"fingerprint"} size={32} color={color.onBackground} />
        </Screen>
    )
}

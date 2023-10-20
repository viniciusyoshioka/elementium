import { IconProps as VectorIconProps } from "react-native-vector-icons/Icon"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import Material from "react-native-vector-icons/MaterialIcons"
import MaterialOutline from "react-native-vector-icons/MaterialIconsOutlined"


export type IconGroup = "material" | "material-outline" | "material-community"


export interface IconProps extends VectorIconProps {
    group?: IconGroup
}


export interface OptionalIconProps extends Partial<IconProps> {}


function getComponent(group: IconGroup) {
    switch (group) {
        case "material":
            return Material
        case "material-outline":
            return MaterialOutline
        case "material-community":
            return MaterialCommunity
        default:
            console.warn(`Invalid icon group: "${group}". Using "material-community" as default.`)
            return MaterialCommunity
    }
}


export function Icon(props: IconProps) {


    const BaseComponent = getComponent(props.group ?? "material-community")


    return (
        <BaseComponent
            {...props}
            size={props.size ?? 24}
        />
    )
}

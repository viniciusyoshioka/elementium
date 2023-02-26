import type { TextProps } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import Material from "react-native-vector-icons/MaterialIcons"


export type IconGroup = "material" | "material-community" | "ionicons"


export interface LibIconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
}


export interface IconProps extends LibIconProps {
    group?: IconGroup;
}


function getComponent(group: IconGroup) {
    switch (group) {
        case "material":
            return Material
        case "material-community":
            return MaterialCommunity
        case "ionicons":
            return Ionicons
        default:
            return Material
    }
}


const defaultIconGroup: IconGroup = "material"
const defaultIconSize = 24
const defaultIconColor = "black"


export function Icon(props: IconProps) {


    const BaseComponent = getComponent(props.group ?? defaultIconGroup)


    return (
        <BaseComponent
            name={props.name}
            size={props.size ?? defaultIconSize}
            color={props.color ?? defaultIconColor}
            style={props.style}
        />
    )
}
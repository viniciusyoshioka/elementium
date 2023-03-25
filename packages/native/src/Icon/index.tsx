import { ColorValue, TextProps } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons"
import Material from "react-native-vector-icons/MaterialIcons"


export type IconGroup = "material" | "material-community" | "ionicons"


export interface LibIconProps extends TextProps {
    name: string;
    size?: number;
    color?: string | ColorValue;
}


export interface IconProps extends LibIconProps {
    group?: IconGroup;
}


export interface ExtendableIconProps extends TextProps {
    iconName: string;
    iconSize?: number;
    iconColor?: string | ColorValue;
    iconGroup?: IconGroup;
}


export interface ExtendableOptionalIconProps extends Omit<ExtendableIconProps, "iconName"> {
    iconName?: string;
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
            console.warn(`Invalid icon group: "${group}". Using "material" as default.`)
            return Material
    }
}


export const defaultIconGroup: IconGroup = "material"
export const defaultIconSize = 24
export const defaultIconColor: string | ColorValue = "black"


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

import { ElementiumThemeType } from "@elementium/native"


export interface AppThemeType extends ElementiumThemeType {
    name: string;
    switchTheme: () => void;
}

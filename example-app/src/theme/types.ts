import { ElementiumThemeType } from "@elementium/theme"


export interface AppThemeType extends ElementiumThemeType {
    name: string;
    switchTheme: () => void;
}

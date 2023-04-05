import { ThemeType } from "@elementium/native"


export interface AppThemeType extends ThemeType {
    name: string;
    switchTheme: () => void;
}

import { Text, TextProps } from ".."


export interface TitleProps extends TextProps {}


export function Title(props: TitleProps) {
    return (
        <Text
            variant={"body"}
            size={"large"}
            {...props}
        />
    )
}

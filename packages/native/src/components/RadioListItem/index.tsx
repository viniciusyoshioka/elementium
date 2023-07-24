import { StyleSheet } from "react-native"

import { ListItem, ListItemProps, RadioButton, RadioButtonEspecificProps } from ".."


export interface RadioListItemProps extends ListItemProps, RadioButtonEspecificProps {}


export function RadioListItem(props: RadioListItemProps) {


    function LeadingComponent() {
        if (props.LeadingComponent && props.LeadingComponent instanceof Function) {
            return <props.LeadingComponent />
        }
        if (props.LeadingComponent && props.LeadingComponent instanceof Object) {
            return props.LeadingComponent
        }
        return (
            <RadioButton
                value={props.value}
                onValueChange={props.onValueChange}
                colors={props.colors}
                disabled={props.disabled}
                style={{ marginHorizontal: -10 }}
                onPress={props.onPress}
            />
        )
    }


    return (
        <ListItem
            {...props}
            style={[styles.container, props.style]}
            LeadingComponent={LeadingComponent}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

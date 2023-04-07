import { Icon, ListItem, ScrollScreen } from "@elementium/native"

import { useHeaderColorOnScroll } from "@hooks"
import { useAppTheme } from "@theme"


export function ListItemScreen() {


    const { color } = useAppTheme()

    const onScroll = useHeaderColorOnScroll()


    return (
        <ScrollScreen onScroll={onScroll}>
            <ListItem
                title={"ListItem"}
            />

            <ListItem
                title={"ListItem"}
                leadingIcon={{ iconName: "home" }}
            />

            <ListItem
                title={"ListItem"}
                LeadingComponent={() => <Icon name={"home"} color={color.onSurfaceVariant} />}
            />

            <ListItem
                title={"ListItem"}
                LeadingComponent={(
                    <Icon name={"home"} color={color.onSurfaceVariant} />
                )}
            />

            <ListItem
                title={"ListItem"}
                trailingIcon={{ iconName: "navigate-next" }}
            />

            <ListItem
                title={"ListItem"}
                trailingText={"99+"}
            />

            <ListItem
                title={"ListItem"}
                TrailingComponent={() => (
                    <Icon name={"navigate-next"} color={color.onSurfaceVariant} />
                )}
            />

            <ListItem
                title={"ListItem"}
                TrailingComponent={(
                    <Icon name={"navigate-next"} color={color.onSurfaceVariant} />
                )}
            />


            <ListItem
                title={"ListItem"}
                description={"ListItem"}
            />

            <ListItem
                title={"ListItem"}
                description={"Description"}
                leadingIcon={{ iconName: "home" }}
            />

            <ListItem
                title={"ListItem"}
                description={"Description"}
                trailingIcon={{ iconName: "navigate-next" }}
            />

            <ListItem
                title={"ListItem"}
                description={"Description"}
                leadingIcon={{ iconName: "home" }}
                trailingIcon={{ iconName: "navigate-next" }}
            />

            <ListItem
                title={"ListItem"}
                description={"Description with leadingIcon to test the wrapping of the description"}
                leadingIcon={{ iconName: "home" }}
            />

            <ListItem
                title={"ListItem"}
                description={"Description with trailingIcon to test the wrapping of the description"}
                trailingIcon={{ iconName: "home" }}
            />

            <ListItem
                title={"ListItem"}
                description={"Description with leading and trailing icon, in a long text, to test the wrapping of the description"}
                leadingIcon={{ iconName: "home" }}
                trailingIcon={{ iconName: "navigate-next" }}
            />
        </ScrollScreen>
    )
}

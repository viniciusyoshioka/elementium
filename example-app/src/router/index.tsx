import { Icon } from "@elementium/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { Pressable, StatusBar } from "react-native"

import { IconScreen } from "@screens/Icon"
import { InputScreen } from "@screens/Input"
import { ListItemScreen } from "@screens/ListItem"
import { ModalScreen } from "@screens/Modal"
import { RadioButtonScreen } from "@screens/RadioButton"
import { useAppTheme } from "@theme"


const Drawer = createDrawerNavigator()


export function Router() {


    const { color, isDark, switchTheme } = useAppTheme()


    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor={color.background}
                barStyle={isDark ? "light-content" : "dark-content"}
            />

            <Drawer.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: color.background },
                    headerTintColor: color.onBackground,
                    headerShadowVisible: false,
                    headerRight: props => (
                        <Pressable
                            onPress={switchTheme}
                            style={{ marginRight: 16 }}
                        >
                            <Icon
                                name={"brightness-medium"}
                                color={props.tintColor}
                            />
                        </Pressable>
                    ),
                    drawerStyle: { backgroundColor: color.surface },
                    drawerInactiveTintColor: color.onSurfaceVariant,
                    drawerActiveBackgroundColor: color.secondaryContainer,
                    drawerActiveTintColor: color.onSecondaryContainer,
                    sceneContainerStyle: { backgroundColor: color.background },
                }}
            >
                <Drawer.Screen name={"Icon"} component={IconScreen} />
                <Drawer.Screen name={"Input"} component={InputScreen} />
                <Drawer.Screen name={"ListItem"} component={ListItemScreen} />
                <Drawer.Screen name={"Modal"} component={ModalScreen} />
                <Drawer.Screen name={"RadioButton"} component={RadioButtonScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

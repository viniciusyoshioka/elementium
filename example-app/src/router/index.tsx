import { Icon } from "@elementium/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { Pressable, StatusBar } from "react-native"

import { ButtonScreen } from "@screens/Button"
import { InputScreen } from "@screens/Input"
import { TextScreen } from "@screens/Text"
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
                    drawerInactiveTintColor: color.onSurface,
                    drawerActiveBackgroundColor: color.surfaceVariant,
                    drawerActiveTintColor: color.onSurfaceVariant,
                    sceneContainerStyle: { backgroundColor: color.background },
                }}
            >
                <Drawer.Screen name={"Button"} component={ButtonScreen} />
                <Drawer.Screen name={"Input"} component={InputScreen} />
                <Drawer.Screen name={"Text"} component={TextScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

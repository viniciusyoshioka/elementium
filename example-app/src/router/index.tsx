import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import { ButtonScreen } from "@screens/Button"
import { InputScreen } from "@screens/Input"
import { TextScreen } from "@screens/Text"


const Drawer = createDrawerNavigator()


export function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Button" component={ButtonScreen} />
                <Drawer.Screen name="Input" component={InputScreen} />
                <Drawer.Screen name="Text" component={TextScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

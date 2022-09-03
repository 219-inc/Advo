import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from 'screen/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerStack(){
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
}
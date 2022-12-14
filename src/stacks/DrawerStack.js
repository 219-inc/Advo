import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "screen/HomeScreen";
import LawyersScreen from "screen/LawyersScreen";

import CustomDrawer from "components/CustomDrawer";

import { AntDesign, Octicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#eab308",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} focused color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lawyers"
        component={LawyersScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Octicons name="law" size={size} focused color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

import { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";

import HomeScreen from "screen/HomeScreen";
import LawyersScreen from "screen/LawyersScreen";
import Appointments from "../components/Appointments/Appointments";
import Consultation from "../components/Consultations/Consultation";
import Reminders from "../components/Reminders/Reminders";

import { API } from "aws-amplify";

import CustomDrawer from "components/CustomDrawer";

import { AntDesign, Octicons, Fontisto, Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

let routes = [
  <Drawer.Screen
    name="Home"
    component={HomeScreen}
    options={{
      drawerIcon: ({ focused, color, size }) => (
        <AntDesign name="home" size={size} focused color={color} />
      ),
    }}
  />,
  <Drawer.Screen
    name="Lawyers"
    component={LawyersScreen}
    options={{
      drawerIcon: ({ focused, color, size }) => (
        <Octicons name="law" size={size} focused color={color} />
      ),
    }}
  />,
  <Drawer.Screen
    name="Appointments"
    component={Appointments}
    options={{
      drawerIcon: ({ focused, color, size }) => (
        <Fontisto name="date" size={size} focused color={color} />
      ),
    }}
  />,
  <Drawer.Screen
    name="Consultation"
    component={Consultation}
    options={{
      drawerIcon: ({ focused, color, size }) => (
        <Ionicons
          name="chatbubbles-outline"
          size={size}
          focused
          color={color}
        />
      ),
    }}
  />,
  <Drawer.Screen
    name="Reminder"
    component={Reminders}
    options={{
      drawerIcon: ({ focused, color, size }) => (
        <AntDesign name="clockcircleo" size={size} focused color={color} />
      ),
    }}
  />,
];

const NoNet = () => <Text>Please Check your internet connection</Text>;

export default function DrawerStack() {
  // const [enabled_routes, setEnabledRoutes] = useState([]);

  // async function getEnabledRoutes() {
  //   try {
  //     const data = await API.get("AppContent", "/sideMenuContent");

  //     setEnabledRoutes(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   (async () => await getEnabledRoutes())();
  // }, []);

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
          fontSize: 15,
        },
      }}
    >
      {routes.map((route) => route)}

      {/* {enabled_routes.length == 0 && (
        <Drawer.Screen name={"Nointernet"} component={NoNet} />
      )} */}
    </Drawer.Navigator>
  );
}

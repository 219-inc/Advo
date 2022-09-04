import { createStackNavigator } from "@react-navigation/stack";
import tw from "twrnc";

//screens
import DrawerStack from "./DrawerStack";
import LawyersScreen from "screen/LawyersScreen";
import ProfileScreen from "screen/ProfileScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      activeColor={tw`text-yellow-500`.color}
      barStyle={{ backgroundColor: "#1F2937" }}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={DrawerStack} />
      <Stack.Screen name="Lawyers" component={LawyersScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

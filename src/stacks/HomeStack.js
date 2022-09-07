import { createStackNavigator } from "@react-navigation/stack";
import tw from "twrnc";

//screens
import DrawerStack from "./DrawerStack";
import LawyersScreen from "screen/LawyersScreen";
import WalletScreen from "screen/WalletScreen";
import ProfileScreen from "screen/ProfileScreen";
import LocationSelector from "screen/LocationSelector";

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
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LocationSelector" component={LocationSelector} />
    </Stack.Navigator>
  );
}

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Name from "./Name";
import Email from "./Email";

const Stack = createStackNavigator();

const RegisterUser = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"name"}
    >
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Email" component={Email} />
    </Stack.Navigator>
  );
};

export default RegisterUser;

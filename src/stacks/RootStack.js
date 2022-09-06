import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "screen/Authentication/Login";
import SignUp from "screen/Authentication/SignupScreen";
import ConfirmEmail from "screen/Authentication/ConfirmEmail";
import ForgotPassword from "screen/Authentication/ForgotPassword";
import ChangePassword from "screen/Authentication/ChangePassword";
import OtpScreen from 'screen/Authentication/OtpScreen';

import OnboardingScreens from "screen/OnboardingScreens";

import HomeStack from "./HomeStack";
import LawyersProfile from "screen/LawyersProfile";

const Stack = createNativeStackNavigator();

export default function Root({ user, isFirstLaunch }) {
  const HomeComponent = () => (
    <>{isFirstLaunch ? <OnboardingScreens /> : <HomeStack />}</>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="HomeStack" component={HomeComponent} />
          <Stack.Screen name="LawyersProfile" component={LawyersProfile} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={Login} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </>
      )}
    </Stack.Navigator>
  );
}

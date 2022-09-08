import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, Hub } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "screen/Auth-v2/Login";
import SignUp from "screen/Authentication/SignupScreen";
import ConfirmEmail from "screen/Authentication/ConfirmEmail";
import ForgotPassword from "screen/Authentication/ForgotPassword";
import ChangePassword from "screen/Authentication/ChangePassword";
import OtpScreen from "screen/Authentication/OtpScreen";

import RegisterUser from "screen/Auth-v2/RegisterUser";
import OTP from "screen/Auth-v2/OTP";

import OnboardingScreens from "screen/OnboardingScreens";

import HomeStack from "./HomeStack";
import LawyersProfile from "screen/LawyersProfile";
import WelcomeScreen from "screen/Auth-v2/WelcomeScreen";

const Stack = createNativeStackNavigator();

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e.msg);
    return true;
  }
};

export default function Root() {
  const [user, setUser] = useState(undefined);

  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  const checkIfSignedIn = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkIfSignedIn();
    (async () => {
      const value = await getData("@isFirstLaunch");
      setIsFirstLaunch(value == "true" ? true : false);
      if (value == "true") {
        await AsyncStorage.setItem("@isFirstLaunch", "false");
      }
    })();
  }, []);

  useEffect(() => {
    const listner = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkIfSignedIn();
      }
    };

    Hub.listen("auth", listner);
    return () => Hub.remove("auth", listner);
  }, []);

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
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="SignIn"
            component={isFirstLaunch ? OnboardingScreens : Login}
          />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          {/* Auth V2 Routes */}
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
        </>
      )}
    </Stack.Navigator>
  );
}

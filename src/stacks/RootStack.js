import { useEffect, useState, useContext } from "react";
import { DeviceEventEmitter } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "functions/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "screen/Authentication/Login";
import RegisterUser from "screen/Authentication/RegisterUser";
import OTP from "screen/Authentication/OTP";
import WelcomeScreen from "screen/Authentication/WelcomeScreen";

import OnboardingScreens from "screen/OnboardingScreens";

import HomeStack from "./HomeStack";
import LawyersProfile from "screen/LawyersProfile";
import LawyerApplication from "screen/LawyerApplication";
import SplashScreen from "screen/SplashScreen";

import UserContext from "context/User";

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
  const { user, setUser } = useContext(UserContext);
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
      if (data.payload.event === "login" || data.payload.event === "logout") {
        checkIfSignedIn();
      }
    };

    DeviceEventEmitter.addListener("auth", listner);
    return () => DeviceEventEmitter.removeAllListeners("auth");
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
          <Stack.Screen
            name="LawyerApplication"
            component={LawyerApplication}
          />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="SignIn"
            component={isFirstLaunch ? OnboardingScreens : Login}
          />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="RegisterUser" component={RegisterUser} />
        </>
      )}
    </Stack.Navigator>
  );
}

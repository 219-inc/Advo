import { View, StatusBar, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import tw from "twrnc";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RootStack from "stack/RootStack";

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

const SplashScreen = () => {
  const edges = useSafeAreaInsets();
  const startAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down logo...
  const scaleLogo = useRef(new Animated.Value(1)).current;

  // Offset Animation....
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Animating COntent...
  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

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
      if(value == "true"){
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

  // Animation Done....
  useEffect(() => {
    // Starting Animation after 500ms....
    setTimeout(() => {
      // Parallel Animation...
      Animated.parallel([
        Animated.timing(startAnimation, {
          // For same Height for non safe Area Devices...
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // Scaling to 0.35
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          // Moving to Right Most...
          toValue: {
            x: -150,
            y: !isFirstLaunch && user ? 0 : Dimensions.get("window").height / 2 - 20,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);
  }, [user]);

  return (
    <View style={tw`absolute top-0 bottom-0 left-0 right-0`}>
      <StatusBar backgroundColor={"#1F2937"} barStyle={"dark-content"} />
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          transform: [{ translateY: startAnimation }],
          top: !isFirstLaunch && user ? -70 : 0,
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Text
            style={[
              {
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                transform: [
                  { translateX: moveLogo.x },
                  { translateY: moveLogo.y },
                  { scale: scaleLogo },
                ],
              },
              tw`text-4xl text-yellow-600 font-semibold`,
            ]}
          >
            Advo
          </Animated.Text>
          {/* <Text style={tw`text-4xl text-yellow-600 font-semibold`}>Advo</Text> */}
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          tw`rounded-xl bg-white`,
          {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          transform: [
            { translateY: contentTransition },
            { translateX: contentTransition },
          ],
        }]}
      >
        <RootStack user={user} isFirstLaunch={isFirstLaunch} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

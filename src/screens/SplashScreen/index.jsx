import { View, StatusBar, Text, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

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
  const nav = useNavigation();
  const [user, setUser] = useState(undefined);

  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  const checkIfSignedIn = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
      nav.navigate("")
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

  return (
    <View style={tw`absolute top-0 bottom-0 left-0 right-0`}>
      <StatusBar backgroundColor={"#1F2937"} barStyle={"dark-content"} />
      <View
        style={{
          flex: 1,
          zIndex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={[
              {
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
              },
              tw`text-4xl text-yellow-600 font-semibold`,
            ]}
          >
            Advo
          </Text>
          {/* <Text style={tw`text-4xl text-yellow-600 font-semibold`}>Advo</Text> */}
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

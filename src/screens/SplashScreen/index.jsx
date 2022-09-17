import { View, StatusBar, Text, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";


const SplashScreen = () => {
  const nav = useNavigation();
  
  return (
    <View style={tw`absolute top-0 bottom-0 left-0 right-0 bg-gray-800`}>
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

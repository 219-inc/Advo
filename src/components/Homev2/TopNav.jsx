import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

import { Ionicons } from "@expo/vector-icons";
import LocationDropDown from "component/LocationDropDown";
import { useNavigation } from "@react-navigation/native";

const TopNav = () => {
  const navigation = useNavigation();

  function openNavigationDrawer() {
    navigation.openDrawer();
  }

  function onWalletPress() {
    navigation.navigate("Wallet");
  }

  return (
    <View
      style={tw`flex flex-row items-center w-full justify-between py-4 px-4 bg-white absolute z-10`}
    >
      <View style={tw`flex flex-row w-full items-center`}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          }}
          style={tw`w-14 h-14 rounded-full`}
        />
        <View style={tw`flex flex-row justify-between items-center w-11/12`}>
          <View style={tw`ml-2`}>
            <Text style={tw`text-gray-600 text-lg`}>Good Morning 👋</Text>
            <Text style={tw`text-2xl font-semibold`}>Divyansh Gupta</Text>
          </View>
          <View style={tw`mr-8 flex flex-row`}>
            <TouchableOpacity onPress={onWalletPress}>
              <Ionicons name="wallet-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopNav;

import { View, Text, TouchableOpacity } from "react-native";
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

  function onWalletPress(){
    navigation.navigate("Wallet")
  }

  return (
    <View style={tw`flex flex-row justify-between py-4 px-4 bg-white absolute z-10 w-full`}>
      <View style={tw`flex flex-row justify-start`}>
        <TouchableOpacity onPress={openNavigationDrawer}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <LocationDropDown />
      </View>
      <TouchableOpacity onPress={onWalletPress}>
        <Ionicons name="wallet-outline" size={24} style={tw`text-gray-500`} />
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;

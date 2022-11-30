import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

import TopNav from "component/Homev2/TopNav";
import QuickActions from "component/Homev2/QuickActions";

import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <TopNav />
      <View style={tw`w-full mt-26 px-4`}>
        <View
          style={tw`flex flex-row bg-gray-100 rounded-xl items-center pr-6 pl-4`}
        >
          <AntDesign name="search1" size={24} style={tw`text-gray-300`} />
          <TextInput
            style={tw`w-full px-2 py-3 bg-gray-100 rounded-xl`}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={tw` px-4 mt-4`}>
        <Text style={tw`text-xl font-semibold`}>Lawyer Speciality</Text>
        <QuickActions />
      </View>
    </View>
  );
};

export default HomeScreen;

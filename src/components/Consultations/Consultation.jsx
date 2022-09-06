import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";
import Paid from "./Paid";
import Free from "./Free";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Consultation = () => {
  const Tab = createMaterialTopTabNavigator();
  const {goBack} = useNavigation();
  return (
    <View style={tw`bg-gray-800 h-full`}>
      <View style={tw`flex flex-row ml-3 mt-3`}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back"
            style={tw`text-slate-50`}
            size={30}
            onPress={() => goBack()}
          />
        </TouchableOpacity>
        <Text style={tw`text-slate-50 text-xl ml-3 font-semibold`}>
          Online Consultation
        </Text>
      </View>

      <View style={tw`w-full  flex flex-row bg-gray-800`}>
        <Tab.Navigator>
          <Tab.Screen  name="Paid " component={Paid} />
          <Tab.Screen name="Free" component={Free} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Consultation;

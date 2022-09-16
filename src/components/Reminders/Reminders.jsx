import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
const Reminders = () => {
  const {goBack} = useNavigation();
  return (
    <View style={tw` h-full`}>
      <View style={tw`flex flex-row pl-3 pt-3 pb-3 bg-gray-800` }>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialIcons
            name="arrow-back"
            style={tw`text-slate-50`}
            size={30}
          />
        </TouchableOpacity>
        <Text style={tw`text-slate-50  text-xl ml-3 font-semibold`}>
          My Reminders
        </Text>
      </View>

       
      <View style={tw`mb-3`}>
        <Text style={tw` text-center mt-3 font-bold text-base`}>
           You have no reminders.
        </Text>
        <Text style={tw` text-center mt-3`}>
           Set a reminder for your next booking to get notified.
        </Text>
      </View>
      
      <Button text="Add a reminder" />
    </View>
  );
};

export default Reminders;

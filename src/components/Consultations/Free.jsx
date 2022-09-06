 import React from "react";
 import { View, Text, TouchableOpacity } from "react-native";
 import tw from "twrnc";
 import { MaterialIcons } from "@expo/vector-icons";
 import Button from "../Button";

const Free = () => {
  return (
    <View style={tw`h-full`}>
      <View style={tw`mb-3 `}>
        <Text style={tw`text-slate-50 text-center mt-3 font-bold text-base`}>
          Get Well.
        </Text>
        <Text style={tw`text-slate-50 text-center mt-3`}>
          Start by looking for doctors near you,read ptient stories and book
          appointment
        </Text>
      </View>
      <View>
        <Button text="Consult Now" />
      </View>
    </View>
  );
}

export default Free
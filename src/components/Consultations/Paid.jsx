import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";

const Paid = () => {
  return (
    <View style={tw`h-full `}>
      <View style={tw`mb-3 `}>
        <Text style={tw`  text-center mt-3 font-bold text-base`}>
          Get Well.
        </Text>
        <Text style={tw` mx-6 text-center mt-3`}>
          Start by looking for doctors near you,read patient stories and book
          appointment
        </Text>
      </View>
        <Button text="Consult Now" />
    </View>
  );
};

export default Paid;

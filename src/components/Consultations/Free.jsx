 import React from "react";
 import { View, Text, TouchableOpacity } from "react-native";
 import tw from "twrnc";
 import { MaterialIcons } from "@expo/vector-icons";
 import Button from "../Button";

const Free = () => {
  return (
    <View style={tw`h-full`}>
      <View style={tw`mb-3 `}>
        <Text style={tw` text-center mt-3 font-bold text-base`}>
           Talk To Expert
        </Text>
        <Text style={tw` mx-6 text-center mt-3`}>
          You haven't asked any queries yet. Ask a Question now!.
        </Text>
      </View>
        <Button text="Consult Now" />
    </View>
  );
}

export default Free
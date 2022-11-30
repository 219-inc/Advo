import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Action({ item }) {
  return (
    <TouchableOpacity style={tw`mx-4 mb-4`}>
      <View style={tw`w-24 flex flex-col items-center`}>
        <Image
          source={item.source && item.source}
          style={tw`w-16 h-16 rounded-full`}
        />
        <Text style={tw`w-full text-center mt-1`}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

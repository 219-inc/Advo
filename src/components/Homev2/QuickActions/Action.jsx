import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'twrnc'

export default function Action({ item }) {
  return (
    <TouchableOpacity style={tw`rounded-lg shadow-md w-26 bg-white mx-2.5 mb-6 border border-gray-200`}>
      <Image
        source={item.source && item.source}
        style={tw`w-full h-20 rounded-t-lg`}
      />
      <View style={tw`text-center items-center justify-center py-2`}>
        <Text style={tw`text-center my-auto font-semibold`}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

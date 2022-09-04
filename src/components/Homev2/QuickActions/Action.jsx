import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'twrnc'

export default function Action({ item }) {
  return (
    <TouchableOpacity style={tw`rounded-lg shadow-md w-26 bg-white mx-2.5 mb-6 border border-gray-200`}>
      <ImageBackground
        source={item.source && item.source}
        style={tw`w-full h-20 rounded-t-lg`}
      >
        {item.offer && (
          <View style={tw`bg-gray-300 shadow border border-gray-400 rounded-lg px-2 py-1 my-1 mx-1 w-16`}>
            <Text style={tw`text-black text-xs font-semibold`}>{item.offer}</Text>
          </View>
        )}
      </ImageBackground>
      <View style={tw`text-center items-center justify-center py-2`}>
        <Text style={tw`text-center my-auto font-semibold`}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

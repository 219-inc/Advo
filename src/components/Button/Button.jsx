import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const Button = (props) => {
  return (
    <View style={tw`absolute bottom-0 w-full mb-2`}>
      <TouchableOpacity style={tw`rounded-lg bg-gray-800 mx-4 `}>
        <Text style={tw`text-center text-base my-1 text-slate-50 p-2 font-bold `}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button; 

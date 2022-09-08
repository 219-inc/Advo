import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Paginator = ({ selected, total_steps }) => {
  return (
    <View
      style={tw`w-full absolute bottom-25 left-5 flex flex-row items-center justify-center`}
    >
      {total_steps.map((step, index) => (
        <View
          key={index}
          style={tw`w-2 h-2 rounded-full mx-1 ${
            step === selected ? "bg-black w-6" : "bg-gray-300"
          }`}
        />
      ))}
    </View>
  );
};

export default Paginator;

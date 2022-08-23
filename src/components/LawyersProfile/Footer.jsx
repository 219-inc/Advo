import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import tw from "twrnc";

const Footer = () => {
  return (
    <View style={tw`border-t-2  border-gray-100 mb-3`}>
      <View style={tw`mx-4 pt-3 flex flex-row border-gray-100`}>
        <View >
          <Text style={tw`font-semibold text-gray-700 text-base `}>NEXT AVAILABLE AT</Text>
          <Text style={tw`text-green-500`}>01:00 PM, Tomorrow</Text>
        </View>
        <View style={tw`ml-10`}>
          <TouchableOpacity
            style={tw`border-2 px-6 pt-1 pb-1 rounded-lg mx-auto border-gray-500 bg-blue-400`}
          >
            <Text style={tw`text-base text-gray-800 my-2 text-white`}>Book Office visit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;

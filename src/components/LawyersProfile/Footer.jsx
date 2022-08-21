import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import tw from "twrnc";

const Footer = () => {
  return (
    <View style={tw`mx-4`}>
      <View style={tw``}>
        <View>
          <Text>NEXT AVAILABLE AT</Text>
          <Text>01:00 PM, Tomorrow</Text>
        </View>
        <View>
          <TouchableOpacity
            style={tw`border-2 px-6 pt-1 pb-1 rounded-lg mx-auto border-gray-500`}
          >
            <Text style={tw`text-base text-gray-800`}>Share Your Story </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;

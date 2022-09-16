import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const LawyerApplication = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white h-full`}>
      <View
        style={tw`w-full h-12 bg-gray-800 border-b border-gray-200 flex flex-row justify-between items-center shadow-md`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`px-4`}>
          <Text style={tw`text-red-500 font-semibold`}>Cancel</Text>
        </TouchableOpacity>
        <Text style={tw`text-white text-lg font-semibold`}>Lawyer Application</Text>
        <TouchableOpacity>
          <Text style={tw`text-blue-500 font-semibold mx-3`}>Save & Exit</Text>
        </TouchableOpacity>
      </View>
      <View>
        
      </View>
    </View>
  );
};

export default LawyerApplication;

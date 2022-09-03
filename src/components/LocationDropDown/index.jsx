import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const LocationDropDown = () => {
  const navigation = useNavigation();

  function onLocationDropDownPress() {
    navigation.navigate("LocationSelectorScreen");
  }

  return (
    <TouchableOpacity
      style={tw`mx-2 flex flex-row`}
      onPress={onLocationDropDownPress}
    >
      <View style={tw`my-auto mx-0.5`}>
        <Entypo name="location-pin" size={18} color="black" />
      </View>
      <Text style={tw`text-lg`}>Saket, Delhi</Text>
      <View style={tw`my-auto mx-1`}>
        <AntDesign name="down" size={16} style={tw`text-gray-700`} />
      </View>
    </TouchableOpacity>
  );
};

export default LocationDropDown;

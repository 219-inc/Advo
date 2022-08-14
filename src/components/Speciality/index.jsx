import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native";

const index = ({title, icon}) => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.push('SummaryScreen', {title, icon});
  }

  return (
    <TouchableOpacity style={tw`w-1/2 px-1`} onPress={handlePress}>
      <View
        style={tw`rounded-lg bg-gray-100 py-4 flex flex-row justify-start my-2 h-20 items-center`}
      >
        <Image
          source={{
            uri: icon,
          }}
          style={tw`h-12 w-12 mx-3 my-auto`}
        />
        <Text lines={2} style={tw`font-semibold w-1/2 my-auto`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default index
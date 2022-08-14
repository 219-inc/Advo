import { View, Text } from 'react-native'
import tw from 'twrnc'

import { AntDesign } from "@expo/vector-icons";

const LawyerList = () => {
  return (
    <View>
      <View style={tw`flex flex-row justify-start items-center`}>
        <AntDesign name="select1" size={24} color="black" />
        <Text style={tw`font-semibold mx-2`}>
          Select from our top lawyers
        </Text>
      </View>
      <Text style={tw`text-sm text-gray-600`}>
        Select a lawyer on the next step.
      </Text>
    </View>
  );
}

export default LawyerList
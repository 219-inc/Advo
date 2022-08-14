import { View, Text } from 'react-native'
import tw from 'twrnc'

import { MaterialIcons } from "@expo/vector-icons";

const Pricing = () => {
    return (
      <View>
        <View style={tw`flex flex-row justify-start items-center`}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text style={tw`font-semibold mx-2`}>Pricing</Text>
        </View>
        <Text style={tw`text-gray-600 mt-1 mx-1`}>
          Every lawyer has there own consultation fees.
          {"\n"}
          Audio and video consultation have same price.
        </Text>
      </View>
    );
}

export default Pricing
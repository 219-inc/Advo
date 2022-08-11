import { View, Text, Image } from 'react-native'
import tw from 'twrnc'

import { Entypo } from '@expo/vector-icons';

const Listing = ({data}) => {
  return (
    <View style={tw`mx-3 rounded-lg h-56 mb-2`}>
      <Image 
        style={tw`w-64 h-36 rounded-t-lg`}
        source={{
          uri: data.image
        }}
      />
      <View style={tw`bg-gray-800 w-[100%] rounded-b-lg px-4 py-2`}>
        <Text style={tw`text-white text-lg font-semibold`}>{data.name}</Text>
        <Text style={tw`text-yellow-500 font-semibold text-sm`}>{data.experience} experience</Text>
        <View style={tw`flex flex-row -mx-1`}>
          <Entypo name="location-pin" size={24} style={tw`text-yellow-500`} />
          <Text style={tw`font-semibold text-white my-auto`}>{data.location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Listing
import { View, Text, Image, TouchableHighlight } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Listing = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight 
        style={tw`my-2 w-full rounded-lg px-2 py-2`} 
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.push('LawyersProfile', { name: data.name, image: data.image })}
    >
      <View style={tw`w-full flex flex-row`}>
        <Image 
          style={tw`w-16 h-24 rounded-lg`}
          source={{
              uri: data.image
          }}
        />
        <View style={tw`flex flex-row border-b border-gray-200 ml-2`}>
          <View style={tw`mx-2 my-auto pb-4 w-9/12`}>
            <Text style={tw`font-semibold text-xl`}>{data.name}</Text>
            <Text style={tw`font-semibold text-yellow-500`}>{data.experience} experience</Text>
            <View style={tw`flex flex-row -mx-1`}>
              <Entypo name="location-pin" size={24} style={tw`text-yellow-500`} />
              <Text style={tw`font-semibold my-auto`}>{data.location}</Text>
            </View>
          </View>
          <View style={tw`my-auto mx-2`}>
            <Entypo name="chevron-right" size={24} style={tw`text-gray-300`} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default Listing
import { View, Text, TouchableHighlight } from 'react-native'
import tw from 'twrnc'

import { Ionicons  } from '@expo/vector-icons';
import UserProfileIcon from 'component/UserProfileIcon';

const TopNav = () => {
  return (
    <View style={tw`flex flex-row justify-between px-6`}>
      <TouchableHighlight style={tw`rounded-full bg-gray-200 p-2`}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableHighlight>
      <View>
        <UserProfileIcon style={tw`h-10 w-10 rounded-full`}/>
      </View>
    </View>
  )
}

export default TopNav
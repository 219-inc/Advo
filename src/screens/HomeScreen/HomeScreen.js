import { View, Text } from 'react-native'
import tw from 'twrnc'

import MainTopNav from 'component/MainTopNav'

const HomeScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <MainTopNav />
    </View>
  )
}

export default HomeScreen
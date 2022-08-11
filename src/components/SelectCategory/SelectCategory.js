import { View, Text } from 'react-native'
import tw from 'twrnc'
import Categories from './Categories'

const SelectCategory = () => {
  return (
    <View style={tw`mt-4 px-2`}>
      <Text style={tw`font-semibold text-2xl`}>Select category</Text>
      <Categories />
    </View>
  )
}

export default SelectCategory
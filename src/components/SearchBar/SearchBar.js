import { View, Text, TextInput } from 'react-native'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={tw`mt-6 px-2 flex flex-row justify-between`}>
        <TextInput 
            placeholder='Search'
            style={tw`w-10/12 h-12 px-2 py-2 bg-gray-200 border-gray-300 rounded-lg`}
        />
        <View style={tw`bg-gray-800 items-center text-center w-12 rounded-lg`}>
            <Feather name="search" size={20} style={tw`mx-auto my-auto text-yellow-500`} />
        </View>
    </View>
  )
}

export default SearchBar
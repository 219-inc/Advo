import { View, Text, FlatList } from 'react-native'
import Languages from './Languages';

import tw from 'twrnc'
import { Ionicons } from "@expo/vector-icons";

const languages = ["English", "हिन्दी", "मराठी", "தமிழ்"];

const LanguageSelector = () => {
  return (
    <View>
      <View style={tw`flex flex-row justify-start items-center`}>
        <Ionicons name="language" size={24} color="black" />
        <Text style={tw`font-semibold mx-2`}>
          Choose your preffered language
        </Text>
      </View>
      <Text style={tw`text-sm text-gray-600 mx-1`}>
        We will try to find the lawyers who can speak the language
      </Text>
      <FlatList
        horizontal
        data={languages}
        renderItem={({ item }) => <Languages title={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={tw`mx-auto my-2`}
      />
    </View>
  );
}

export default LanguageSelector
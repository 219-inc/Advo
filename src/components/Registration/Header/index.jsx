import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

import { AntDesign } from "@expo/vector-icons";

const Header = ({title, description, page_title}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={tw`w-full flex flex-row py-4 bg-white z-10`}>
        <TouchableOpacity
          style={tw`p-1 rounded-lg border border-black flex items-center justify-center`}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw`rounded-lg my-2 px-1 py-1 bg-yellow-200 border border-yellow-300 max-w-32 items-center justify-center`}>
        <Text style={tw`text-sm text-yellow-700 font-semibold`}>{page_title}</Text>
      </View>
      <View style={tw`my-2`}>
        <Text style={tw`text-5xl font-bold`}>{title}</Text>
        <Text style={tw`text-lg text-gray-500 my-2`}>{description}</Text>
      </View>
    </View>
  );
};

export default Header;

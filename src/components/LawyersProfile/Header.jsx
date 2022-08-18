import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from 'twrnc'

import { AntDesign } from "@expo/vector-icons";

const Header = ({ name }) => {
  const { goBack } = useNavigation();
  return (
    <View style={tw`flex flex-row px-4 py-4 pb-2`}>
      <TouchableOpacity
        style={tw`flex flex-row justify-start items-center `}
        onPress={() => goBack()}
      >
        <AntDesign name="left" size={16} style={tw`text-yellow-600`} />
        <Text style={tw`text-yellow-600 font-semibold`}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, description, page_title }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={tw`w-full flex flex-row py-4 bg-white z-10`}>
        <TouchableOpacity
          style={tw`p-1 flex items-center justify-center`}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-col my-4 items-center`}>
        <Image source={require("assets/adaptive-icon.png")} style={tw`h-20`} />
        <Text style={tw`font-semibold text-3xl text-center`}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

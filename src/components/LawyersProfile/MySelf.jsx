import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const MySelf = (props) => {
  return (
    <View
      style={tw`mt-3 flex flex-row justify-between border-t-2 border-gray-100 pt-3`}
    >
      <TouchableOpacity>
        <Text style={tw` text-base text-gray-500`}>{props.title}</Text>
      </TouchableOpacity>
      <AntDesign name="right" size={20} style={tw` ml-1 text-blue-500  `} />
    </View>
  );
};

export default MySelf;

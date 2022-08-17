import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const Card = ({name, image}) => {
  return (
    <View style={tw`flex flex-row px-4 py-3 justify-start border-b-8 border-gray-100`}>
      <View>
        <Image
          style={tw`h-24 w-24 rounded-full`}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={tw`flex flex-col ml-4 w-9/12`}>
        <Text style={tw`text-xl font-semibold`}>{name}</Text>
        <Text>Martial Lawyer</Text>
        <Text style={tw`my-0.5`}>B.Tech LLB - IIT Madras (Chennai)</Text>
        <Text style={tw`font-semibold my-0.5`}>
            12 Years experience overall
        </Text>
        <View style={tw`flex flex-row w-full justify-start`}>
            <View style={tw`flex flex-row justify-start items-center`}>
                <AntDesign name="star" size={16} style={tw`text-yellow-600`} />
                <Text style={tw`text-yellow-600 font-semibold mx-1`}>4.5</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

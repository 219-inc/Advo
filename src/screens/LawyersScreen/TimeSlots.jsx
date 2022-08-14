import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import DateSelector from "component/TimeSlots/DateSelector";
import SlotList from "component/TimeSlots/SlotList";

const TimeSlots = ({route}) => {

  const { type, advocateDetails } = route.params
  const [color, setColor] = useState(type == "video" ? "#7C3AED" : "#2563EB");
  const navigation = useNavigation();

  const Header = ({ advocateDetails }) => (
    <View
      style={{
        backgroundColor: "#1F2937",
        ...tw`flex flex-row justify-start px-4 px-4 pb-2 h-16`,
      }}
    >
      <StatusBar animated={true} backgroundColor={"#1F2937"} hidden={false} />
      <TouchableOpacity
        style={tw`flex flex-row justify-start items-center mt-3`}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} style={tw`text-yellow-600`} />
      </TouchableOpacity>
      <View style={tw`flex flex-row text-center items-center`}>
        <Image
          source={{
            uri: advocateDetails.image,
          }}
          style={tw`w-10 h-10 rounded-full mt-3 mx-2 ml-3`}
        />
        <View style={tw`flex flex-col mx-1 mt-2`}>
          <Text style={tw`text-yellow-600 font-semibold text-lg`}>
            {advocateDetails.name}
          </Text>
          <Text style={tw`text-gray-400 flex flex-row items-center`}>
            {advocateDetails.location}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`bg-white h-full`}>
      <Header advocateDetails={advocateDetails} />
      <View
        style={tw`flex flex-row justify-start px-4 py-4 border-b-8 border-gray-100`}
      >
        {type == "video" ? (
          <AntDesign
            name="videocamera"
            size={16}
            style={tw`mr-2 my-auto`}
            color={color}
          />
        ) : (
          <FontAwesome
            name="building-o"
            size={16}
            style={tw`mr-2 my-auto`}
            color={color}
          />
        )}
        <Text style={tw`text-gray-600 font-semibold text-lg`}>
          {type.charAt(0).toUpperCase() + type.slice(1)} consultation slots
        </Text>
      </View>
      <View style={tw`border-b-8 border-gray-100 bg-gray-100 px-5 py-3`}>
        <DateSelector color={color} />
      </View>
      <View>
        <SlotList color={color} />
      </View>
    </View>
  );
}

export default TimeSlots
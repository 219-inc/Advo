import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import TitleBar from "component/Summary/TitleBar";
import LanguageSelector from "component/Summary/LanguageSelector";
import LawyerList from "component/Summary/LawyerList";
import DataPrivacy from "component/Summary/DataPrivacy";
import Pricing from "component/Summary/Pricing";

const SummaryScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-full pt-4 px-4`}>
      <View style={tw`mb-3 flex flex-row`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-start items-center`}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={16} style={tw`text-yellow-600`} />
          <Text style={tw`text-yellow-600 font-semibold`}>Back</Text>
        </TouchableOpacity>
        <View style={tw`mx-auto`}>
          <Text style={tw`-ml-10 font-semibold text-lg`}>Summary</Text>
        </View>
      </View>
      <TitleBar title={route.params.title} icon={route.params.icon} />
      <View style={tw`w-full h-0.5 bg-gray-100 my-4`}></View>
      <LawyerList />
      <View style={tw`w-full h-0.5 bg-gray-100 my-4`}></View>
      <LanguageSelector />
      <View style={tw`w-full h-0.5 bg-gray-100 my-4`}></View>
      <Pricing />
      <View style={tw`w-full h-0.5 bg-gray-100 my-4`}></View>
      <DataPrivacy />
      <TouchableOpacity
        onPress={() =>
          navigation.push("LawyersList", { title: route.params.title })
        }
        style={tw`w-full bg-yellow-500 text-white font-semibold rounded-lg text-center items-center px-4 py-3 absolute bottom-4 left-4`}
      >
        <Text style={tw`font-semibold text-white text-lg`}>
          Continue in English
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SummaryScreen;

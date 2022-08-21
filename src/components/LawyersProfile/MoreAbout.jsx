import React from "react";
import { Text, View ,ScrollView} from "react-native";
import tw from "twrnc";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  Octicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Comment from "./Comment";

const MoreAbout = () => {
  return (
    <View style={tw` mt-10 `}>
      <ScrollView>
        <View style={tw`mx-4`}>
          <View style={tw`border-b-2 border-gray-100`}>
            <Text style={tw`text-2xl text-gray-800 font-bold `}>
              Patient Stories
            </Text>
            <Text style={tw`text-gray-700 text-sm mb-1 pb-1`}>
              These stories represent patient opinions and experiences. They do
              not reflect the doctor's medical Capabilites.
            </Text>
          </View>
          <View style={tw`flex flex-row mt-3 items-center`}>
            <View style={tw` flex flex-row mr-4`}>
              <FontAwesome
                style={tw`text-green-600 `}
                name="thumbs-up"
                size={30}
              />
              <Text style={tw`text-2xl `}> 98%</Text>
            </View>
            <View>
              <Text style={tw` text-base `}>
                Out of 224 patients who were surveyed,98% of them recommend
                visiting the doctor.
              </Text>
            </View>
          </View>
        </View>
        {/* <Patient /> */}
        <Comment/>
      </ScrollView>
    </View>
  );
};

export default MoreAbout;

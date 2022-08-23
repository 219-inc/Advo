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

const ClientStories = () => {
  return (
    <View style={tw` mt-10 `}>
      <ScrollView>
        <View style={tw`mx-4  border-b-2 border-gray-100 pb-2`}>
          <View style={tw`border-b-2 border-gray-100`}>
            <Text style={tw`text-2xl text-gray-800 font-bold `}>
              Clients Stories
            </Text>
            <Text style={tw`text-gray-700 text-sm mb-1 pb-1`}>
              These stories represent clients opinions and experiences. They do
              not reflect the Laywers Capabilites.
            </Text>
          </View>
          <View style={tw`flex flex-row mt-3 items-center`}>
            <View style={tw` flex flex-row mr-4`}>
              <FontAwesome
                style={tw`text-green-600 `}
                name="thumbs-up"
                size={30}
              />
              <Text style={tw`text-2xl border-r-2 pr-2 border-gray-100`}>
                {" "}
                98%
              </Text>
            </View>
            <View>
              <Text style={tw` text-base `}>
                Out of 224 clients who were surveyed ,98% of them recommend
                visiting the Lawyer.
              </Text>
            </View>
          </View>
        </View>
        {/* <Patient /> */}
        <Comment />
      </ScrollView>
    </View>
  );
};

export default ClientStories;

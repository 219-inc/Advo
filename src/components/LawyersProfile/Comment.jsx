import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

function Comment() {
  return (
    <View style={tw`pb-4`}>
      <View style={tw`flex flex-row mt-3`}>
        <View style={tw``}>
          <Image
            style={tw`ml-4 h-12 w-12 p-4 rounded-full`}
            source={{
              uri: "https://www.parkaman.com/wp-content/uploads/2018/08/How-to-Become-a-Corporate-Lawyer.jpg",
            }}
          />
        </View>
        <View style={tw`ml-4`}>
          <Text style={tw` font-semibold text-lg`}> Verified People</Text>
          <Text style={tw`text-gray-400`}> 1 month ago</Text>
        </View>
      </View>
      <View style={tw`mx-4`}>
        <Text style={tw`text-xl text-gray-900 mt-3`}>Hired for Murder</Text>
        <Text style={tw`text-gray-600 text-base`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          vitae corrupti veritatis quibusdam accusantium facilis. Autem nemo
          eligendi odit hic .
        </Text>
      </View>
      <View style={tw`flex flex-row mx-4 mt-3 `}>
        <TouchableOpacity
          style={tw`border-2 px-6 pt-1 pb-1 rounded-lg mx-auto border-gray-500`}
        >
          <Text style={tw`text-base text-gray-800`}>Share Your Story </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`border-2 px-6 pt-1 pb-1 rounded-lg mx-auto border-gray-500`}
        >
          <Text style={tw`text-base text-gray-800`}>Read All Stories </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Comment;

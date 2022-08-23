import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";
import QuestionAnswer from "./QuestionAnswer";

const MoreAbout = () => {
  const features = [];
  return (
    <View style={tw`mx-4 pb-3 border-b-2 border-gray-100`}>
      <View>
        <Text
          style={tw`text-xl font-semibold text-gray-700 border-b-2 border-gray-100 pb-3 mt-3`}
        >
          Services by Dr.Simran Kataria
        </Text>
      </View>
      <View>
        <FlatList
          data={[
            { key: "Dental Filling" },
            { key: "Dental Implant Fixing" },
            { key: "Implant Rehabilitation" },
            { key: "pedodontics" },
            { key: "Zirconia" },
          ]}
          renderItem={({ item }) => (
            <Text style={tw`text-base text-gray-700 font-semibold`}>
              {item.key}
            </Text>
          )}
        />
      </View>
      <View style={tw`border-t-2 border-b-2 border-gray-100 mt-3 `}>
        <TouchableOpacity style={tw`  pt-1 pb-1 rounded-lg  `}>
          <Text
            style={tw`text-base text-gray-800 my-2 text-blue-500 font-bold`}
          >
            Show all services
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={tw``}>
          <TouchableOpacity>
            <Text style={tw`text-base font-bold text-blue-500 my-4`}>
              QnA answered by Dr.Simran Kataria
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Articles Written by Dr.Simran Kataria</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <QuestionAnswer /> */}
      <View>
        <Text style={tw`text-xl`}>More about Adv. Ananya </Text>
      </View>
      <View>
        <Text style={tw`text-base text-gray-700 font-semibold`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere
          deserunt nostrum cupiditate.
        </Text>
      </View>
    </View>
  );
};

export default MoreAbout;

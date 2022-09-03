import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";
 
import {
  AntDesign,
} from "@expo/vector-icons";
import MySelf from "./MySelf";

const MoreAbout = () => {
  
   
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
      <View style={tw`border-t-2 border-gray-100 mt-3 `}>
        <TouchableOpacity style={tw`  pt-1 pb-1 rounded-lg  `}>
          <Text
            style={{ color:'#24a0ed',...tw`text-base text-gray-800 my-2 font-bold`}}
          >
            Show all services
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`border-b-8 border-gray-100 -mx-4`}></View>
      <View style={tw``}>
        <View style={tw`flex flex-row `}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#24a0ed",
                ...tw`text-base font-bold  my-4`,
              }}
            >
              QnA answered by Dr.Simran Kataria
            </Text>
          </TouchableOpacity>
          <AntDesign
            name="right"
            size={25}
            style={tw` ml-1 text-blue-500 my-4 `}
          />
        </View>
        <View style={tw`border-b-8 border-gray-100 -mx-4`}></View>
        <View style={tw`flex flex-row`}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#24a0ed",
                ...tw`text-base font-bold  my-4`,
              }}
            >
              Articles written by Dr. Simran Kataria
            </Text>
          </TouchableOpacity>
          <AntDesign
            name="right"
            size={25}
            style={tw` ml-1 text-blue-500 my-4 `}
          />
        </View>
        <View style={tw`border-b-8 border-gray-100 -mx-4`}></View>
      </View>
      {/* <QuestionAnswer /> */}
      <View style={tw`border-b-2 border-gray-100 pb-3`}>
        <Text style={tw`text-xl font-semibold text-gray-800 mt-3`}>
          More about Adv. Ananya
        </Text>
      </View>
      <View></View>
      <View>
        <Text style={tw`text-base text-gray-500 font-semibold mt-3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere
          deserunt nostrum cupiditate.
        </Text>
      </View>
      <View>
        <MySelf title={"Specializations"} />
        <MySelf title={"Education"} />
        <MySelf title={"Experience"} />
        <MySelf title={"Awards and Recognition"} />
        <MySelf title={"Memberships"} />
        <MySelf title={"Registration"} />
      </View>
    </View>
  );
};

export default MoreAbout;

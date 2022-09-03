import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";
import Paid from "./Paid";
import Free from "./Free";

const Consultation = () => {
  return (
    <View style={tw`bg-gray-700 h-full`}>
      <View style={tw`flex flex-row ml-3 mt-3`}>
        <MaterialIcons name="arrow-back" style={tw`text-slate-50`} size={30} />
        <Text style={tw`text-slate-50 text-xl ml-3 font-semibold`}>
          Online Consultation
        </Text>
      </View>

      <View style={tw`w-full  flex flex-row `}>
        <TouchableOpacity style={tw`w-1/2 `}>
          <Text
            style={tw`text-sm text-slate-50 pb-3 text-center border-b-4 border-black font-bold pl-2 mt-2`}
          >
            Paid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-1/2 `}>
          <Text
            style={tw`text-sm text-slate-50 pb-3 text-center border-b-4 border-black font-bold pl-2 mt-2`}
          >
            Free
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        {/* {<Paid />?<Paid />:<Free />} */}
      </View>
    </View>
  );
};

export default Consultation;

import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";

const Appointments = () => {
  return (
    <View style={tw`bg-gray-700 h-full`}>
      <View style={tw`flex flex-row ml-3 mt-3`}>
        <MaterialIcons name="arrow-back" style={tw`text-slate-50`} size={30} />
        <Text style={tw`text-slate-50 text-xl ml-3 font-semibold`}>My Bookings </Text>
      </View>

      <View style={tw`w-1/3.65`}>
        <Text style={tw`text-sm text-slate-50 border-b-4 border-black font-bold pl-2 mt-2`}>
          Appointments
        </Text>
      </View>
      <View  style={tw`mb-3`}>
          <Text style={tw`text-slate-50 text-center mt-3 font-bold text-base`}>You haven't booked any appointment yet</Text>
          <Text style={tw`text-slate-50 text-center mt-3`}>Start by looking for doctors near you,read ptient stories and book appointment</Text>
      </View>
      <View style={tw`ml-3`}>
        <Text style={tw`text-slate-50`}>Can't find your appointment here?</Text>
        <Text style={tw`text-slate-50 font-semibold underline`}>Live Chat Support</Text>
      </View>
      <Button text="Book Now" />
      
    </View>
  );
};

export default Appointments;

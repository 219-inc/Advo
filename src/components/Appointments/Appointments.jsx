import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";

const Appointments = () => {
  const { goBack } = useNavigation();
  return (
    <View style={tw` h-full`}>
      <View style={tw`flex flex-row bg-gray-800 pl-3 pb-3 pt-3`}>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialIcons
            name="arrow-back"
            style={tw`text-slate-50`}
            size={30}

          />
        </TouchableOpacity>
        <Text style={tw`text-xl ml-3 font-semibold text-slate-50`}>
          My Bookings
        </Text>
      </View>

      <View style={tw`w-1/3.65`}>
        <Text
          style={tw`text-sm pb-1 border-b-4 border-yellow-600 font-bold pl-2 mt-2`}
        >
          Appointments
        </Text>
      </View>
      <View style={tw`mb-3`}>
        <Text style={tw` text-center mt-3 font-bold text-base`}>
          You haven't booked any appointment yet
        </Text>
        <Text style={tw` text-center mt-3`}>
          Start by looking for doctors near you,read patient stories and book
          appointment
        </Text>
      </View>
      <View style={tw`ml-3`}>
        <Text style={tw``}>Can't find your appointment here?</Text>
        <Text style={tw`font-semibold underline`}>
          Live Chat Support
        </Text>
      </View>
      <Button text="Book Now" />
    </View>
  );
};

export default Appointments;

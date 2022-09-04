import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";

import { Ionicons } from "@expo/vector-icons";
const OTP = () => {
  return (
    <View style={tw`py-18 px-3 bg-white h-full`}>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <View style={tw`flex flex-row`}>
        <Ionicons name="phone-portrait-outline" size={24} color="black" />
      </View>
      <Text style={tw`font-semibold text-3xl tracking-normal mt-2`}>
        Phone Verification
      </Text>
      <Text style={tw`text-gray-400 px-1 my-2`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi
        id, quas, quia, voluptates quibusdam voluptas quod voluptate quidem
        quos.
      </Text>
      <View
        style={tw`px-1.5 mt-6 flex flex-row bg-gray-200 rounded-lg px-4 items-center justify-start`}
      >
        <Text style={tw`text-neutral-400 font-semibold mr-1`}>+91</Text>
        <TextInput placeholder="Phone Number" style={tw`w-80 py-3`} />
      </View>
      <View style={tw`absolute bottom-6 left-3 w-full`}>
        <TouchableOpacity
          style={tw`py-4 text-center items-center justify-center bg-yellow-500 w-full rounded-lg`}
        >
          <Text style={tw`text-white`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTP;

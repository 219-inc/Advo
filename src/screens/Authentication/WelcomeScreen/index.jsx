import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`h-full bg-gray-800 pt-8 px-4`}>
      {/* <StatusBar barStyle="dark-content" backgroundColor={"#eab308"} /> */}
      <Image 
        source={require("assets/images/lawyer_welcome.png")}
        style={tw`w-90 h-80 mx-auto`}
      />
      <Text style={tw`text-5xl font-bold text-white my-3`}>
        Consult lawyers online
      </Text>
      <Text style={tw`text-lg text-gray-300`}>
        Connect with top legal experts in your area, get answers to your
        questions, connect with the professionals who can help you when it
        matters the most.
      </Text>
      <View style={tw`absolute bottom-10 px-5 left-3 w-full`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={tw`rounded-xl py-4 px-4 items-center justify-center bg-yellow-500 w-full`}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

import { useState } from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import tw from "twrnc";

import { AntDesign } from "@expo/vector-icons";

const ContinueButton = ({ onPress, disabled }) => {
  const [loading, setLoading] = useState(false);

  function continueOnPress(callback) {
    setLoading(true);
    callback();
    setLoading(false);
  }

  return (
    <TouchableOpacity
      style={tw`absolute bottom-5 left-6 w-85 py-4 rounded-xl bg-yellow-600 text-center ${
        disabled ? "bg-white border border-black" : ""
      }`}
      onPress={() => continueOnPress(onPress)}
      disabled={disabled}
    >
      {!loading ? (
        <View style={tw`items-center justify-center flex flex-row`}>
          <Text
            style={tw`font-semibold text-lg text-white mr-1 ${
              disabled ? "text-black" : ""
            }`}
          >
            Continue
          </Text>
          <AntDesign
            name="right"
            size={20}
            color={disabled ? "black" : "white"}
            style={tw`my-auto`}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator
            size="small"
            color={disabled ? "black" : "white"}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ContinueButton;

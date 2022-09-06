import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";
import tw from "twrnc";

const OtpScreen = ({ route }) => {
  const { user } = route.params;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitOtp = async (data) => {
    if (isLoading) return;
    setIsLoading(true);
    setIsButtonDisabled(true);

    let { otp } = data;

    await Auth.sendCustomChallengeAnswer(user, otp)
      .then(async () => {
        try {
          ToastAndroid.show("Welcome Back", ToastAndroid.SHORT);
        } catch (e) {
          console.log(e);
          alert("An error occured! Please try again later.");
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <View style={tw`pt-20 px-4 bg-gray-800 h-full`}>
      <Text style={tw`font-semibold text-xl text-white mb-4`}>Enter OTP</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={tw`bg-gray-600 py-3 px-4 rounded-lg border border-gray-500 text-gray-100`}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="OTP"
            maxLength={6}
            minLength={6}
          />
        )}
        name="otp"
      />
      {errors.otp && <Text>This is required.</Text>}

      <TouchableOpacity
        style={tw`bg-yellow-600 py-4 px-4 rounded-lg mt-4 flex justify-center disabled:opacity-50`}
        activeOpacity={0.7}
        onPress={handleSubmit(submitOtp)}
        disabled={isButtonDisabled}
      >
        <Text style={tw`text-center text-white font-semibold`}>
          {isLoading ? "Loading..." : "Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

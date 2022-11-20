import { useState, useEffect } from "react";
import { View, Text, ToastAndroid } from "react-native";
import tw from "twrnc";
import { useForm, Controller } from "react-hook-form";
import Auth from "functions/auth";
import { useNavigation } from "@react-navigation/native";

import Header from "component/Registration/Header";
import ContinueButton from "component/Registration/ContinueButton";
import Input from "component/Registration/Input";

const OTP = ({ route }) => {
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const { user } = route.params;

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let otp = watch("otp");

  useEffect(() => {
    if (otp && otp.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [otp]);

  async function onOtpSubmit({ otp }) {
    if (isLoading) return;
    setIsLoading(true);
    setDisabled(true);

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
  }

  return (
    <View style={tw`h-full bg-white pt-10 px-4`}>
      <Header
        page_title="Phone Verification"
        title={"Verify your phone number"}
        description={"Please enter the otp sent to your number to verify."}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={"OTP"}
            name={"otp"}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            maxLength={6}
            minLength={6}
          />
        )}
        name="otp"
      />
      {errors.otp && (
        <View
          style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
        >
          <Text style={tw`text-sm text-red-700 font-semibold`}>
            OTP is required
          </Text>
        </View>
      )}
      <ContinueButton disabled={disabled} onPress={handleSubmit(onOtpSubmit)} />
    </View>
  );
};

export default OTP;

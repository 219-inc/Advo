import { useState, useContext, useEffect } from "react";
import { View, Text, Alert, Platform, NativeEventEmitter } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import Auth from "functions/auth";

import Header from "component/Registration/Header";
import ContinueButton from "component/Registration/ContinueButton";
import Input from "component/Registration/Input";

import UserContext from "context/User";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const emitter = new NativeEventEmitter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let email_address = watch("email_address");

  useEffect(() => {
    if (email_address && email_address.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email_address]);

  const onSignInPressed = async ({ email_address }) => {
    if (isLoading) return;
    setIsLoading(true);
    setDisabled(true);

    try {
      const user = await Auth.login(`${email_address}`, "newPass");
      //navigation.navigate("OTP", { user });
    } catch (err) {
      if (err.message == "User does not exist.") {
        setUser({ email_address });
        navigation.navigate("RegisterUser");
      } else {
        Alert.alert("Error", err.message);
      }
    }

    setIsLoading(false);
    setDisabled(false);
  };

  return (
    <View style={tw`h-full bg-white pt-10 px-4`}>
      <Header
        page_title="Sign In"
        title={"Welcome back"}
        description={"Please enter your email address to continue."}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={"Email Address"}
            name={"email_address"}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
        name="email_address"
      />
      {errors.email_address && (
        <View
          style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
        >
          <Text style={tw`text-sm text-red-700 font-semibold`}>
            Email is required
          </Text>
        </View>
      )}
      <ContinueButton
        disabled={disabled}
        onPress={handleSubmit(onSignInPressed)}
      />
    </View>
  );
};

export default Login;

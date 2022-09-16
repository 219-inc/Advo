import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  Platform
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";


import Header from "component/Registration/Header";
import ContinueButton from "component/Registration/ContinueButton";
import Input from "component/Registration/Input";

import UserContext from "context/User";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let phone_number = watch("phone_number");

  useEffect(() => {
    if (phone_number && phone_number.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone_number]);

  const onSignInPressed = async ({ phone_number }) => {
    if (isLoading) return;
    setIsLoading(true);
    setDisabled(true);

    try {
      const user = await Auth.signIn(`+91${phone_number}`, '(Div21902)');
      //navigation.navigate("OTP", { user });
    } catch (err) {
      if (err.message == "User does not exist.") {
        setUser({ phone_number });
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
        description={"Please enter your phone number to continue."}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={"Phone Number"}
            name={"phone_number"}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
            maxLength={10}
            minLength={10}
          />
        )}
        name="phone_number"
      />
      {errors.phone_number && (
        <View
          style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
        >
          <Text style={tw`text-sm text-red-700 font-semibold`}>
            Phone Number is required
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

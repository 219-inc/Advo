import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import Auth from "functions/auth";
import useAxiosPrivate from "hooks/useAxiosPrivate";

import Header from "component/Registration/Header";
import ContinueButton from "component/Registration/ContinueButton";
import Input from "component/Registration/Input";

import UserContext from "context/User";
import SocialLogin from "../../../components/SocialLogin";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);

  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let email_address = watch("email_address");
  let password = watch("password");

  useEffect(() => {
    if (email_address && email_address.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (password && password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email_address, password]);

  const onSignInPressed = async ({ email_address }) => {
    if (isLoading) return;
    setIsLoading(true);
    setDisabled(true);

    try {
      const { errors: loginError } = await Auth.login(
        `${email_address}`,
        `${password}`
      );
      //navigation.navigate("OTP", { user });
      if (loginError) {
        setError(loginError);
        setIsLoading(false);
        setDisabled(false);
      }
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={tw`h-full`}>
            <Header title={"Login to Your Account"} />
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
                  icon="mail"
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
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder={"Password"}
                  name={"password"}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  icon="lock"
                  secureTextEntry={true}
                />
              )}
              name="password"
            />
            {errors.password && (
              <View
                style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
              >
                <Text style={tw`text-sm text-red-700 font-semibold`}>
                  Password is required
                </Text>
              </View>
            )}
            {error && (
              <View
                style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
              >
                <Text style={tw`text-sm text-red-700 font-semibold`}>
                  {error.message}
                </Text>
              </View>
            )}
            <View style={tw`w-full my-4 flex flex-col`}>
              <Text style={tw`text-yellow-600 font-semibold text-center`}>
                Forgot Password?{" "}
              </Text>
              <View style={{ flexDirection: "row" }}>
                {/* line */}
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    alignSelf: "center",
                    ...tw`bg-gray-300`,
                  }}
                />
                <Text style={tw`text-gray-500 my-6 mx-4 text-center`}>
                  or Continue with{" "}
                </Text>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    alignSelf: "center",
                    ...tw`bg-gray-300`,
                  }}
                />
              </View>
              <SocialLogin orientation={"row"} />
              <Text style={tw`text-gray-600 my-6 text-center`}>
                Don't have an account?{" "}
                <Text
                  style={tw`text-yellow-600 font-semibold`}
                  onPress={() => navigation.navigate("Register")}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
            <ContinueButton
              disabled={disabled}
              onPress={handleSubmit(onSignInPressed)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    justifyContent: "space-around",
    ...tw`h-full bg-white pt-10 px-4`,
  },
});

export default Login;

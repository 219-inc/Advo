import { View, Text } from "react-native";
import { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { useForm, Controller } from "react-hook-form";

import UserContext from "context/User";

import Header from "component/Registration/Header";
import ContinueButton from "component/Registration/ContinueButton";
import Input from "component/Registration/Input";
import Paginator from "component/Registration/Paginator";

const Email = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);

  const { phone_number, name } = user;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let email = watch("email");

  useEffect(() => {
    if (email && email.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);

  async function onContinuePressed({ email }) {
    setUser({ phone_number, name, email });
  }

  return (
    <View style={tw`h-full bg-white pt-10 px-4`}>
      <Header
        page_title={`Hi ${name.split(" ")[0]}`}
        title={"What's your E-Mail address?"}
        description={
          "Please type your email. We will send you notifications and updates."
        }
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={"E-Mail"}
            name={"email"}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
        name="email"
      />
      {errors.email && (
        <View
          style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
        >
          <Text style={tw`text-sm text-red-700 font-semibold`}>
            {errors.email.message ? errors.email.message : "E-Mail address is required"}
          </Text>
        </View>
      )}
      <Paginator selected={2} total_steps={[1, 2, 3]} />
      <ContinueButton
        disabled={disabled}
        onPress={handleSubmit(onContinuePressed)}
      />
    </View>
  );
};

export default Email;

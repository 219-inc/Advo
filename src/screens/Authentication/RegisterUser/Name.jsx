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

const Name = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);

  const { phone_number } = user;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  let name = watch("name");

  useEffect(() => {
    if (name && name.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);

  async function onContinuePressed({ name }) {
    setUser({ phone_number, name });
    navigation.navigate("Email");
  }

  return (
    <View style={tw`h-full bg-white pt-10 px-4`}>
      <Header
        page_title="Create Account"
        title={"What can we call you?"}
        description={"Please type your name to get started."}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={"Name"}
            name={"name"}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
        name="name"
      />
      {errors.name && (
        <View
          style={tw`rounded-lg my-1 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
        >
          <Text style={tw`text-sm text-red-700 font-semibold`}>
            Name is required
          </Text>
        </View>
      )}
      <Paginator selected={1} total_steps={[1,2,3]} />
      <ContinueButton
        disabled={disabled}
        onPress={handleSubmit(onContinuePressed)}
      />
    </View>
  );
};

export default Name;

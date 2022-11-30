import { View, TextInput, Text } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

const Input = ({
  placeholder,
  value,
  onBlur,
  onChange,
  name,
  keyboardType,
  maxLength,
  minLength,
  icon,
  secureTextEntry,
}) => {
  return (
    <View style={tw`my-2 flex flex-row bg-gray-100 rounded-xl items-center`}>
      <MaterialIcons name={icon} size={24} style={tw`mx-4 text-gray-400`} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        name={name}
        keyboardType={keyboardType}
        maxLength={maxLength}
        minLength={minLength}
        style={tw`py-4 w-full`}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

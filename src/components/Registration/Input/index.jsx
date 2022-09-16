import { View, TextInput, Text } from 'react-native'
import tw from 'twrnc'

const Input = ({ placeholder, value, onBlur, onChange, name, keyboardType, maxLength, minLength }) => {
  return (
    <View style={tw`my-4`}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        name={name}
        keyboardType={keyboardType}
        maxLength={maxLength}
        minLength={minLength}
        style={tw`border border-black rounded-xl py-4 px-4 w-full`}
      />
    </View>
  );
};

export default Input
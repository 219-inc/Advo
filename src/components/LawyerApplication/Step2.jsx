import { View, Text, Image, TextInput } from "react-native";
import tw from "twrnc";
import { Controller } from "react-hook-form";

const Step2 = ({control, errors}) => {
  return (
    <View>
      <View
        style={tw`bg-white mx-3 my-4 rounded-lg shadow-md flex px-4 py-4`}
      >
        <Text style={tw`text-lg font-semibold mb-3`}>Lawyer Registration</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Registration Number"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"registration_number"}
            />
          )}
          name={"registration_number"}
        />
        {errors.registration_number && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Registration Number is required
            </Text>
          </View>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Registration Council"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"registration_council"}
            />
          )}
          name={"registration_council"}
        />
        {errors.registration_council && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Registration Council is required
            </Text>
          </View>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Registration Year"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="numeric"
              name={"registration_year"}
            />
          )}
          name={"registration_year"}
        />
        {errors.registration_year && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Registration Year is required
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Step2;

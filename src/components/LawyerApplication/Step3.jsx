import { useContext } from "react";
import { View, Text, Image, TextInput } from "react-native";
import tw from "twrnc";
import { Controller } from "react-hook-form";

const Step3 = ({control, errors}) => {
  return (
    <View>
      <View style={tw`bg-white mx-3 my-4 rounded-lg shadow-md flex p-4`}>
        <Text style={tw`text-lg font-semibold`}>Education Qualification</Text>
        <Text style={tw`text-gray-700 font-semibold mb-3`}>
          Please enter your base level qualification
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Degree"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"degree"}
            />
          )}
          name={"degree"}
        />
        {errors.degree && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Degree is required
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
              placeholder="College/Institute"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"institution"}
            />
          )}
          name={"institution"}
        />
        {errors.institution && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              College/Institute is required
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
              placeholder="Year of completion"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyBoardType={"numeric"}
              name={"year_of_completion"}
            />
          )}
          name={"year_of_completion"}
        />
        {errors.year_of_completion && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Year of Completion is required
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
              placeholder="Years of experience"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyBoardType={"numeric"}
              name={"years_of_experience"}
            />
          )}
          name={"years_of_experience"}
        />
        {errors.years_of_experience && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Years of Experience is required
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Step3;

import { useContext } from "react";
import { View, Text, Image, TextInput } from "react-native";
import tw from "twrnc";
import { Controller } from "react-hook-form";

import UserContext from "context/User";

const Step1 = ({ control, errors }) => {

  const { user } = useContext(UserContext);

  return (
    <View>
      <View
        style={tw`bg-white h-24 mx-3 my-4 rounded-lg shadow-md flex flex-row px-4`}
      >
        <View style={tw`w-1/4 rounded-l-lg`}>
          <Image
            style={tw`h-20 w-20 rounded-full mx-auto my-auto`}
            source={{
              uri: "https://scontent.cdninstagram.com/v/t51.2885-19/300785011_1478582582659712_62925286134686875_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=My_9AyBNQJMAX8quRXt&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT9-sgPMn8uT6OkNLo1zXKLofcBRsvnYPUcNo4N_f498OA&oe=632B241B&_nc_sid=978cb9",
            }}
          />
        </View>
        <View style={tw`w-3/4 flex flex-col justify-center mx-3`}>
          <Text style={tw`text-lg font-semibold`}>{user?.name}</Text>
          <Text style={tw`text-sm text-gray-400`}>{user?.email}</Text>
          <Text style={tw`text-sm text-gray-400`}>{user?.phone}</Text>
        </View>
      </View>
      <View style={tw`bg-white mx-3 my-4 rounded-lg shadow-md flex px-4 py-3`}>
        <Text style={tw`text-lg font-semibold mb-3`}>Personal Information</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Your City"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"city"}
            />
          )}
          name={"city"}
        />
        {errors.city && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              City is required
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
              placeholder="Your Gender"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"gender"}
            />
          )}
          name={"gender"}
        />
        {errors.gender && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Gender is required
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
              placeholder="Your specialization"
              style={tw`py-3 px-4 bg-gray-200 rounded mb-3`}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              name={"specialization"}
            />
          )}
          name={"specialization"}
        />
        {errors.specialization && (
          <View
            style={tw`rounded-lg mb-2 px-1 py-2 bg-red-200 border border-red-300 items-center justify-center`}
          >
            <Text style={tw`text-sm text-red-700 font-semibold`}>
              Specialization is required
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Step1;

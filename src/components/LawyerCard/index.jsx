import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons";

const index = ({name, category, experience, rating, location, image}) => {

  const {push: navigationPush} = useNavigation();

  const handleBook = (type, advocateDetails) => {
    navigationPush("TimeSlots", { type, advocateDetails });
  };

  return (
    <TouchableHighlight
      style={tw`border-b-8 border-gray-100 px-4 py-4`}
      onPress={() => navigationPush("LawyersProfile", { name, category, experience, rating, location, image })}
      underlayColor={"#f6f6f6"}
    >
      <View style={tw`flex flex-col `}>
        <View style={tw`flex flex-row`}>
          <Image
            source={{
              uri: image,
            }}
            style={tw`h-24 w-24 my-auto rounded-full`}
          />
          <View style={tw`flex flex-col ml-4 w-9/12`}>
            <Text style={tw`text-xl font-semibold`}>{name}</Text>
            <Octicons
              name="verified"
              size={20}
              style={tw`absolute right-5 top-1`}
            />

            <Text style={tw`text-gray-600 flex flex-row items-center`}>
              {category} Lawyer
            </Text>
            <Text>{experience} experience overall</Text>
            <View style={tw`flex flex-row items-center mt-1`}>
              <AntDesign name="star" size={18} style={tw`text-yellow-500`} />
              <Text style={tw`mx-1`}>{rating}</Text>
            </View>
          </View>
        </View>
        <View style={tw`border-t border-gray-200 mt-4`}>
          <Text style={tw`font-semibold`}>{location}</Text>
          <View style={tw`flex flex-row`}>
            <Text style={tw`font-semibold`}>~ ₹1000 </Text>
            <Text>Consultation Fees</Text>
          </View>
          <Text style={tw`text-yellow-600 font-semibold text-xs my-2`}>
            NEXT AVAILABLE AT
          </Text>

          <View style={tw`flex flex-row`}>
            <View style={tw`w-1/2 flex flex-row`}>
              <AntDesign
                name="videocamera"
                size={16}
                style={tw`text-gray-600`}
              />
              <Text style={tw`font-semibold text-gray-600 text-xs ml-1`}>
                10:00 AM, tomorrow
              </Text>
            </View>
            <View style={tw`flex flex-row mx-2`}>
              <FontAwesome
                name="building-o"
                size={16}
                style={tw`text-gray-600`}
              />
              <Text style={tw`ml-1 font-semibold text-xs text-gray-600`}>
                10:30 AM, 15 Aug
              </Text>
            </View>
          </View>

          <View style={tw`flex flex-row mt-3`}>
            <TouchableOpacity
              style={tw`text-center items-center rounded bg-purple-600 px-4 py-3 w-1/2 mr-1`}
              onPress={() => handleBook("video", { name, image, location })}
            >
              <Text style={tw`font-semibold text-white`}>
                Book Video Consult
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`text-center items-center rounded bg-blue-600 px-4 py-3 w-1/2 ml-1`}
              onPress={() => handleBook("office", { name, image, location })}
            >
              <Text style={tw`font-semibold text-white`}>
                Book Office Visit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default index
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'

const OfficeDetails = () => {
  return (
    <View style={tw`border-b-8 border-gray-100`}>
      <View style={tw`mx-4 py-3 pb-4 border-b border-gray-100`}>
        <Text style={tw`text-2xl font-semibold text-gray-800`}>
          Office Details
        </Text>
        <View style={tw`flex flex-row py-3 justify-between`}>
          <View>
            <Text style={tw`font-semibold text-lg`}>Adv. Ananya's Office</Text>
            <Text style={tw`text-sm`}>10:00 AM - 8:00 PM</Text>
            <Text>Saket</Text>
          </View>
          <Image
            source={{ uri: "https://cdn.logo.com/hotlink-ok/logo-social.png" }}
            style={tw`h-20 w-20 rounded-full`}
          />
        </View>
        <TouchableOpacity
          style={tw`w-full rounded-lg border-2 border-gray-800 bg-white text-center items-center justify-center py-3`}
        >
          <Text style={tw`font-semibold text-gray-800 text-lg`}>
            Contact Office
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mx-4 my-2`}>
        <Text style={tw`text-lg font-semibold text-gray-800`}>Location</Text>
        <View style={tw`rounded-xl bg-gray-200 w-full h-48 my-3`}>
          <Image
            source={{
              uri: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg",
            }}
            style={tw`h-full w-full rounded-xl`}
          />
        </View>
      </View>
    </View>
  );
}

export default OfficeDetails
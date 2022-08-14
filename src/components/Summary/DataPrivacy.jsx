import { View, Text } from 'react-native'
import tw from 'twrnc'
import { AntDesign } from "@expo/vector-icons";

const DataPrivacy = () => {
  return (
    <View>
      <View style={tw`flex flex-row justify-start items-center`}>
        <AntDesign name="lock" size={24} color="black" />
        <Text style={tw`font-semibold mx-2`}>Data and Privacy</Text>
      </View>
      <Text style={tw`text-sm mt-3 text-gray-600 mx-1`}>
        The contents of your consultations are private and confidential. Advo's
        legal team may carry out routine annonymised audits to improve service
        quality.
        {"\n"}
        {"\n"}
        By proceeding to avail a consultation, you agree to{" "}
        <Text style={tw`text-yellow-600 underline`}>Advo's Terms of use.</Text>
      </Text>
    </View>
  );
}

export default DataPrivacy
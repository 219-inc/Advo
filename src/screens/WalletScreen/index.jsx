import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import tw from 'twrnc'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { WalletDetails } from 'constants';

const WalletScreen = () => {
  const navigation = useNavigation()

  //function to calculate total balance
  const calculateTotalBalance = () => {
    let totalBalance = 0;
    WalletDetails.map(({amount}) => {
      totalBalance += amount;
    });
    return parseFloat(totalBalance);
  };

  return (
    <View style={tw`bg-gray-800 h-full`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`flex flex-row absolute top-5 left-5`}
        >
          <AntDesign name="left" size={20} style={tw`text-yellow-500`} />
          <Text style={tw`text-yellow-500`}>Back</Text>
        </TouchableOpacity>
        <Text style={tw`text-lg text-white`}>AdCash Balance</Text>
        <Text style={tw`text-yellow-500 font-semibold text-4xl`}>₹{calculateTotalBalance()}</Text>
      </View>
      <View style={tw`h-4/5 bg-white rounded-t-3xl`}>
        <View
          style={tw`border-b border-gray-300 bg-white shadow rounded-t-3xl px-6 py-4`}
        >
          <Text style={tw`text-black text-xl`}>AdCash History</Text>
        </View>
        <FlatList
          data={WalletDetails}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={tw`flex flex-row justify-between items-center px-6 py-4 border-b border-gray-200`}
            >
              <View style={tw`flex flex-row items-center`}>
                <View
                  style={tw`bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center`}
                >
                  <AntDesign name="wallet" size={20} style={tw`text-white`} />
                </View>
                <View style={tw`ml-4`}>
                  <Text style={tw`text-black text-lg`}>{item.title}</Text>
                  <Text style={tw`text-gray-500 text-sm`}>{item.date}</Text>
                </View>
              </View>
              <Text
                style={tw`text-lg ${
                  item.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                ₹{item.amount}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default WalletScreen
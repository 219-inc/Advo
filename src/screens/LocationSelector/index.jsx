import { View, Text, TouchableOpacity, TextInput ,FlatList } from "react-native";
import { useContext } from "react";
import tw from "twrnc";

import LocationContext from "context/LocationContext";
import NotificationBoundaryContext from "layout/NotificationBoundary";

import { useNavigation } from "@react-navigation/native";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const LocationSelector = () => {
  const navigation = useNavigation();

  const notification = useContext(NotificationBoundaryContext);
  const { location, setLocation } = useContext(LocationContext);

  function changeLocation() {
    setLocation("Khanpur, Delhi");
    notification.create({
      content: `
          Location Changed
        `,
      type: notification.types.Success,
    });
    navigation.goBack();
  }

  const DATA = [
    {
      id: "1",
      title: "Jp nagar",
    },
    {
      id: "2",
      title: "Whitefield",
    }
    
  ];
  const Item = ({ title }) => (
    <View style={tw`p-2 border-b-2 border-gray-200`} >
      <Text style={tw`text-base font-semibold`}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={tw``}>
      <View style={tw`flex flex-row pl-3 pt-3 pb-3 bg-blue-600`}>
        <TouchableOpacity onPress={() => goBack()}>
          <AntDesign name="close" style={tw`text-slate-50`} size={30} />
        </TouchableOpacity>
        <TextInput
          style={tw`text-base text-slate-50 pl-4`}
          placeholder=" Search any city or locality"
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <View style={tw`p-3 bg-gray-200 font-bold text-sm `}>
        <TouchableOpacity
          style={tw` flex flex-row justify-between`}
          onPress={changeLocation}
        >
          <Text style={tw`text-blue-600 font-bold`}>Use current location</Text>
          <MaterialIcons
            style={tw`text-blue-600 font-bold`}
            name="my-location"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={tw`text-sm border-gray-200 pt-1 pb-1 border-t-2 border-b-2 font-bold p-3`}
        >
          Top Localities in Bangalore
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default LocationSelector;

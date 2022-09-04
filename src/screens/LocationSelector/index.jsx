import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";

import LocationContext from "context/LocationContext";
import NotificationBoundaryContext from "layout/NotificationBoundary";

import { useNavigation } from "@react-navigation/native";

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
    navigation.goBack()
  }

  return (
    <View>
      <Text>LocationSelector</Text>
      <TouchableOpacity onPress={changeLocation}>
        <Text>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationSelector;

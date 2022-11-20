import { useContext } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";
import Payments from "function/Payments";
import NotificationBoundaryContext from "layout/NotificationBoundary";

import { Ionicons } from "@expo/vector-icons";

const TopNav = () => {
  const notification = useContext(NotificationBoundaryContext);
  const navigation = useNavigation();

  async function placeOrder() {
    const order = new Payments({
      ammount: Math.floor(Math.random() * 100),
      currency: "INR",
    });
    await order.generateOrderId();

    await order
      .completeOrder({
        description: "Test",
        image:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        name: "Test",
        contact: "9123456789",
        user_name: "Test",
        color: "#FF0000",
      })
      .then((id) => {
        notification.create({
          content: `
          Transaction Successful
        `,
          type: notification.types.Success,
        });
      })
      .catch((err) => {
        notification.create({
          content: `
          Transaction Failed
        `,
          type: notification.types.Error,
        });
      });
  }

  return (
    <View style={tw`flex flex-row justify-between`}>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <TouchableHighlight
        style={tw`rounded-full bg-gray-200 p-2`}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={24} style={tw`text-gray-500`} />
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => navigation.navigate("Wallet")}
        style={tw`rounded-full bg-gray-200 p-2`}
      >
        <Ionicons name="wallet-outline" size={24} style={tw`text-gray-500`} />
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;

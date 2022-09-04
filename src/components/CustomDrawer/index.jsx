import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import tw from "twrnc";
import { Auth } from "aws-amplify";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const index = (props) => {
  const navigation = useNavigation();
  const [user_name, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      let user = await Auth.currentAuthenticatedUser();
      let username = user.attributes.preferred_username;
      username = username.charAt(0).toUpperCase() + username.slice(1);
      setUserName(username);
    })();
  }, []);

  function logout(){
    Auth.signOut();
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#1F2937"} barStyle={"dark-content"} />
      <DrawerContentScrollView {...props}>
        <View
          style={tw`py-4 px-3 -mt-2 mb-2 flex flex-row bg-gray-800 justify-start`}
        >
          <Image
            source={require("assets/images/skate_2.png")}
            style={tw`h-20 w-20 rounded-full`}
          />
          <View style={tw`flex flex-col  my-auto`}>
            <Text style={tw`text-white font-semibold text-lg mx-3`}>
              {user_name}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`mx-3 flex flex-row`}>
              <Text style={tw`text-yellow-500 font-semibold mr-1`}>
                View Profile
              </Text>
              <AntDesign
                name="right"
                size={12}
                style={tw`text-yellow-500 my-auto pt-0.5`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={tw`py-4 px-4 border-t border-gray-300`}>
        <TouchableOpacity
          onPress={logout}
          style={tw`flex flex-row justify-start`}
        >
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={tw`ml-2 my-auto`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import tw from "twrnc";
import { Auth, API } from "aws-amplify";

import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UserProfileIcon from "component/UserProfileIcon";

import UserContext from "context/User";

const index = (props) => {
  const navigation = useNavigation();
  const [_user, set_user] = useState("");

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      let session = await Auth.currentSession();
      const token = session.getIdToken().getJwtToken();

      let requestInfo = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      let _user = await API.get("AdvoApis", "/current-user", requestInfo);
      setUser(_user);
      set_user(_user);
      console.log(token, _user);
    })();
  }, []);

  function renderLawyer() {
    if (_user?.isLawyer) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("LawyerStack")}
          style={tw`flex flex-row justify-start`}
        >
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={tw`ml-2 my-auto`}>Lawyers Portal</Text>
        </TouchableOpacity>
      );
    } else if (_user?.lawyerApplicationStatus == "applied") {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("LawyerApplication")}
          style={tw`flex flex-row justify-start`}
        >
          <Ionicons name="document-attach-outline" size={24} color="black" />
          <Text style={tw`ml-2 my-auto`}>View application status</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("LawyerApplication")}
          style={tw`flex flex-row justify-start`}
        >
          <MaterialIcons name="person" size={24} color="black" />
          <Text style={tw`ml-2 my-auto`}>Are you a lawyer?</Text>
        </TouchableOpacity>
      );
    }
  }

  function logout() {
    Auth.signOut();
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#1F2937"} barStyle={"dark-content"} />
      <DrawerContentScrollView {...props}>
        <ImageBackground
          style={tw`py-4 px-3 -mt-2 mb-2 flex flex-row bg-gray-800 justify-start`}
          source={{
            uri: "https://papik.pro/en/uploads/posts/2022-07/thumbs/1658714737_43-papik-pro-p-drawings-waves-on-transparent-background-45.png",
          }}
        >
          <UserProfileIcon style={tw`h-20 w-20 rounded-full`} />
          <View style={tw`flex flex-col  my-auto`}>
            <Text style={tw`text-white font-semibold text-lg mx-3`}>
              {_user.name}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={tw`mx-3 flex flex-row`}
            >
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
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={tw`py-4 px-4 border-t border-gray-300`}>
        {renderLawyer()}
      </View>
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

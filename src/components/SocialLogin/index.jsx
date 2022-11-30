import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

const SocialButton = ({ icon, onPress }) => {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", ...tw`border border-gray-100 rounded-lg mx-2` }}>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icon}
              style={{ width: 24, height: 24, resizeMode: "contain" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const socials = [
  {
    id: 1,
    icon: {
      uri: "https://freesvg.org/img/1534129544.png",
    },
    onPress: () => alert("Google"),
  },
  {
    id: 2,
    icon: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png",
    },
    onPress: () => alert("Facebook"),
  },
  {
    id: 3,
    icon: {
      uri: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3269523/apple-icon-md.png",
    },
    onPress: () => alert("Apple"),
  },
];

const SocialLogin = ({ orientation }) => {
  return (
    <>
      <View style={{ flexDirection: orientation }}>
        {socials.map((social) => (
          <SocialButton
            key={social.id}
            icon={social.icon}
            onPress={social.onPress}
          />
        ))}
      </View>
    </>
  );
};

export default SocialLogin;

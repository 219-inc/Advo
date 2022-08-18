import { View, Text } from "react-native";
import tw from "twrnc";
import {
  Header,
  Card,
  OfficeDetails,
  MoreAbout,
} from "component/LawyersProfile";

const LawyersProfile = ({ route }) => {
  const { name, category, experience, rating, location, image } = route.params;

  return (
    <View style={tw`bg-white h-full`}>
      <Header />
      <Card name={name} image={image} />
      <OfficeDetails />
      <MoreAbout />
    </View>
  );
};

export default LawyersProfile;

import { View, ScrollView } from "react-native";
import tw from "twrnc";
import {
  Header,
  Card,
  OfficeDetails,
  MoreAbout,
} from "component/LawyersProfile";
import Footer from "../../components/LawyersProfile/Footer";

const LawyersProfile = ({ route }) => {
  const { name, category, experience, rating, location, image } = route.params;

  return (
    <View style={tw`bg-white h-full`}>
      <ScrollView>
        <Header />
        <Card name={name} image={image} />
        <OfficeDetails />
        <MoreAbout />
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default LawyersProfile;

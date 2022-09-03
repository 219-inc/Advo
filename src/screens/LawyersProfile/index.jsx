import { View, ScrollView } from "react-native";
import tw from "twrnc";
import {
  Header,
  Card,
  OfficeDetails,
  ClientStories,
  Footer,
  MoreAbout,
  QuestionAnswer
} from "component/LawyersProfile";


const LawyersProfile = ({ route }) => {
  const { name, category, experience, rating, location, image } = route.params;

  return (
    <View style={tw`bg-white h-full`}>
      <ScrollView style={tw`mb-16`}>
        <Header />
        <Card name={name} image={image} />
        <OfficeDetails />
        <ClientStories />
        <MoreAbout/>
      </ScrollView>
        <Footer/>
    </View>
  );
};

export default LawyersProfile;

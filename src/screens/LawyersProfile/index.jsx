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
      <ScrollView>
        <Header />
        <Card name={name} image={image} />
        <OfficeDetails />
        <ClientStories />
        <MoreAbout/>
         
        <Footer/>
      </ScrollView>
    </View>
  );
};

export default LawyersProfile;

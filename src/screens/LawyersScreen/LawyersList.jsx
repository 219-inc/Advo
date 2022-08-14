import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import LawyerCard from 'component/LawyerCard'

const lawyers = [
  {
    id: 1,
    name: "Adv. Ananya Pandey",
    category: "Personal",
    rating: 4.5,
    experience: "5+ years",
    location: "New Delhi",
    image:
      "https://media.istockphoto.com/photos/shot-of-a-business-women-using-laptop-working-at-home-stock-photo-picture-id1326908785?k=20&m=1326908785&s=612x612&w=0&h=IXEbEvRZGHxZCSkNjzOWNOgjY8D-fNCL5ef5F9Ggskk=",
  },
  {
    id: 2,
    name: "Adv. Aditya Birla",
    category: "Business",
    rating: 4.5,
    experience: "5+ years",
    location: "New Delhi",
    image: "http://moneyinc.com/wp-content/uploads/2016/06/Harish-Salve.jpg",
  },
  {
    id: 3,
    name: "Mukesh Jain",
    category: "Industrial",
    rating: 4.5,
    experience: "5+ years",
    location: "New Delhi",
    image:
      "https://www.irglobal.com/wp-content/uploads/2022/02/a6d298a5b3f9c81aad313dc2f3a239bf.png",
  },
  {
    id: 4,
    name: "Ch. Anoop Singh",
    category: "Personal",
    rating: 4.5,
    experience: "5+ years",
    location: "New Delhi",
    image: "https://tlclegal.in/wp-content/uploads/2021/02/Vipin-Jain.jpg",
  },
];

const LawyersList = ({route}) => {
  const navigation = useNavigation();

  const Header = () => (
    <View style={tw`flex flex-row px-4 border-b-8 border-gray-100 px-4 pb-2`}>
      <TouchableOpacity
        style={tw`flex flex-row justify-start items-center -mt-4`}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={16} style={tw`text-yellow-600`} />
        <Text style={tw`text-yellow-600 font-semibold`}>Back</Text>
      </TouchableOpacity>
      <View style={tw`mx-auto flex flex-col text-center items-center`}>
        <Text style={tw`-ml-10 font-semibold text-lg`}>
          {route.params.title} lawyer's
        </Text>
        <Text style={tw`text-gray-600 flex flex-row items-center -ml-10`}>
          In <Text style={tw`text-yellow-600 font-semibold`}>New Delhi</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={tw`bg-white h-full pt-4 flex-1`}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={lawyers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <LawyerCard {...item} />}
      />
    </ScrollView>
  );
}

export default LawyersList
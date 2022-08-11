import { View, Text, FlatList } from 'react-native'
import tw from 'twrnc'

import Listing from './Listing'

let listings = [
  {
    id: 1,
    name: 'Ananya Pandey',
    category: 'Personal',
    rating: 4.5,
    experience: '5+ years',
    location: "New Delhi",
    image: "https://media.istockphoto.com/photos/shot-of-a-business-women-using-laptop-working-at-home-stock-photo-picture-id1326908785?k=20&m=1326908785&s=612x612&w=0&h=IXEbEvRZGHxZCSkNjzOWNOgjY8D-fNCL5ef5F9Ggskk="
  },
  {
    id: 2,
    name: 'Aditya Birla',
    category: 'Business',
    rating: 4.5,
    experience: '5+ years',
    location: "New Delhi",
    image: "http://moneyinc.com/wp-content/uploads/2016/06/Harish-Salve.jpg"
  },
  {
    id: 3,
    name: 'Mukesh Jain',
    category: 'Industrial',
    rating: 4.5,
    experience: '5+ years',
    location: "New Delhi",
    image: "https://www.irglobal.com/wp-content/uploads/2022/02/a6d298a5b3f9c81aad313dc2f3a239bf.png"
  },
  {
    id: 4,
    name: 'Ch. Anoop Singh',
    category: 'Personal',
    rating: 4.5,
    experience: '5+ years',
    location: "New Delhi",
    image: "https://tlclegal.in/wp-content/uploads/2021/02/Vipin-Jain.jpg"
  }
]

const Nearby = () => {

  const renderListings = ({item}) => (
    <Listing
        data={item}
    />
  )

  return (
    <View style={tw`mt-3`}>
      <Text style={tw`font-semibold text-2xl mb-2 mx-2`}>Near you</Text>
      <FlatList 
        data={listings}
        renderItem={renderListings}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default Nearby
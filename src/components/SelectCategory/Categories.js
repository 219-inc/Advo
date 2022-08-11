import { useState } from 'react'
import { View, Text, TouchableHighlight, FlatList } from 'react-native'
import tw from 'twrnc'

import Listing from './Listing'

let categories = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Personal',
  },
  {
    id: 3,
    name: 'Business',
  },
  {
    id: 4,
    name: 'Industrial',
  },
  {
    id: 5,
    name: 'Work Place',
  }
]

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

const Categories = () => {

  const [selected, setSelected] = useState(1)
  const [filteredListings, setFilteredListings] = useState(listings)

  const Category = ({id, name}) => (
      <TouchableHighlight 
        onPress={() => select(id, name)}
        style={tw`mx-1 bg-gray-200 px-3 py-2 rounded-lg ${selected === id ? 'bg-gray-800' : ''}`}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <Text style={tw`font-semibold ${selected === id ? 'text-gray-200' : ''}`}>{name}</Text>
      </TouchableHighlight>
  )

  const renderCategories = ({ item }) => (
    <Category id={item.id} name={item.name} />
  );

  const select = (id, name) => {
    setSelected(id)
    if(id === 1) {
      setFilteredListings(listings)
    }else{
      setFilteredListings(listings.filter(listing => listing.category === name))
    }
  }

  const renderListings = ({ item }) => (
    <Listing data={item} />
  );

  return (
    <View style={tw`mt-3 -mx-2`}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
      />
      <View style={tw`mt-3 -mx-2 py-2`}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={selected === 1 ? listings : filteredListings}
          renderItem={renderListings}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Categories
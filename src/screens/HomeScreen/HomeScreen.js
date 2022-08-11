import { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import tw from 'twrnc'
import { Auth } from 'aws-amplify'

import MainTopNav from 'component/MainTopNav'
import SearchBar from 'component/SearchBar'
import SelectCategory from 'components/SelectCategory'
import Nearby from 'component/Nearby'

const HomeScreen = () => {
  const [user_name, setUserName] = useState('')

  useEffect(() => {
    (async () => {
      let user = await Auth.currentAuthenticatedUser()
      let username = user.attributes.preferred_username
      username = username.charAt(0).toUpperCase() + username.slice(1)
      setUserName(username)
    })()
  }, [])

  return (
    <View style={tw`bg-white h-full pt-4`}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={tw`relative w-full mb-4`}>
        <Image 
            style={tw`w-full h-34 -mt-4`}
            source={{
                uri: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40490/vecteezy_background-white_fj1220.jpg"
            }}
        />
        <View style={tw`absolute w-full px-6`}>
            <MainTopNav />
            <View style={tw`pt-5`}>
                <Text style={tw`font-semibold text-3xl`}>Welcome</Text>
                <Text style={tw`font-semibold text-5xl text-yellow-500`}>{user_name}</Text>
            </View>
        </View>
      </View>
      <ScrollView style={tw`px-4 mt-4`}>
        <SearchBar />
        <SelectCategory />
        <Nearby />
      </ScrollView>
    </View>
  )
}

export default HomeScreen
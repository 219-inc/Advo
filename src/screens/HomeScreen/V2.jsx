import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import TopNav from 'component/Homev2/TopNav'
import QuickActions from 'component/Homev2/QuickActions'

const HomeScreen = () => {
  return (
    <ScrollView style={tw`bg-white h-full`}>
      <TopNav />
      <View style={tw`mt-18`}>
        <QuickActions />
      </View>
    </ScrollView>
  );
}

export default HomeScreen
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import tw from 'twrnc'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

import RootStack from 'stack/RootStack';

Amplify.configure(awsconfig)

export default function App() {
  return (
    <SafeAreaView style={tw`h-full bg-gray-800`}>
      <NavigationContainer>
          <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

//https://48zpzd5169.execute-api.ap-south-1.amazonaws.com/dev

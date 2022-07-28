import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import tw from 'twrnc'

import RootStack from 'stack/RootStack';

export default function App() {
  return (
    <SafeAreaView style={tw`h-full pt-10 bg-white`}>
      <NavigationContainer>
          <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

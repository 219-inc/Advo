import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './HomeStack'

const Stack = createNativeStackNavigator();

export default function RootStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeStack" component={HomeStack}  />
        </Stack.Navigator>
    );
}
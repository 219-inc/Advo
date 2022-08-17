import { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, Hub } from "aws-amplify";
import { Text, View, StatusBar } from "react-native";
import tw from 'twrnc'

import Login from "screen/Authentication/Login";
import SignUp from "screen/Authentication/SignupScreen";
import ConfirmEmail from "screen/Authentication/ConfirmEmail";
import ForgotPassword from 'screen/Authentication/ForgotPassword';
import ChangePassword from 'screen/Authentication/ChangePassword';

import HomeStack from "./HomeStack";
import LawyersProfile from "screen/LawyersProfile";

const Stack = createNativeStackNavigator();

export default function Root() {

    const [user, setUser] = useState(undefined);
    const checkIfSignedIn = async () => {
        try{
            const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            setUser(authUser);
        }catch(e){
            setUser(null);
        }
    }

    useEffect(() => {
        checkIfSignedIn()
    }, [])

    useEffect(() => {
        const listner = (data) => {
            if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
                checkIfSignedIn();
            }
        }

        Hub.listen('auth', listner)
        return () => Hub.remove('auth', listner)
    }, [])

    if(user === undefined){
        return (
          <View style={tw`my-auto mx-auto`}>
            <StatusBar backgroundColor={"#1F2937"} barStyle={"dark-content"} />
            <Text style={tw`text-4xl text-yellow-600 font-semibold`}>Advo</Text>
          </View>
        );
    }

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="HomeStack" component={HomeStack} />
            <Stack.Screen name="LawyersProfile" component={LawyersProfile} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
          </>
        )}
      </Stack.Navigator>
    );
}
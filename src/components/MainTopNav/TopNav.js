import { View, Text, TouchableHighlight } from 'react-native'
import tw from 'twrnc'
import {API, Auth} from 'aws-amplify'

import { Ionicons  } from '@expo/vector-icons';

import UserProfileIcon from 'component/UserProfileIcon';

const TopNav = () => {

  /**
   * It gets the current user, gets the token from the user, and then uses the token to call the API.
   */
  async function callAPI(){
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log({token})

    const requestInfo = {
      headers: {
        Authorization: token
      }
    }

    const data = await API.get('restAuthApi', '/hello', requestInfo)

    console.log(data)
  }

  return (
    <View style={tw`flex flex-row justify-between`}>
      <TouchableHighlight style={tw`rounded-full bg-gray-200 p-2`} onPress={async()=>{await Auth.signOut()}}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableHighlight>
      <View>
        <UserProfileIcon style={tw`h-10 w-10 rounded-full`}/>
      </View>
    </View>
  )
}

export default TopNav
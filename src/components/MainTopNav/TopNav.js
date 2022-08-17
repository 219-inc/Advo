import { View, Text, TouchableHighlight } from 'react-native'
import tw from 'twrnc'
import {API, Auth} from 'aws-amplify'
import RazorpayCheckout from "react-native-razorpay";

import Payments from '../../functions/Payments';

import { Ionicons  } from '@expo/vector-icons';

import UserProfileIcon from 'component/UserProfileIcon';

const TopNav = () => {

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

  async function placeOrder(){
    const order = new Payments({ammount: Math.floor(Math.random() * 100), currency: 'INR'})
    await order.generateOrderId()
    
    await order.completeOrder({
      description: "Test",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      name: "Test",
      contact: "9123456789",
      user_name: "Test",
      color: "#FF0000"
    })
    .then(id => {
      alert("ID: " + id)
    })
  }


  return (
    <View style={tw`flex flex-row justify-between`}>
      <TouchableHighlight
        style={tw`rounded-full bg-gray-200 p-2`}
        onPress={placeOrder}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableHighlight>
      <View>
        <UserProfileIcon style={tw`h-10 w-10 rounded-full`} />
      </View>
    </View>
  );
}

export default TopNav
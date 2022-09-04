import { View, Text } from 'react-native';
import tw from 'twrnc';
 
import Consultation from '../../components/Consultations/Consultation';
const ProfileScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
       
       <Consultation />

    </View>
  )
}

export default ProfileScreen
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Appointments } from '../../components/Appointments';
import Consultation from '../../components/Consultations/Consultation';
const ProfileScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
       {/* <Appointments /> */}
       <Consultation />

    </View>
  )
}

export default ProfileScreen
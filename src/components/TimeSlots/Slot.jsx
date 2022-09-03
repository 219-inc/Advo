import { TouchableOpacity, Text } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const Slot = ({slot, color}) => {
  const navigation = useNavigation()
  return (
        <TouchableOpacity
        onPress={() => navigation.navigate('BookConsult')}
            style={{
                borderColor: color,
                ...tw`flex flex-col mr-3 mb-3 justify-start items-center border-2 rounded px-3 py-1.5 bg-white`,
            }}
        >
        <Text style={{color, ...tw`font-semibold text-lg`}}>
        {slot}
        </Text>
    </TouchableOpacity>
  )
}

export default Slot
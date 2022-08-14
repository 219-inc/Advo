import { TouchableOpacity, Text } from 'react-native'
import tw from 'twrnc'

const Languages = ({title}) => {
  return (
    <TouchableOpacity style={tw`mx-2 rounded-full border-2 border-yellow-600 px-4 py-1`}>
      <Text style={tw`font-semibold text-yellow-600`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Languages
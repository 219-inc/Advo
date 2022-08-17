import { View, Text } from 'react-native'
import tw from 'twrnc'

const Info = ({content, icon}) => {
  return (
    <View
      style={tw`h-14 w-full bg-blue-400 z-10 absolute bottom-0 left-0 flex flex-row items-center px-4`}
    >
      <>{icon && icon}</>
      <Text style={tw`font-semibold text-white mx-2`}>{content}</Text>
    </View>
  );
}

export default Info
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'

const TitleBar = ({title, icon}) => {
  return (
    <View style={tw`flex flex-row justify-between items-center`}>
      <Text style={tw`font-semibold text-2xl w-9/12`}>
        Consultation with {title} lawyers
      </Text>
      <Image
        source={{
          uri: icon,
        }}
        style={tw`h-20 w-20`}
      />
    </View>
  );
}

export default TitleBar
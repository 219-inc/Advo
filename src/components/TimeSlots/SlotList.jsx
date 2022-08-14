import { ScrollView, Text } from 'react-native'
import Slot from './Slot'
import tw from 'twrnc'

let slots = [
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
  "11:00 AM",
];

const SlotList = ({color}) => {
  return (
    <ScrollView
        style={tw`my-4 mx-5 w-full`}
        contentContainerStyle={tw`flex-row flex-wrap`}
    >

        {slots.map((slot, index) => (
            <Slot key={index} slot={slot} color={color} />
        ))}

    </ScrollView>
  )
}

export default SlotList
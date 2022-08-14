import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'twrnc'

let sampleDates = [
  {
    title: "Today, 14 Aug",
    slots: 16,
    selected: true,
  },
  {
    title: "Tomorrow, 15 Aug",
    slots: 0,
    selected: false,
  },
];

const Date = ({ title, slots, selected, color }) => (
  <TouchableOpacity
    style={{
      borderColor: selected ? color : "lightgray",
      ...tw`flex flex-col mr-3 justify-start items-center border-2 rounded px-3 py-1.5 bg-white`,
    }}
  >
    <Text style={tw`font-semibold text-black`}>
      {title}
    </Text>
    <Text style={{ color: selected ? color : "lightgray", ...tw`font-semibold text-xs` }}>
      {slots > 0 ? `${slots} slots available` : "No slots available"}
    </Text>
  </TouchableOpacity>
);

const DateSelector = ({color}) => {
  return (
    <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sampleDates}
        keyExtractor={(item) => item.date}
        renderItem={({item}) => (
            <Date {...item} color={color} />
        )}
    />
  )
}

export default DateSelector
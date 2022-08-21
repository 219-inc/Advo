import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LawyersScreen from './LawyersScreen';
import SummaryScreen from './SummaryScreen';
import LawyersList from './LawyersList';
import TimeSlots from './TimeSlots';
import BookConsult from './BookConsult';

const Stack = createNativeStackNavigator();

function LawyerStack(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LawyersScreen" component={LawyersScreen} />
            <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
            <Stack.Screen name="LawyersList" component={LawyersList} />
            <Stack.Screen name="TimeSlots" component={TimeSlots} />
            <Stack.Screen name="BookConsult" component={BookConsult} />
        </Stack.Navigator>
    )
}

export default LawyerStack;
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//screens
import HomeScreen from 'screen/HomeScreen';

//icons
import { AntDesign, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white', paddingBottom: 4 }}>
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({color}) => (
                    <AntDesign name="home" size={24} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Lawyers" 
            component={() => (<></>)}
            options={{
                tabBarLabel:'Lawyers',
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="balance-scale" size={18} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={() => (<></>)}
            options={{
                tabBarLabel:'Profile',
                tabBarIcon: ({color}) => (
                    <FontAwesome name="user-o" size={24} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  );
}
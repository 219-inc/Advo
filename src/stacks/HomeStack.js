import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import tw from 'twrnc'

//screens
// import DrawerStack from './Drawer';
import HomeScreen from 'screen/HomeScreen';
import LawyersScreen from 'screen/LawyersScreen';
import ProfileScreen from 'screen/ProfileScreen';

//icons
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import UserProfileIcon from 'component/UserProfileIcon';

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator activeColor={tw`text-yellow-500`.color} barStyle={{ backgroundColor: '#1F2937' }}>
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
            component={LawyersScreen}
            options={{
                tabBarLabel:'Lawyers',
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="balance-scale" size={18} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
                tabBarLabel:'Profile',
                tabBarIcon: () => (
                    <UserProfileIcon style={tw`h-6 w-6 rounded-full`}/>
                )
            }}
        />
    </Tab.Navigator>
  );
}
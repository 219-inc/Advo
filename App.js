import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

import { LocationProvider } from "context/LocationContext";
import { UserProvider } from "context/User";
import { NotificationBoundary } from "layout/NotificationBoundary";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "stack/RootStack";

export default function App() {
  return (
    <NotificationBoundary>
      <LocationProvider>
        <UserProvider>
          <SafeAreaProvider>
            <SafeAreaView style={tw`h-full bg-gray-800`}>
              <NavigationContainer>
                <RootStack />
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </UserProvider>
      </LocationProvider>
    </NotificationBoundary>
  );
}

//https://48zpzd5169.execute-api.ap-south-1.amazonaws.com/dev

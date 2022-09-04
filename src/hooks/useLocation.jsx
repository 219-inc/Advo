import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
    const [location, setLocation] = useState("Saket, Delhi");
    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== "granted") {
    //             setLocation(null);
    //             return;
    //         }
    //         const {coords} = await Location.getCurrentPositionAsync({});
    //         setLocation(coords);
    //     })();
    // }, [])
    return {location, setLocation};
}
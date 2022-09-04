import { createContext, useMemo } from "react";
import { useLocation } from "hook/useLocation";

const LocationContext = createContext();

export default LocationContext;

export const LocationProvider = ({ children }) => {
  const {location, setLocation} = useLocation();
  const value = useMemo(() => ({ location, setLocation }), [location]);
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

import { createContext, useMemo } from "react";
import { useLocation } from "hook/useLocation";

const LocationContext = createContext();

export default LocationContext;

export const LocationProvider = ({ children }) => {
  const location = useLocation();
  const value = useMemo(() => ({ location }), [location]);
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

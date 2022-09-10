import { createContext, useMemo, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user]);
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

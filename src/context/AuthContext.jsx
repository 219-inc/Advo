import { createContext, useState, useMemo, useEffect } from "react";

import useErrors from "@/hooks/useErrors";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

import Auth from "@/functions/auth";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const errors = useErrors();

  async function checkIfSignedIn() {
    try {
      const authUser = await Auth.currentAuthenticatedUser(axiosPrivate)({
        bypassCache: true,
      });
      setIsAuthenticated(true);
    } catch (err) {
      if (err.response?.status === 401) {
        return setIsAuthenticated(false);
      }
      errors.throw("An Error", errors.ERROR);
    }
  }

  useEffect(() => {
    (async () => {
      await checkIfSignedIn();
    })();
  }, []);

  const auth = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated: (isAuthenticated) => {
        setIsAuthenticated(isAuthenticated);
        localStorage.setItem("isAuthenticated", isAuthenticated);
      },
    }),
    [isAuthenticated]
  );

  // provider
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

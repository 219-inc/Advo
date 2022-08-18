import { createContext, useMemo, useState } from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import { Error, Success, Info, Warning } from "component/Notifications";

const NotificationBoundaryContext = createContext();

export default NotificationBoundaryContext;

export const NotificationBoundary = ({ children }) => {
  const [notification, setNotification] = useState(null);

  let types = {
    Success: "Success",
    Error: "Error",
    Info: "Info",
    Warning: "Warning",
  };

  const startTimer = () => {
    let timer = setInterval(() => {
      setNotification(null);
      clearInterval(timer);
    }, 5000);
  }

  const value = useMemo(
    () => ({
      create: (notification) => {
        setNotification(notification);
        startTimer();
      },
      types,
    }),
    []
  );

  return (
    <NotificationBoundaryContext.Provider value={value}>
      {children}
      {notification && (
        <>
          {notification.type === types.Success && <Success {...notification} />}
          {notification.type === types.Error && <Error {...notification} />}
          {notification.type === types.Info && <Info {...notification} />}
          {notification.type === types.Warning && <Warning {...notification} />}
        </>
      )}
    </NotificationBoundaryContext.Provider>
  );
};

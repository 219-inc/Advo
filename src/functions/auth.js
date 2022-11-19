import { NativeEventEmitter } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const eventEmitter = new NativeEventEmitter();
const BASE_URL = "http://192.168.1.4:3000";

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e.msg);
    return true;
  }
};

const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e.msg);
  }
};

export default {
  login: (email, password) => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Login successful") {
          eventEmitter.emit("auth", {
            payload: {
              event: "login",
            },
          });

          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  logout: () => {
    fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged out successfully") {
          eventEmitter.emit("auth", {
            payload: {
              event: "logout",
            },
          });
        }
      });
  },
  currentAuthenticatedUser: (options) =>
    new Promise((resolve, reject) => {
      if (options.bypassCache) {
        fetch(BASE_URL + "/api/v1/users/current", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.msg === "Unauthorized") {
              return resolve(null);
            }
            await setData("user", JSON.stringify(data));
            resolve(data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      } else {
        getData("user").then((data) => {
          if (data) {
            resolve(JSON.parse(data));
          } else {
            resolve(null);
          }
        });
      }
    }),
};

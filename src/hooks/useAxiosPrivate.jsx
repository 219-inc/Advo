import { axiosPrivate } from "../apis/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();

  useEffect(() => {
    // const requestInterceptor = axiosPrivate.interceptors.request.use(
    //   () => {},
    //   (error) => Promise.reject(error)
    // );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 403 && !originalRequest.sent) {
          originalRequest.sent = true;
          await refresh();
        }
        return Promise.reject(error);
      }
    );

    return () => {
    //   axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;

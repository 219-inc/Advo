import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Protected() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={{ pathname: "/login", state: { from: location } }}
        replace
      />
    );
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="hidden mt-16 pt-1 w-64 text-white bg-gray-700 fixed inset-y-0 overflow-x-hidden overflow-y-hidden sm:block">
          <div
            id="menu"
            className="w-64 h-screen flex bg-gray-800 duration-700"
          >
            <SideBar />
          </div>
        </div>
        <main className="sm:ml-64 h-full bg-gray-100 mt-20">
          <Outlet />
        </main>
      </div>
    </>
  );
}

import {lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";

const Protected = lazy(() => import("@/layout/Protected"));
const ErrorBoundary = lazy(() => import("@/layout/ErrorBoundary"));

import PreLoader from '@/components/PreLoader';

import AuthRoutes from '@/routes/AuthRoutes';
import ProtectedRoutes from "@/routes/ProtectedRoutes";

import { Auth } from 'aws-amplify';
import { isAdmin } from '@/functions/isAdmin';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        let _user = await Auth.currentAuthenticatedUser();
        setUser(_user);
        try{
          await isAdmin()
        }catch(e){
          console.log(e)
          alert("You are not allowed to access this page")
          setUser(null)
        }
      }catch(err){
        console.log(err);
      }
    })()
  }, [])

  return (
    <>
      {user ? (
        <Protected user={user}>
          <ErrorBoundary>
            <Suspense fallback={<PreLoader />}>
              <Routes>
                {ProtectedRoutes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Protected>
      ) : (
        <ErrorBoundary>
          <Routes>
            {AuthRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
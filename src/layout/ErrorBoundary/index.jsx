import { useState, useMemo, useEffect, lazy } from 'react'
import ErrorContext from '@/context/ErrorContext';

import Warning from '@/components/Errors/Warning';
import Success from '@/components/Errors/Success';
import Error from '@/components/Errors/Error';

const ErrorBoundary = ({children}) => {
  try {
    const [errors, setErrors] = useState([]);

    const throwError = (err, type) => {
      let e = {
        id: Math.floor(Math.random() * 100),
        message: err,
        type
      }

      setErrors([...errors, e]);
    }

    const value = useMemo(
      () => ({
        errors,
        WARN: "WARN",
        ERROR: "ERROR",
        SUCCESS: "SUCCESS",
        throw: throwError,
      }),
      [errors]
    );

    setTimeout(() => {
      if(errors.length > 1) setErrors(errors.shift());
      if(errors.length == 1) setErrors([])
    }, 10000)

    const removeError = (id) => {
      setErrors(errors.filter(error => error.id !== id));
    }

    return (
      <ErrorContext.Provider value={value}>
        <div className="h-full w-full">
          <div className="flex-col absolute top-0 right-0 py-6 px-6 z-50 space-y-3 overflow-y-auto overflow-x-hidden max-h-full">
            {errors?.length > 0 &&
              errors.map((error, index) => (
                <>
                  {error.type === "WARN" && (
                    <Warning
                      key={index}
                      id={error.id}
                      message={error.message}
                      removeError={removeError}
                    />
                  )}
                  {error.type === "SUCCESS" && (
                    <Success
                      key={index}
                      id={error.id}
                      message={error.message}
                      removeError={removeError}
                    />
                  )}
                  {error.type === "ERROR" && (
                    <Error
                      key={index}
                      id={error.id}
                      message={error.message}
                      removeError={removeError}
                    />
                  )}
                </>
              ))}
          </div>
          {children}
        </div>
      </ErrorContext.Provider>
    );
  } catch (er) {
    console.log(er);
  }
}

export default ErrorBoundary
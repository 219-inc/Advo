import { useState, useEffect, useContext } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { isAdmin } from "@/functions/isAdmin";
import ErrorContext from "@/context/ErrorContext";

import PreLoader from "@/components/PreLoader";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  let _errors = useContext(ErrorContext);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data) => {
    try {
      const user = await Auth.signIn(data.username, "(Div21902)");

      if (user) {
        try {
          await isAdmin();
          window.location.reload();
        } catch (e) {
          _errors.throw(
            "You are not allowed to access this page",
            _errors.ERROR
          );
        }
      }

      //navigate to home screen
      // window.location.reload()
      // let otp = prompt("ENTER OTP")
      // await Auth.sendCustomChallengeAnswer(user, otp)
      //   .then(async () => {
      //     try{
      //       await isAdmin()
      //       window.location.reload()
      //     }catch(e){
      //       _errors.throw("You are not allowed to access this page", _errors.ERROR)
      //     }
      //   })
      //   .catch(er => {
      //     console.log(er)
      //     _errors.throw("OTP is incorrect", _errors.ERROR)
      //   })
    } catch (e) {
      if (e.code === "UserNotFoundException") {
        _errors.throw("User not found", _errors.ERROR);
      } else if (e.code === "UsernameExistsException") {
        _errors.throw("Username already exists", _errors.ERROR);
      } else if (e.message === "User is disabled.") {
        _errors.throw("Your account is disabled!", _errors.ERROR);
      } else {
        _errors.throw("An unexpected error occurred!", _errors.ERROR);
        console.log(e.code);
        console.error(e);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 750);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(login)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  {...register("username")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

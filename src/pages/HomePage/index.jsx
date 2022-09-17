import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const onLogOutPressed = () => {
    Auth.signOut()
      .then((data) => {
        console.log(data);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get Token
  const getToken = async () => {
    const session = await Auth.currentSession();
    const token = session.getIdToken().getJwtToken();
    setToken(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="h-full bg-white px-8 py-6">
      <h1 className="text-5xl text-gray-800" onClick={onLogOutPressed}>
        Welcome back to{" "}
        <span className="font-bold text-black">
          Advo's
          <br /> admin
        </span>{" "}
        environment
      </h1>
      <div className="max-w-48 items-center">
        <span className="max-w-48">{token}</span>
      </div>
    </div>
  );
}

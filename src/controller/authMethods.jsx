import { FcPhoneAndroid, FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const authMethods = [
  {
    id: "phone",
    name: "Phone Number",
    value: "phone_auth",
    icon: <FcPhoneAndroid className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "google",
    name: "Google",
    value: "google_auth",
    icon: <FcGoogle className="h-6 w-6" />,
    isEnabled: false,
  },
  {
    id: "facebook",
    name: "Facebook",
    value: "facebook_auth",
    icon: <FaFacebookSquare className="h-6 w-6 text-blue-600" />,
    isEnabled: true,
  },
];

export default authMethods;

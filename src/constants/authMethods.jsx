import {
  FcPhoneAndroid,
  FcGoogle,
  FcBusinessman,
  FcPodiumWithSpeaker,
} from "react-icons/fc";

const authMethods = [
  {
    id: "phone",
    name: "Phone Number",
    value: "phone_auth",
    icon: <FcPhoneAndroid className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "sign_in_as_user",
    name: "Sign in as user",
    value: "sign_in_as_user",
    icon: <FcBusinessman className="h-6 w-6" />,
    isEnabled: false,
  },
  {
    id: "sign_in_as_lawyer",
    name: "Sign in as lawyer",
    value: "sign_in_as_lawyer",
    icon: <FcPodiumWithSpeaker className="h-6 w-6 text-blue-600" />,
    isEnabled: true,
  },
];

export default authMethods;

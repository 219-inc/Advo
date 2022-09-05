import { BsChatSquareText } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import { BiPhoneCall, BiHomeAlt } from "react-icons/bi";

const options = [
  {
    id: "home",
    name: "Home",
    value: "home",
    icon: <BiHomeAlt className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "chat",
    name: "Chat",
    value: "chat",
    icon: <BsChatSquareText className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "live",
    name: "Live",
    value: "live",
    icon: <RiLiveLine className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "call",
    name: "Call",
    value: "call",
    icon: <BiPhoneCall className="h-6 w-6" />,
    isEnabled: true,
  },
];

export default options;
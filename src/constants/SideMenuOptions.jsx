import { BsChatSquareText } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import { BiPhoneCall, BiHomeAlt } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const options = [
  {
    id: "view_profile",
    name: "View Profile",
    value: "view_profile",
    icon: <CgProfile className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "home",
    name: "Home",
    value: "home",
    icon: <BiHomeAlt className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "lawyers",
    name: "Lawyers",
    value: "lawyers",
    icon: <GoLaw className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "appointments",
    name: "Appintments",
    value: "appointments",
    icon: <BsCalendarDate className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "consultations",
    name: "Consultations",
    value: "consultations",
    icon: <BsChatSquareText className="h-6 w-6" />,
    isEnabled: true,
  },
  {
    id: "my_lawayers",
    name: "My Lawyers",
    value: "my_lawayers",
    icon: <GrUserManager className="h-6 w-6" />,
    isEnabled: true,
  },
];

export default options;
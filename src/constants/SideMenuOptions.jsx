import { BsChatSquareText } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import { BiPhoneCall, BiHomeAlt } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

async function getSideMenuContent() {
  // let data = await API.get("AppContent", "/sideMenuContent");
  let data = [
    "Home",
    "View Profile",
    "Lawyers",
    "Appointments",
    "Consultation",
    "Reminder",
    "My Lawyers",
  ];
  const options = [
    {
      id: "view_profile",
      name: "View Profile",
      value: "view_profile",
      icon: <CgProfile className="h-6 w-6" />,
      isEnabled: data.includes("View Profile"),
    },
    {
      id: "home",
      name: "Home",
      value: "home",
      icon: <BiHomeAlt className="h-6 w-6" />,
      isEnabled: data.includes("Home"),
    },
    {
      id: "lawyers",
      name: "Lawyers",
      value: "lawyers",
      icon: <GoLaw className="h-6 w-6" />,
      isEnabled: data.includes("Lawyers"),
    },
    {
      id: "appointments",
      name: "Appointments",
      value: "appointments",
      icon: <BsCalendarDate className="h-6 w-6" />,
      isEnabled: data.includes("Appointments"),
    },
    {
      id: "consultations",
      name: "Consultation",
      value: "consultations",
      icon: <BsChatSquareText className="h-6 w-6" />,
      isEnabled: data.includes("Consultation"),
    },
    {
      id: "reminder",
      name: "Reminder",
      value: "reminder",
      icon: <BsChatSquareText className="h-6 w-6" />,
      isEnabled: data.includes("Reminder"),
    },
    {
      id: "my_lawayers",
      name: "My Lawyers",
      value: "my_lawayers",
      icon: <GrUserManager className="h-6 w-6" />,
      isEnabled: data.includes("My Lawyers"),
    },
  ];

  return options;
}

export default await getSideMenuContent();

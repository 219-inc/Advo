import authMethods from "./authMethods";
import bottomTabOptions from "./SideMenuOptions";

const sections = [
  {
    title: "Authentication Methods",
    subTitle: "Manage the authentication methods available in the app",
    items: authMethods,
  },
  {
    title: "Bottom Tabs",
    subTitle: "Manage the bottom tab options available in the app",
    items: bottomTabOptions,
  },
  {
    title: "Content",
    subTitle: "Manage the content shown in the app",
    items: [],
  }
];

export default sections;

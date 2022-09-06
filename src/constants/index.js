import authMethods from "./authMethods";
import SideMenuOptions from "./SideMenuOptions";

export const sections = [
  {
    title: "Authentication Methods",
    subTitle: "Manage the authentication methods available in the app",
    items: authMethods,
  },
  {
    title: "Side Menu",
    subTitle: "Manage the side menu options available in the app",
    items: SideMenuOptions,
  },
  {
    title: "Content",
    subTitle: "Manage the content shown in the app",
    items: [],
  },
];


export const userTableHeaders = [
  {
    id: "id",
    label: "User ID"
  },
  {
    id: "name",
    label: "Name"
  },
  {
    id: "phone_number",
    label: "Phone Number"
  },
  {
    id: "account_status",
    label: "Account Status"
  },
  {
    id: "user_status",
    label: "User Status"
  }
];

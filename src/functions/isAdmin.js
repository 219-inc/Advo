// import Admin from "./Admin";
// import { Auth } from "aws-amplify";

// export async function isAdmin() {
//   let admin = new Admin();
//   let { username } = await Auth.currentAuthenticatedUser();

//   let { Groups } = await admin.ListGroupsForUser(username);

//   let isAdmin = false;
//   for (let group of Groups) {
//     if (group.GroupName === "admins") {
//       isAdmin = true;
//     }
//   }
//   return isAdmin;
// }

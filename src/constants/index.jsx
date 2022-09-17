import authMethods from "./authMethods";
import SideMenuOptions from "./SideMenuOptions";
import {FiEdit2} from 'react-icons/fi' ;
import {Link} from 'react-router-dom';

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
function viewApplicationDetails(id){
  
}
export const LawyerApplicationTableHeaders = [

  {
    id: "user",
    Header: "User",
    accessor: "user.email"
  },
  {
    id: "specialization",
    Header: "Specialization",
    accessor: "specialization"
  },
 
  {
    id: "application_status",
    Header: "Application Status",
    accessor: "application_status"
  },
 
  {
    id: "updatedOn",
    Header: "Updated On",
    accessor: "updatedOn"
  }
  ,
  {
    id: "Actions",
    Header: "Actions",
    accessor: "applicationId",
    Cell: ({ cell }) =>{
      return(
        <Link to={`/lawyer-application-details/${cell.value}`} className="font-semibold text-blue-300 text-center mx-2 hover:text-blue-600">
          View
        </Link>
      )
    }
    
  }
]
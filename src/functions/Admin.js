import * as api from "@/apis/admin.config.json"
import { Auth, API } from 'aws-amplify'

export default class Admin {
    /**
     * The constructor function is a special function that is called when a new instance of the class
     * is created.
     */
    constructor() {
        this.apiName = api.name;
    }

    /**
     * It takes in a limit and a nextToken, and returns a list of users
     * 
     * Args:
     *   limit: The number of users to return in the response.
     *   nextToken: The pagination token that's returned when the response from a previous call is
     * truncated. Use the token in the next request to retrieve the next set of results.
     * 
     * Returns:
     *   The rest of the object.
     */
    async ListUsers(limit, nextToken) {
        let request = {
            queryStringParameters: {
                "limit": limit,
                "token": nextToken
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        const {
            NextToken,
            ...rest
        } = await API.get(this.apiName, api.ListUsers.url, request);
        nextToken = NextToken;

        let users = []

        rest.Users.forEach(async user => {
            //get user details 
            users.push(await this.GetUserFromDB(user.Username))
        })

        return users;
    }

    /**
     * It takes a username as a parameter, creates a request object, and then calls the API Gateway
     * endpoint with the request object.
     * 
     * The request object is created by taking the username parameter and adding it to the
     * body object. The Authorization header is added by calling the
     * Auth.currentSession() function and then calling the getAccessToken() function on the result.
     * 
     * The API.post() function is called with the apiName, the url, and the request object.
     * 
     * The apiName is the name of the API Gateway API. The url is the path to the endpoint. The request
     * object is the object that contains the body and the Authorization header.
     * 
     * The API.post() function is a function that is provided by the Amplify library. It takes the
     * apiName, the url, and the request object and makes a POST request to the API Gateway endpoint.
     * 
     * The API
     * 
     * Args:
     *   username: The username of the user to disable
     * 
     * Returns:
     *   The response from the API Gateway.
     */
    async DisableUser(username) {
        let request = {
            body: {
                "username": username
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.post(this.apiName, api.DisableUser.url, request);
    }

    /**
     * It takes a username as a parameter, creates a request object, and then calls the API Gateway
     * endpoint with the request object.
     * 
     * The request object is created by taking the username parameter and adding it to the
     * body object. The Authorization header is added by calling the
     * Auth.currentSession() function and then calling the getAccessToken() function on the result. The
     * getJwtToken() function is then called on the result of the getAccessToken() function.
     * 
     * The API.post() function is called with the apiName, the url, and the request object.
     * 
     * The apiName is the name of the API Gateway endpoint. The url is the path to the endpoint. The
     * request object is the object that contains the body and the Authorization
     * header.
     * 
     * The API.post() function is defined in the aws-amplify library. It takes the apiName, the url,
     * 
     * Args:
     *   username: The username of the user to enable
     * 
     * Returns:
     *   The response from the API Gateway.
     */
    async EnableUser(username) {
        let request = {
            body: {
                "username": username
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.post(this.apiName, api.EnableUser.url, request);
    }

    /**
     * It takes a username and a group name, and adds the user to the group.
     * 
     * Args:
     *   username: the username of the user to add to the group
     *   group: string
     * 
     * Returns:
     *   The response from the API Gateway.
     */
    async AddUserToGroup(username, group) {
        let request = {
            body: {
                "username": username,
                "groupname": group
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.post(this.apiName, api.AddUserToGroup.url, request);
    }

    /**
     * It takes a username and a group name, and removes the user from the group.
     * 
     * Args:
     *   username: the username of the user to be removed from the group
     *   group: string
     * 
     * Returns:
     *   The response from the API Gateway.
     */
    async RemoveUserFromGroup(username, group) {
        let request = {
            body: {
                "username": username,
                "groupname": group
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.post(this.apiName, api.RemoveUserFromGroup.url, request);
    }

    /**
     * It takes a username as a parameter, creates a request object, and then calls the API Gateway
     * endpoint with the request object.
     * 
     * Args:
     *   username: The username of the user to sign out.
     * 
     * Returns:
     *   The response from the API Gateway.
     */
    async SignOutUser(username) {
        let request = {
            body: {
                "username": username
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.post(this.apiName, api.SignOutUser.url, request);
    }

    /**
     * It's a function that takes a username as a parameter and returns a list of groups that the user
     * is a member of.
     * 
     * Args:
     *   username: The username of the user to list groups for
     * 
     * Returns:
     *   The response from the API Gateway.
     */
    async ListGroupsForUser(username) {
        let request = {
            queryStringParameters: {
                "username": username
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.get(this.apiName, api.ListGroupsForUser.url, request);
    }

    async GetUserFromDB(userId){
        let request = {
            queryStringParameters: {
                "userId": userId
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        return await API.get(this.apiName, api.GetUserFromDB.url, request);
    }   

    async GetLawyerApplications() {
        let request = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        let applications = await API.get(this.apiName, api.GetLawyerApplications.url, request);

        //process applications to replace the user id with the user's details
        for (let i = 0; i < applications.length; i++) {
            applications[i].user = await this.GetUserFromDB(
              applications[i].userId
            );
        }

        return applications;
    }

    async updateApplicationStatus(applicationId, status) {
        let request = {
          body: {
            applicationId,
            status,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`,
          },
        };
        return await API.post(
          this.apiName,
          api.ApproveLawyerApplication.updateApplication,
          request
        );
    }

    async ApproveLawyerApplication(applicationId, username) {
        let request = {
            body: {
                "groupname": "AdvoLawyers",
                "username": username
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        await API.post(this.apiName, api.ApproveLawyerApplication.addToGroup, request);

        //update the application status
        await this.updateApplicationStatus(applicationId, "approved");
    }

    async RejectLawyerApplication(applicationId) {
        await this.updateApplicationStatus(applicationId, "rejected");
    }
}
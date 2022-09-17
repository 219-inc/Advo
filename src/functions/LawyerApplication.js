import { CREATE_LAWYER_APPLICATION } from "../apis";
import { Auth, API } from "aws-amplify";

// function to get token
async function getToken() {
  const session = await Auth.currentSession();
  const token = session.getAccessToken().getJwtToken();
  return token;
}

export default function createLawyerApplication(data) {
  return new Promise(async (resolve, reject) => {
    const token = await getToken();
    const requestInfo = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    API.post("AdvoApis", CREATE_LAWYER_APPLICATION, {
      body: data,
      ...requestInfo,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

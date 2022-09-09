/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const queryExec = require("./QueryExec");

async function CreateUser(user) {
  let CURRENT_DATE_TIME = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  let NEW_USER = `INSERT INTO AdvoUsers (userId, name, emailAddress, phoneNumber, lastActive) 
  VALUES ('${user.userId}', '${user.name}', '${user.email}', '${user.phoneNumber}', '${CURRENT_DATE_TIME}' )`;

  await queryExec(NEW_USER);
}

exports.handler = async (event) => {
  try {
    let { user } = JSON.parse(event.body);
    await CreateUser(user);

    return {
      statusCode: 200,
      body: JSON.stringify("User Created"),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify("User was not created!"),
    };
  }
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const queryExec = require("./QueryExec");

const processUser = (user) => {
  return {
    userId: user[0].stringValue,
    name: user[1].stringValue,
    email: user[2].stringValue,
    phone: user[3].stringValue,
    createdOn: user[4].stringValue,
  };
};

exports.handler = async (event) => {
  let userId = event.requestContext.authorizer?.jwt.claims.sub;

  let data = await queryExec(
    `SELECT * FROM AdvoUsers WHERE userId = '${userId}'`
  );

  let user;

  if (data.records.length > 0) {
    user = data.records[0];
    user = processUser(user);

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };

  } else {
    user = null;

    return {
      statusCode: 200,
      body: JSON.stringify({err: "User not found"}),
    };

  }

};

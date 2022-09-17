/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const LawyersList = require('./LawyersList');

const GET = async (type) => {
  const lawyersList = new LawyersList(type);
  const lawyers = await lawyersList.getLawyersList();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(lawyers),
  };
}

exports.handler = async (event) => {
  try {
    const method = event.httpMethod;

    switch (method) {
      case 'GET':
        return GET(event.queryStringParameters.type);
      default:
        return {
          statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
            },
            body: JSON.stringify("Unknown method"),
        };
    }

  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify("An error occured"),
    }
  }
};
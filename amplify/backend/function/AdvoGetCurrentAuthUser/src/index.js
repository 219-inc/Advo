

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    
    let userId = event.requestContext.authorizer?.jwt.claims.sub

    let user = await QueryExec(`SELECT * FROM users WHERE userId = '${userId}'`)

    return {
        statusCode: 200,
        body: JSON.stringify(user),
    };
};

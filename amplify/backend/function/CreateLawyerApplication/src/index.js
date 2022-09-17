/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const queryExec = require("./QueryExec");

//funciton to generate a v4 uuid
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

exports.handler = async (event) => {
  const { body } = event;
  const {
    specialization,
    gender,
    city,
    registration_number,
    registration_year,
    registration_council,
    degree,
    institution,
    year_of_completion,
    years_of_experience,
    establishment,
    establishment_name,
    establishment_city,
    id_proof_S3URL,
    lawyer_registration_proof_S3URL,
    establishment_proof_S3URL,
  } = JSON.parse(body);

  let applicationId = uuidv4();
  let userId = event.requestContext.authorizer?.jwt.claims.sub;


  const sql = `INSERT INTO LawyerApplications(applicationId, userId, specialization, gender, city, 
               registration_number, registration_year, registration_council, degree, institution, 
               year_of_completion, years_of_experience, establishment, establishment_name, 
               establishment_city, id_proof_S3URL, lawyer_registration_proof_S3URL, establishment_proof_S3URL, 
               application_status, createdOn, updatedOn) 
               VALUES('${applicationId}', '${userId}', '${specialization}', '${gender}', '${city}', 
               '${registration_number}', ${registration_year}, '${registration_council}', '${degree}', 
               '${institution}', ${year_of_completion}, ${years_of_experience}, ${establishment}, 
               '${establishment_name}', '${establishment_city}', '${id_proof_S3URL}', '${lawyer_registration_proof_S3URL}', 
               '${establishment_proof_S3URL}', 'applied', NOW(), NOW())`;

  const query2 = `UPDATE AdvoUsers SET lawyerApplicationStatus = 'applied' WHERE userId = '${userId}'`;

  try {
    await queryExec(sql);
    await queryExec(query2);

    return {
      statusCode: 200,
      body: JSON.stringify("Application Submitted Successfully"),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};

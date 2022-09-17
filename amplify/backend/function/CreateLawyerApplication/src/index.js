/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const queryExec = require("./QueryExec");

exports.handler = async (event) => {
  const { body } = event;
  const {
    applicationId,
    userId,
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
    application_status,
  } = JSON.parse(body);


  const sql = `INSERT INTO LawyerApplications(applicationId, userId, specialization, gender, city, 
               registration_number, registration_year, registration_council, degree, institution, 
               year_of_completion, years_of_experience, establishment, establishment_name, 
               establishment_city, id_proof_S3URL, lawyer_registration_proof_S3URL, establishment_proof_S3URL, 
               application_status, createdOn, updatedOn) 
               VALUES('${applicationId}', '${userId}', '${specialization}', '${gender}', '${city}', 
               '${registration_number}', ${registration_year}, '${registration_council}', '${degree}', 
               '${institution}', ${year_of_completion}, ${years_of_experience}, ${establishment}, 
               '${establishment_name}', '${establishment_city}', '${id_proof_S3URL}', '${lawyer_registration_proof_S3URL}', 
               '${establishment_proof_S3URL}', '${application_status}', NOW(), NOW())`;

  try {
    await queryExec(sql);

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

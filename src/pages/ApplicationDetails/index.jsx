import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";

import Admin from "@/functions/Admin";
import ErrorContext from "@/context/ErrorContext";


const ApplicationDetails = () => {
  const errors = useContext(ErrorContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const admin = new Admin();

  const approveApplication = async () => {
    admin.ApproveLawyerApplication(id, "+918178392040");
    errors.throw("Application approved successfully", errors.SUCCESS);
	navigate(-1)
  };

  const rejectApplication = async () => {
    admin.RejectLawyerApplication(id);
    errors.throw("Application rejected", errors.WARN);
	navigate(-1)
  };

  const ContentText = ({ title, value }) => (
    <div className="flex flex-row items-center space-x-2 justify-start bg-gray-200 my-2 px-2 py-1">
      <h3 className="text-lg font-semibold text-gray-700 min-w-18">
        {title} {" : "}
      </h3>
      <p className="text-gray-700 font-semibold text-center">{value}</p>
    </div>
  );

  return (
    <div className="bg-white relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advo | Application Details</title>
      </Helmet>
      <div className="px-6 md:py-0 py-5 border-b border-gray-200 flex flex-row justify-between items-center fixed bg-white w-[87%] -mt-2.5">
        <div className="pt-2">
          <h1 className="text-5xl text-black font-semibold">
            Application Details
          </h1>
          <h4 className="text-gray-500 my-2 mb-3">
            View details of application
          </h4>
        </div>
        <div className="flex flex-row space-x-4 content-start h-12">
          <button
            onClick={approveApplication}
            className="flex flex-row items-center justify-center space-x-1 content-center text-black bg-green-200 border border-green-500 hover:bg-green-500 hoveer:text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Approve
          </button>
          <button
            onClick={rejectApplication}
            className="flex flex-row items-center justify-center space-x-1 text-gray-900 bg-red-200 border border-red-400  font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Reject
          </button>
          <button className="flex flex-row items-center justify-center space-x-1 text-black bg-white border border-gray-200 font-semibold rounded-lg text-sm px-5 py-2.5 text-center">
            Delete
          </button>
        </div>
      </div>
      <hr />
      <div className="h-full p-6 bg-gray-100 mt-20">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-row space-x-4 w-full">
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-700">
                User Details
              </h3>
              <ContentText title={"User Id"} value={`dakdnskndkaskdliwj90`} />
              <ContentText title={"Name"} value={`John Doe`} />
              <ContentText title={"Email"} value={`abc@gmail.com`} />
              <ContentText title={"Phone"} value={`+918178392040`} />
              <ContentText title={"City"} value={`Mumbai`} />
            </div>
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-700">
                Application Details
              </h3>
              <ContentText
                title={"Application Id"}
                value={`dakdnskndkaskdliwj90`}
              />
              <ContentText title={"Date"} value={`12/12/2021`} />
              <ContentText title={"Status"} value={`Pending`} />
              <ContentText title={"Specialization"} value={`Civil`} />
            </div>
          </div>
          <div className="flex flex-row space-x-4 w-full">
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-700">
                Education Qualifactions
              </h3>
              <ContentText title={"User Id"} value={`dakdnskndkaskdliwj90`} />
              <ContentText title={"Name"} value={`John Doe`} />
              <ContentText title={"Email"} value={`abc@gmail.com`} />
              <ContentText title={"Phone"} value={`+918178392040`} />
              <ContentText title={"City"} value={`Mumbai`} />
            </div>
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-300">
              <h3 className="text-2xl font-semibold text-gray-700">
                Eastablishment Details
              </h3>
              <ContentText
                title={"Application Id"}
                value={`dakdnskndkaskdliwj90`}
              />
              <ContentText title={"Date"} value={`12/12/2021`} />
              <ContentText title={"Status"} value={`Pending`} />
              <ContentText title={"Specialization"} value={`Civil`} />
            </div>
          </div>
          <div className="flex flex-row space-x-4 p-6 w-full h-[400px] border border-gray-300 bg-white rounded-lg shadow-md">
			<h3 className="text-2xl font-semibold text-gray-700">
				Documents
			</h3>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;

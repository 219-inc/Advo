import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";

import Table, { AvatarCell } from "./Table"; // new

import ErrorContext from "@/context/ErrorContext";

import { LawyerApplicationTableHeaders } from "@/constants";

function LawyerApplications() {
  const errors = useContext(ErrorContext);
  const [applications, setApplications] = useState(null);

  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advo | Lawyer Applications</title>
      </Helmet>
      <div className="px-6 md:py-0 py-3">
        <h1 className="text-5xl text-black font-semibold">
          Lawyer Applications
        </h1>
        <h4 className="text-gray-500 my-2 mb-3">
          Manage all the lawyer applications
        </h4>
      </div>
      <hr />
      <div className="h-full p-6 bg-gray-100">
        {!applications && <h3>Loading...</h3>}
        {applications && (
          <>
            <Table
              columns={LawyerApplicationTableHeaders}
              data={applications}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default LawyerApplications;

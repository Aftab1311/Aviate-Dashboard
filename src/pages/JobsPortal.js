import JobsPortalHeader from "../Components/JobsPortalHeader";
import React from "react";
import JobsPortalTable from "../Components/JobsPortalTable";

const JobsPortal = () => {
  return (
    <>
      <JobsPortalHeader />
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          height: "109px",
          background: "#F4F5F7",
          fontSize: "30px",
          fontWeight: "500",
          lineHeight: "80px",
          color: "#000000",
          fontStyle: "normal",
          paddingTop: "15px",
        }}
      >
        My Jobs List
      </h2>
      <JobsPortalTable />
    </>
  );
};

export default JobsPortal;

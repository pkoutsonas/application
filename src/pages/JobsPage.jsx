import React, { useState } from "react";
import JobListing from "../components/jobListing";

const JobsPage = () => {
  return (
    <div className="flex">
      <div className="w-64 border-r border-gray-900 relative h-full w-64">
        {/* <JobFilter onFilterChange={handleFilterChange} /> */}
      </div>
      <div className="grow">
        <JobListing />
      </div>
    </div>
  );
};

export default JobsPage;

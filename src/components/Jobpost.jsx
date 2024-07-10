import React from "react";
import { FaMapMarker } from "react-icons/fa";

const JobPost = ({ title, company, salary, location, description }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h3 className="text-lg text-gray-700 mb-1">{company}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-600">Salary: {salary} $</p>
        <p className="text-orange-800 flex items-center">
          <FaMapMarker className="mr-1" /> {location}
        </p>
      </div>
    </div>
  );
};

export default JobPost;

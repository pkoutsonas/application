import React from "react";
import { FaMapMarker } from "react-icons/fa";

const JobPost = ({ title, company, salary, location, description }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-xl">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h3 className="text-lg text-gray-700 mb-1">{company}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="grid grid-cols-3 gap-2 mt-4 justify-items-center items-center">
          <p className="text-gray-600 text-center font-bold">
            Salary: {salary} $
          </p>
          <p className="text-orange-800 flex items-center">
            <FaMapMarker className="mr-1" /> {location}
          </p>
          <button className="bg-gray-300 text-black py-1 px-1 w-36 rounded hover:bg-gray-500 hover:text-orange-500">
            Apply
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default JobPost;

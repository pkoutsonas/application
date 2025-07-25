import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

const JobPost = ({
  title,
  company,
  company_name,
  salary,
  location,
  description,
  published_at,
}) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          {published_at ? (
            <p className="text-gray-600 text-sm">
              {new Date(published_at).toLocaleDateString("el-GR")}
            </p>
          ) : (
            <p className="text-gray-600 text-sm">Date not available</p>
          )}
        </div>
        <Link
          to={`/company/${company}`}
          className="text-lg text-blue-700 hover:underline mb-1">
          {company_name}
        </Link>
        <p className="text-gray-600">{description}</p>
        <div className="grid grid-cols-3 gap-2 mt-4 justify-items-center items-center">
          <p className="text-gray-600 text-center font-bold">
            Salary: {salary} € / month
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

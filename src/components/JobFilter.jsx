import React, { useState } from "react";

const JobFilter = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange({ location: e.target.value });
  };

  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      min_salary: minSalary,
      max_salary: maxSalary,
    });
  };

  return (
    <div>
      <h4 className="text-lg font-bold mb-2">Filter Jobs</h4>
      <div className="mb-6">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-6">
        <div className="flex gap-4">
          <div>
            <label className="block text-gray-700">Min Salary ($/month)</label>
            <input
              type="number"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Max Salary ($/month)</label>
            <input
              type="number"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </div>
        <button
          onClick={handleFilterChange}
          className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default JobFilter;

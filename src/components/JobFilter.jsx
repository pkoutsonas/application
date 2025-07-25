import { useState } from "react";

const JobFilter = ({ onFilter }) => {
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({
      location,
      minSalary: minSalary ? parseInt(minSalary) : null,
      maxSalary: maxSalary ? parseInt(maxSalary) : null,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">
        🔍 Filter Jobs
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="e.g. Thessaloniki"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Min Salary
          </label>
          <input
            type="number"
            value={minSalary}
            onChange={(e) => setMinSalary(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="e.g. 500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Salary
          </label>
          <input
            type="number"
            value={maxSalary}
            onChange={(e) => setMaxSalary(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="e.g. 1500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default JobFilter;

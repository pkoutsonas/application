import React, { useState, useEffect } from "react";
import axios from "axios";
import JobPost from "./Jobpost.jsx";
import PageTracker from "./PageTracker.jsx";
import JobFilter from "./JobFilter.jsx";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("date_desc"); // Default sorting by date
  const itemsPerPage = 6;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/jobs/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setJobs(response.data);
      setFilteredJobs(response.data); // Set both jobs and filteredJobs initially
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = ({ location, minSalary, maxSalary }) => {
    const result = jobs.filter((job) => {
      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesMin = minSalary ? job.salary >= minSalary : true;
      const matchesMax = maxSalary ? job.salary <= maxSalary : true;
      return matchesLocation && matchesMin && matchesMax;
    });
    setFilteredJobs(result);
    setCurrentPage(1);
  };

  // Handle sorting based on the selected option

  const handleSort = (option) => {
    setSortOption(option);

    const jobsToSort = [...(filteredJobs.length > 0 ? filteredJobs : jobs)];

    let sortedJobs = [];

    switch (option) {
      case "date_desc":
        sortedJobs = jobsToSort.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        );
        break;
      case "date_asc":
        sortedJobs = jobsToSort.sort(
          (a, b) => new Date(a.published_at) - new Date(b.published_at)
        );
        break;
      case "salary_desc":
        sortedJobs = jobsToSort.sort((a, b) => b.salary - a.salary);
        break;
      case "salary_asc":
        sortedJobs = jobsToSort.sort((a, b) => a.salary - b.salary);
        break;
      default:
        sortedJobs = jobsToSort;
    }

    if (filteredJobs.length > 0) {
      setFilteredJobs(sortedJobs);
    } else {
      setJobs(sortedJobs);
    }

    setCurrentPage(1); // reset pagination
  };

  const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : jobs;
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobsToDisplay.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="flex">
      {/* Sidebar - Filter */}
      <div className="w-1/6">
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 w-60">
          {/* Sorting Dropdown */}
          <div className="mb-6">
            <label className="block text-md font-semibold mb-2">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500">
              <option value="date_desc">Date (Newest First)</option>
              <option value="date_asc">Date (Oldest First)</option>
              <option value="salary_desc">Salary (Highest First)</option>
              <option value="salary_asc">Salary (Lowest First)</option>
            </select>
          </div>

          {/* Filter Component */}
          <JobFilter onFilter={handleFilter} />
        </div>
      </div>

      {/* Job Listings */}
      <div className="w-5/6 ml-auto px-8 py-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">
            Find the job that suits you most!
          </h1>
          <h3 className="text-xl font-bold mb-6">Every opportunity is here</h3>

          {/* Job Posts */}
          <div className="grid gap-4">
            {currentJobs.length > 0 ? (
              currentJobs.map((job, index) => (
                <JobPost
                  key={index}
                  published_at={job.published_at}
                  title={job.title}
                  company={job.company}
                  company_name={job.company_name}
                  location={job.location}
                  salary={job.salary}
                  description={truncateDescription(job.description, 20)}
                />
              ))
            ) : (
              <div className="text-center w-full mt-4">No jobs found.</div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {jobsToDisplay.length > itemsPerPage && (
          <div className="flex justify-center mt-8">
            <PageTracker
              totalItems={jobsToDisplay.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;

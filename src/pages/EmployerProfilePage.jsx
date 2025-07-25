import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import profileImg from "../assets/images/profileImg.jpg";
import EmployerProfile from "../components/EmployerProfile";
import JobPost from "../components/Jobpost";

const EmployerProfilePage = () => {
  const { id } = useParams();
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    fetchCompanyJobs();
  }, []);

  const fetchCompanyJobs = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/jobs/company/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setCompanyJobs(response.data);
    } catch (error) {
      console.error("Error fetching company jobs:", error);
    }
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div>
      {/* Background Header */}
      <div
        className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-12 opacity-90"
        style={{
          backgroundImage: `url(${profileImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}>
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
          <div className="mb-8 flex justify-center">
            <EmployerProfile />
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Your Job Listings</h2>
        {companyJobs.length > 0 ? (
          <div className="grid gap-4">
            {companyJobs.map((job, index) => (
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
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You haven’t posted any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default EmployerProfilePage;

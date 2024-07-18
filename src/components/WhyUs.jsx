import React from "react";

const WhyUs = () => {
  return (
    <div>
      <div className="container mx-auto my-12 px-4">
        <h2 className="text-center text-3xl font-bold mb-8">For Job Seekers</h2>
        <h3 className="text-center text-xl font-bold mb-8">Why JobLand?</h3>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">
                Specialization in the Agricultural Sector
              </h3>
              <p className="text-gray-600">
                We focus exclusively on the needs of the agricultural sector,
                offering specialized job listings in agriculture, livestock
                farming, and other agricultural activities.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">
                Wide Variety of Job Listings
              </h3>
              <p className="text-gray-600">
                Discover hundreds of job positions in various fields of the
                agricultural economy, from small family farms to large
                agricultural enterprises.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">
                User-Friendly Platform
              </h3>
              <p className="text-gray-600">
                Our user-friendly interface allows easy and quick job searching
                and job posting.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full">
              <h3 className="text-xl font-semibold mb-4">Reliable Employers</h3>
              <p className="text-gray-600">
                We collaborate with trustworthy and reputable employers in the
                agricultural sector, ensuring quality job opportunities.
              </p>
            </div>
          </div>
          <div className="bg-white py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-center text-3xl font-bold mb-8">
                How Does It Work?
              </h2>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center h-full">
                    <h3 className="text-2xl font-semibold mb-4">
                      1. Create an Account
                    </h3>
                    <p className="text-gray-600">
                      Sign up for free and create your profile to get started.
                      It's quick and easy.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center h-full">
                    <h3 className="text-2xl font-semibold mb-4">
                      2. Search for Jobs
                    </h3>
                    <p className="text-gray-600">
                      Use our advanced search tools to find job listings that
                      match your skills and preferences.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center h-full">
                    <h3 className="text-2xl font-semibold mb-4">
                      3. Apply & Get Hired
                    </h3>
                    <p className="text-gray-600">
                      Apply to job listings and communicate directly with
                      employers to secure your next job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

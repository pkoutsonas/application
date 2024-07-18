import React from "react";

const ForEmployers = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">For Employers</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h3 className="text-2xl font-semibold mb-4">
                Find the Best Candidates
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you are looking for seasonal workers or permanent staff,
                our platform helps you find the right candidates for your
                business.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Post a Job
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 h-full">
              <h3 className="text-2xl font-semibold mb-4">Reliable Services</h3>
              <p className="text-gray-600 mb-4">
                We provide specialized support to ensure the hiring process is
                seamless and efficient. Connect with reliable candidates quickly
                and easily.
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 p-4">
          <h2 className="text-center text-3xl font-bold mb-8 p-4">
            How Does It Work?
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center h-full">
                <h3 className="text-2xl font-semibold mb-4">1. Sign Up</h3>
                <p className="text-gray-600">
                  Create an account in just a few steps. It’s quick, easy, and
                  free.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center h-full">
                <h3 className="text-2xl font-semibold mb-4">
                  2. Post a Job Listing
                </h3>
                <p className="text-gray-600">
                  Publish your job openings and reach a wide pool of qualified
                  candidates.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 shadow-lg rounded-lg p-6 text-center h-full">
                <h3 className="text-2xl font-semibold mb-4">
                  3. Review Applications
                </h3>
                <p className="text-gray-600">
                  Browse through applications and communicate directly with
                  potential hires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForEmployers;

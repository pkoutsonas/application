import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const EmployerProfile = () => {
  const { id } = useParams(); // παίρνεις το ID από το URL
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/companies/${id}`);
        console.log("Fetched company data:", res.data);
        setCompany(res.data);
      } catch (err) {
        console.error("Error fetching company:", err);
      }
    };

    fetchCompany();
  }, [id]);

  if (!company) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{company.name}</h2>
          <UserCircleIcon className="w-20 h-20" />
        </div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Company Information
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">
                Company Name
              </dt>
              <dd className="text-sm text-gray-700 sm:col-span-2">
                {company.name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Location</dt>
              <dd className="text-sm text-gray-700 sm:col-span-2">
                <p className="flex items-center text-orange-800">
                  <FaMapMarker className="w-5 h-5 mr-1" />
                  {company.city}, {company.state}
                </p>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Phone</dt>
              <dd className="text-sm text-gray-700 sm:col-span-2">
                {company.phone_number}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Zipcode</dt>
              <dd className="text-sm text-gray-700 sm:col-span-2">
                {company.zipcode}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;

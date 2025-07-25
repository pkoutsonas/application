import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUpEmployerForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
    employer: {
      phone_number: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
    },
    company: {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone_number: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [type, field] = name.split(".");
    setFormData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...", formData);

    try {
      const response = await fetch("http://localhost:8000/register_employer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Registration successful:", result);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.error("Registration failed:", result);
        alert("Error: " + JSON.stringify(result));
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        {/* User Info */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">User Info</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Username */}
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="user.username"
                  type="text"
                  value={formData.user.username}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-indigo-600">
                <input
                  id="password"
                  name="user.password"
                  type={showPassword ? "text" : "password"}
                  value={formData.user.password}
                  onChange={handleChange}
                  className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="px-3 text-gray-500">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* First and Last Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-900">
                First name
              </label>
              <input
                id="first-name"
                name="user.first_name"
                type="text"
                value={formData.user.first_name}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-900">
                Last name
              </label>
              <input
                id="last-name"
                name="user.last_name"
                type="text"
                value={formData.user.last_name}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="user.email"
                type="email"
                value={formData.user.email}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Employer and Company Info */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">
            Employer & Company Info
          </h2>
          {/* Company Name */}
          <div className="sm:col-span-3">
            <label
              htmlFor="company-name"
              className="block text-sm font-medium text-gray-900">
              Company Name
            </label>
            <input
              id="company-name"
              name="company.name"
              type="text"
              value={formData.company.name}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Company Address */}
            <div className="sm:col-span-3">
              <label
                htmlFor="company-address"
                className="block text-sm font-medium text-gray-900">
                Company Address
              </label>
              <input
                id="company-address"
                name="company.address"
                type="text"
                value={formData.company.address}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Company City */}
            <div className="sm:col-span-2">
              <label
                htmlFor="company-city"
                className="block text-sm font-medium text-gray-900">
                Company City
              </label>
              <input
                id="company-city"
                name="company.city"
                type="text"
                value={formData.company.city}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Company State */}
            <div className="sm:col-span-1">
              <label
                htmlFor="company-state"
                className="block text-sm font-medium text-gray-900">
                State
              </label>
              <input
                id="company-state"
                name="company.state"
                type="text"
                value={formData.company.state}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Company Zipcode */}
            <div className="sm:col-span-2">
              <label
                htmlFor="company-zipcode"
                className="block text-sm font-medium text-gray-900">
                Zipcode
              </label>
              <input
                id="company-zipcode"
                name="company.zipcode"
                type="text"
                value={formData.company.zipcode}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Company Phone (optional) */}
            <div className="sm:col-span-3">
              <label
                htmlFor="company-phone"
                className="block text-sm font-medium text-gray-900">
                Company Phone (optional)
              </label>
              <input
                id="company-phone"
                name="company.phone_number"
                type="text"
                value={formData.company.phone_number}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>
            {/* Employer Address */}
            <div className="sm:col-span-3">
              <label
                htmlFor="employer-address"
                className="block text-sm font-medium text-gray-900">
                Employer Address
              </label>
              <input
                id="employer-address"
                name="employer.address"
                type="text"
                value={formData.employer.address}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Employer Phone (optional) */}
            <div className="sm:col-span-3">
              <label
                htmlFor="employer-phone"
                className="block text-sm font-medium text-gray-900">
                Employer Phone (optional)
              </label>
              <input
                id="company-phone"
                name="employer.phone_number"
                type="text"
                value={formData.employer.phone_number}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Employer City */}
            <div className="sm:col-span-2">
              <label
                htmlFor="employer-city"
                className="block text-sm font-medium text-gray-900">
                City
              </label>
              <input
                id="employer-city"
                name="employer.city"
                type="text"
                value={formData.employer.city}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Employer State */}
            <div className="sm:col-span-1">
              <label
                htmlFor="employer-state"
                className="block text-sm font-medium text-gray-900">
                State
              </label>
              <input
                id="employer-state"
                name="employer.state"
                type="text"
                value={formData.employer.state}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>

            {/* Employer Zipcode */}
            <div className="sm:col-span-2">
              <label
                htmlFor="employer-zipcode"
                className="block text-sm font-medium text-gray-900">
                Zipcode
              </label>
              <input
                id="employer-zipcode"
                name="employer.zipcode"
                type="text"
                value={formData.employer.zipcode}
                onChange={handleChange}
                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpEmployerForm;

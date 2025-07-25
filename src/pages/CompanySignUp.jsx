import React from "react";
import SignUpEmployerForm from "../components/SignUpCompanyEmployer";

const CompanySignUp = () => {
  return (
    <div className="grid grid-cols-2 justify-normal">
      {/* Left Side of the sign up page */}
      <div className="w-full grid grid-flow-col justify-stretch p-6 bg-white">
        <SignUpEmployerForm />
      </div>

      {/* Right Side of the sign up page */}

      <div className="relative flex flex-col items-center bg-gray-200">
        <img
          src="src/assets/images/companysignup.jpg"
          alt="Inspirational"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Footer of the sign up page */}
      <br />
    </div>
  );
};

export default CompanySignUp;

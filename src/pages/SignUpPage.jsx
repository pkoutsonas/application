import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-2 justify-normal">
      {/* Left Side of the sign up page */}
      <div className="relative flex flex-col items-center bg-gray-200">
        <img
          src="src/assets/images/signupimg.jpg"
          alt="Inspirational"
          className="w-full h-full object-cover opacity-90"
        />
        <blockquote className="absolute text-lg text-center text-gray-300 bg-opacity-50 p-4 rounded">
          Connecting Agriculture with Opportunities <br />
        </blockquote>
      </div>

      {/* Right Side of the sign up page */}
      <div className="w-full grid grid-flow-col justify-stretch p-6 bg-white">
        <SignUpForm />
      </div>

      {/* Footer of the sign up page */}
      <br />
    </div>
  );
};

export default SignUpPage;

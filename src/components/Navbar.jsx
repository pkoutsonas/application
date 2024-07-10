import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LoginModal from "./LoginModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const location = useLocation();
  const [active, setActive] = React.useState("Home");

  // Ενημέρωσε το active state όταν η τοποθεσία αλλάζει
  React.useEffect(() => {
    const currentPath = location.pathname.split("/")[1] || "home";
    setActive(currentPath.charAt(0).toUpperCase() + currentPath.slice(1));
  }, [location]);

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">JobLand.gr</div>
        <div className="text-white flex space-x-4">
          {["Home", "About", "Jobs", "Pricing"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={classNames(
                "px-4 py-2 rounded-md",
                active === item
                  ? "bg-gray-700 text-yellow-400"
                  : "hover:bg-gray-700"
              )}
              onClick={() => setActive(item)}>
              {item}
            </Link>
          ))}
        </div>
        <div className="text-white flex space-x-4">
          <button
            className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-gray-700"
            onClick={openModal}>
            Log In
          </button>
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <Link to={"/signup"}>
            <button
              href="/login"
              className="px-4 py-2 rounded-md hover:bg-gray-700 bg-purple-500">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

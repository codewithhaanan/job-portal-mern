import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 bg-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-2">
          Job<span className="text-[#F83002]">Portal</span>
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Connecting talented professionals with top companies worldwide.
        </p>

        <div className="w-full border-t border-gray-200 mt-4 pt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

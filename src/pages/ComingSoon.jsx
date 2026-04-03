import React from "react";
import Navbar from "../ui/Navbar";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[linear-gradient(rgba(29,78,216,0.5),rgba(37,99,235,0.5),rgba(0,0,0,0.5)),url(/rentomobile-comp.jpg)] bg-cover">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="bg-white border-8 border-yellow-400 rounded-lg p-12 text-center shadow-2xl max-w-lg w-full">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-blue-700 mb-2 font-latifont">
              Coming Soon
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We're working hard to bring you an amazing two wheeler rental
              experience. This feature will be available soon!
            </p>
          </div>

          <button
            onClick={() => navigate("/search")}
            className="bg-green-600 text-white px-8 py-4 rounded-md font-bold text-xl hover:bg-green-700 transition-colors duration-200 shadow-lg"
          >
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
}

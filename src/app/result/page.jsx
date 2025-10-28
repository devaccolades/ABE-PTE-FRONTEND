import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Mock Test Completed!
      </h1>
      <p className="text-gray-600">
        You have successfully completed the PTE Mock Test.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default page;

"use client";
import React from "react";

const SectionNavigator = ({ onNext, isLast }) => {
  return (
    <button
      onClick={onNext}
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition-all"
    >
      {isLast ? "Finish Exam" : "Next Section"}
    </button>
  );
};

export default SectionNavigator;

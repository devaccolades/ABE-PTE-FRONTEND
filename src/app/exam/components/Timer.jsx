
"use client";
import React from "react";

const Timer = ({ label, timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-lg font-semibold text-blue-700">
      <p className="text-gray-600">{label}</p>
      <p>
        ⏱️ {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;

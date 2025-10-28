"use client";
import React from "react";

const QuestionCard = ({ question }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md mt-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {question.question}
      </h3>

      {question.text && <p className="text-gray-600">{question.text}</p>}

      {question.audio && (
        <audio controls className="mt-2 w-full">
          <source src={question.audio} type="audio/mp3" />
        </audio>
      )}

      {question.options && (
        <div className="mt-3 flex flex-wrap gap-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className="px-3 py-1 bg-blue-100 rounded hover:bg-blue-200 transition"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

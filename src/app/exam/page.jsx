// "use client";
// import { useEffect, useState } from "react";
// import { mockTestData as initialMockTestData } from "./data/mockTesta";
// import Timer from "./components/Timer";
// import QuestionCard from "./components/QuestionCard";

// export default function Page() {
//   const [mockTestData, setMockTestData] = useState(initialMockTestData);

//   const [sectionIndex, setSectionIndex] = useState(0);
//   const [questionIndex, setQuestionIndex] = useState(0);

//   const totalExamTime = mockTestData.sections.reduce(
//     (acc, s) => acc + s.duration,
//     0
//   );

//   const [globalTimeLeft, setGlobalTimeLeft] = useState(totalExamTime);
//   const [sectionTimeLeft, setSectionTimeLeft] = useState(
//     mockTestData.sections[0].duration
//   );

//   const section = mockTestData.sections[sectionIndex];
//   const question = section.questions[questionIndex];

//   useEffect(() => {
//     if (globalTimeLeft <= 0) {
//       window.location.href = "/result";
//       return;
//     }

//     const globalTimer = setInterval(() => {
//       setGlobalTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(globalTimer);
//   }, [globalTimeLeft]);

//   useEffect(() => {
//     setSectionTimeLeft(section.duration);
//   }, [sectionIndex]);

//   useEffect(() => {
//     if (sectionTimeLeft <= 0) {
//       handleNextSection();
//       return;
//     }

//     const timer = setInterval(() => {
//       setSectionTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [sectionTimeLeft]);

//   const handleSubmitQuestion = () => {
//     setMockTestData((prev) => {
//       const updated = { ...prev };
//       const updatedSections = [...updated.sections];
//       const currentSection = { ...updatedSections[sectionIndex] };
//       const updatedQuestions = [...currentSection.questions];

//       updatedQuestions[questionIndex] = {
//         ...updatedQuestions[questionIndex],
//         submitted: true,
//       };

//       currentSection.questions = updatedQuestions;
//       updatedSections[sectionIndex] = currentSection;
//       updated.sections = updatedSections;

//       return updated;
//     });

//     const allAnswered = section.questions.every((q, idx) =>
//       idx === questionIndex ? true : q.submitted
//     );

//     if (questionIndex < section.questions.length - 1) {
//       setQuestionIndex((prev) => prev + 1);
//     } else if (allAnswered) {
//       handleNextSection();
//     }
//   };

//   const handleNextSection = () => {
//     if (sectionIndex < mockTestData.sections.length - 1) {
//       setSectionIndex((prev) => prev + 1);
//       setQuestionIndex(0);
//     } else {
//       window.location.href = "/result";
//     }
//   };

//   const isAnswered = question.submitted === true;

//   return (
//     <div className="min-h-screen w-[70%] mx-auto bg-gray-50 flex flex-col items-center justify-center p-6">
//       <h2 className="text-3xl font-semibold text-blue-700 mb-2">
//         {section.title}
//       </h2>

//       <div className="flex gap-8 items-center mt-2">
//         <Timer label="Section Time Left" timeLeft={sectionTimeLeft} />
//         <Timer label="Total Exam Time" timeLeft={globalTimeLeft} />
//       </div>

//       <div className="mt-6 w-full max-w-2xl">
//         <QuestionCard question={question} />
//       </div>

//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handleSubmitQuestion}
//           disabled={isAnswered}
//           className={`px-6 py-3 rounded-xl text-lg text-white ${
//             isAnswered
//               ? "bg-green-500 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {isAnswered ? "Submitted" : "Submit"}
//         </button>
//       </div>

//       <p className="mt-4 text-gray-600">
//         Question {questionIndex + 1} of {section.questions.length}
//       </p>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { mockTestData as initialMockTestData } from "./data/mockTesta";
import Timer from "./components/Timer";
import QuestionCard from "./components/QuestionCard";

export default function Page() {
  const [mockTestData, setMockTestData] = useState(initialMockTestData);

  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  // Global Exam Timer (sum of all section durations)
  const totalExamTime = mockTestData.sections.reduce(
    (acc, s) => acc + s.duration,
    0
  );

  const [globalTimeLeft, setGlobalTimeLeft] = useState(totalExamTime);
  const [sectionTimeLeft, setSectionTimeLeft] = useState(
    mockTestData.sections[0].duration
  );

  const section = mockTestData.sections[sectionIndex];
  const question = section.questions[questionIndex];

  // 🔹 Global Timer
  useEffect(() => {
    if (globalTimeLeft <= 0) {
      window.location.href = "/result";
      return;
    }

    const globalTimer = setInterval(() => {
      setGlobalTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(globalTimer);
  }, [globalTimeLeft]);

  // 🔹 Section Timer
  useEffect(() => {
    setSectionTimeLeft(section.duration);
  }, [sectionIndex]);

  useEffect(() => {
    if (sectionTimeLeft <= 0) {
      handleNextSection();
      return;
    }

    const timer = setInterval(() => {
      setSectionTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [sectionTimeLeft]);

  // 🔹 Submit question
  const handleSubmitQuestion = () => {
    setMockTestData((prev) => {
      const updated = { ...prev };
      const updatedSections = [...updated.sections];
      const currentSection = { ...updatedSections[sectionIndex] };
      const updatedQuestions = [...currentSection.questions];

      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        submitted: true,
      };

      currentSection.questions = updatedQuestions;
      updatedSections[sectionIndex] = currentSection;
      updated.sections = updatedSections;

      return updated;
    });

    const allAnswered = section.questions.every((q, idx) =>
      idx === questionIndex ? true : q.submitted
    );

    if (questionIndex < section.questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else if (allAnswered) {
      handleNextSection();
    }
  };

  // 🔹 Move to next section or finish
  const handleNextSection = () => {
    if (sectionIndex < mockTestData.sections.length - 1) {
      setSectionIndex((prev) => prev + 1);
      setQuestionIndex(0);
    } else {
      window.location.href = "/result";
    }
  };

  const isAnswered = question.submitted === true;

  return (
    <div className="min-h-screen w-[70%] mx-auto bg-gray-50 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-2">
        {section.title}
      </h2>

      {/* 🔹 Both Timers */}
      <div className="flex gap-8 items-center mt-2">
        <Timer label="Section Time Left" timeLeft={sectionTimeLeft} />
        <Timer label="Total Exam Time" timeLeft={globalTimeLeft} />
      </div>

      <div className="mt-6 w-full max-w-2xl">
        <QuestionCard question={question} />
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={handleSubmitQuestion}
          disabled={isAnswered}
          className={`px-6 py-3 rounded-xl text-lg text-white cursor-pointer ${
            isAnswered
              ? "bg-green-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isAnswered ? "Submitted" : "Submit"}
        </button>
      </div>

      <p className="mt-4 text-gray-600">
        Question {questionIndex + 1} of {section.questions.length}
      </p>
    </div>
  );
}

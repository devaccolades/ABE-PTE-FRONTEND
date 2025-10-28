"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sections = [
  { name: "Speaking & Writing", duration: "54–67 mins" },
  { name: "Reading", duration: "29–30 mins" },
  { name: "Listening", duration: "30–43 mins" },
];
export default function Home() {
  const router = useRouter();
  const startExam = () => {
    router.push("/exam");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      {/* Container */}
      <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          PTE Mock Test
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-center mb-6">
          Prepare for your PTE Academic exam by taking this full mock test.
          Complete all three sections to get your final score.
        </p>

        {/* Test Info Card */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">
            Test Overview
          </h2>
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={index} className="flex justify-between text-gray-800">
                <span>{section.name}</span>
                <span className="font-medium">{section.duration}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600">
            Estimated total duration: ~2.5 hours
          </p>
        </div>

        {/* Rules / Info */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-gray-700 text-sm">
          • Complete all sections sequentially.
          <br />
          • You cannot see scores until all sections are finished.
          <br />
          • Ensure your microphone works for Speaking tasks.
          <br />• Auto-save is enabled for all answers.
        </div>

        {/* Start Button */}
        <div
          onClick={startExam}
          className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 p-4 rounded-4xl text-white text-[20px] font-bold items-center text-center"
        >
          Start Test
        </div>
      </div>
    </div>
  );
}

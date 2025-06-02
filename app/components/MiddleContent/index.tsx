import React from "react";
import { CheckCircle, Star, Award } from "lucide-react";

const MiddleContent: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto py-8 px-2 mt-20">
      <div className="relative w-fit mx-auto mb-8">
        <div className="text-2xl md:text-4xl font-bold text-black mb-4 text-center">
          Why <span className="text-blue-700">Choose</span> Us?
        </div>
        <svg className="absolute left-1/2 -translate-x-1/2 w-32 md:w-48 h-20 pointer-events-none rotate-180" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 20 Q100 40 190 20" stroke="#2563eb" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="8,8" opacity="0.7" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-yellow-500/20 p-6 rounded-lg shadow-lg text-gray-800 min-h-[380px] 
                        hover:scale-105 transition-transform duration-300 hover:text-white hover:bg-yellow-500/90"
        >
          <div className="flex justify-center mb-4">
            <img src="/assets/teacher.svg" className="w-[100px]"></img>
          </div>
          <div className="text-center font-bold">Expert Faculty</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 hover:text-white">
              <CheckCircle className="text-inherit mt-1 min-w-5" size={20} />
              Experience of teaching more than 4000 students and helping them achieve their dream college.
            </li>
            <li className="flex items-start gap-2 hover:text-white">
              <Star className="text-inherit mt-1 min-w-5" size={20} />
              Notable achievements include producing 600+ IITians and 1000+ NITians.
            </li>
            <li className="flex items-start gap-2 hover:text-white">
              <Award className="text-inherit mt-1 min-w-5" size={20} />
              Previously Senior Faculty at : Vidyamandir Classes(VMC), Shri Chaitanya
            </li>
          </ul>
        </div>

        <div
          className="bg-green-500/20 p-6 rounded-lg shadow-lg text-gray-800 min-h-[380px] 
                        hover:scale-105 transition-transform duration-300 hover:text-white hover:bg-green-500/90"
        >
          <div className="flex justify-center mb-4">
            <img src="/assets/recording.svg" className="w-[100px]"></img>
          </div>
          <div className="text-center font-bold">Live + Recorded Lectures</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 hover:text-white">
              <CheckCircle className="text-inherit mt-1 min-w-5" size={20} />
              Students can attend live classes or watch recorded lectures at their convenience.
              <br />
              Some students perform better with recorded lectures.
            </li>
            <li className="flex items-start gap-2 hover:text-white">
              <Star className="text-inherit mt-1 min-w-5" size={20} />
              Student Dashboard for easy access to all recorded lectures and study materials.
            </li>
          </ul>
        </div>

        <div
          className="bg-red-500/20 p-6 rounded-lg shadow-lg text-gray-800 min-h-[380px] 
                        hover:scale-105 transition-transform duration-300 hover:text-white hover:bg-red-500/90"
        >
          <div className="flex justify-center mb-4">
            <img src="/assets/book.svg" className="w-[80px]"></img>
          </div>
          <div className="text-center font-bold">Expert Material</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 hover:text-white">
              <CheckCircle className="text-inherit mt-1 min-w-5" size={20} />
              Pawan sir believes in quality over quantity, providing concise and effective study material.
            </li>
            <li className="flex items-start gap-2 hover:text-white">
              <Star className="text-inherit mt-1 min-w-5" size={20} />
              Combining the best of multiple sources.
            </li>
          </ul>
        </div>

        <div
          className="bg-blue-500/20 p-6 rounded-lg shadow-lg text-gray-800 min-h-[380px] 
                        hover:scale-105 transition-transform duration-300 hover:text-white hover:bg-blue-500/90"
        >
          <div className="flex justify-center mb-4">
            <img src="/assets/teacher.svg" className="w-[100px]"></img>
          </div>
          <div className="text-center font-bold">Regular Testing</div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 hover:text-white">
              <CheckCircle className="text-inherit mt-1 min-w-5" size={20} />
              Taking regular Tests to ensure students' understanding and retention of concepts.
            </li>
            <li className="flex items-start gap-2 hover:text-white">
              <Star className="text-inherit mt-1" size={20} />
              Assisting students in identifying their strengths and weaknesses.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;

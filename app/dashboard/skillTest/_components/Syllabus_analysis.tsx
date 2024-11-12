// SyllabusAnalysis.tsx
import React from 'react';
import ProgressBar from './ProgressBar';

const SyllabusAnalysis: React.FC = () => {
  return (
    <div className="border-2 p-4 flex flex-col z-[-999] gap-8 w-[22rem] md:w-[30rem] rounded-lg items-center  ">
      <h2 className="text-sm font-semibold text-start w-full">Syllabus Wise Analysis</h2>

      <ProgressBar label="HTML Tools, Forms, History" value={80} color="blue" bgColor="blue-100" />
      <ProgressBar label="Tags & References in HTML" value={60} color="orange" bgColor="orange-100" />
      <ProgressBar label="Tables & References in HTML" value={24} color="red" bgColor="red-100" />
      <ProgressBar label="Tables & CSS Basics" value={96} color="green" bgColor="green-100" />
    </div>
  );
};

export default SyllabusAnalysis;

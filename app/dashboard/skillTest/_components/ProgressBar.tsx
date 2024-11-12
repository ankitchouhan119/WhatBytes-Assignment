
import React from 'react';
import { Progress } from "@/components/ui/progress";

// Define the valid color types for the Progress component
type ProgressBarColor = "red" | "blue" | "green" | "orange" | "pink" | "sky";

interface ProgressBarProps {
  label: string;
  value: number;
  color: ProgressBarColor; 
  bgColor: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color, bgColor }) => {
  return (
    <div className="w-full">
      <p>{label}</p>
      <div className="flex justify-between items-center gap-10">
        <Progress value={value} color={color} className={`bg-${bgColor}`} />
        <p className={`text-${color}-500 font-semibold`}>{value}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;

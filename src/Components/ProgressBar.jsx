import  { useState } from "react";

const ProgressBar = ({ value, max }) => {
  // Ensure the value is within the range of 10 to 1000
  const normalizedValue = Math.min(Math.max(value, 10), 1000);

  // Calculate the width percentage for the progress bar
  const widthPercentage = ((normalizedValue - 10) / (max - 10)) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${widthPercentage}%` }}
      ></div>
    </div>
  );
};

const Progress = () => {
  const [progress, setProgress] = useState(10);

  // Update the progress value (this could be tied to an event or state change)
  const updateProgress = (newValue) => {
    setProgress(newValue);
  };

  return (
    <div className="p-4">
      <ProgressBar value={progress} max={1000} />
      {/* Slider input to change the progress value */}
      <input
        type="range"
        min="10"
        max="1000"
        value={progress}
        onChange={(e) => updateProgress(parseInt(e.target.value, 10))}
        className="w-full mt-4"
      />
    </div>
  );
};

export default Progress;

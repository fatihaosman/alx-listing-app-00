import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-blue-500 hover:text-white"
    >
      {label}
    </button>
  );
};

export default Pill;

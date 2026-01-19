import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: string;
}

const StatCard = ({ icon, label, value, color = "#0D52AF" }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      {/* Icon Container */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}20` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>

      {/* Label */}
      <p className="text-gray-500 text-sm font-medium mb-2">{label}</p>

      {/* Value */}
      <p className="text-lg font-bold" style={{ color }}>
        {value}
      </p>
    </div>
  );
};

export default StatCard;

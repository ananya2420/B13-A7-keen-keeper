import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Text", value: 45 },
  { name: "Call", value: 25 },
  { name: "Video", value: 30 },
];

const COLORS = ["#8B5CF6", "#10B981", "#F59E0B"]; 

const Stats = () => {
  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold mb-5">
        Friendship Analytics
      </h1>

      {/* Chart Card */}
      <div className="w-full h-[400px] bg-white rounded-xl p-5 shadow-md">
        <h3 className="mb-2.5 text-gray-600">
          By Interaction Type
        </h3>

        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
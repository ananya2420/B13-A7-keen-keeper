import React, { useContext } from "react";
import { keeperContext } from "../../context/keeperContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#10B981", "#8B5CF6", "#F59E0B"];

const Stats = () => {
  const { storeKeeper, textList, videoEditing } =
    useContext(keeperContext);

  // ✅ COUNT FROM REAL DATA
  const callCount = storeKeeper.length;
  const textCount = textList.length;
  const videoCount = videoEditing.length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-5">
        Friendship Analytics
      </h1>

      {/* Chart */}
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
                <Cell key={index} fill={COLORS[index]} />
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
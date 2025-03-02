import { useState } from "react";

export default function VMCTable({ vmcData }) {
  const [sortConfig, setSortConfig] = useState({ key: "time", direction: "asc" });

  const sortedData = [...(vmcData?.entries || [])].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {["Time", "Spindle Speed (RPM)", "Temperature (°C)", "Power (kW)", "Status"].map(
              (header, index) => (
                <th
                  key={index}
                  className="p-3 border-b cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSort(header.toLowerCase().replace(/ /g, "_"))}
                >
                  {header} {sortConfig.key === header.toLowerCase().replace(/ /g, "_") ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((entry, index) => (
            <tr key={index} className="text-center border-b hover:bg-gray-50">
              <td className="p-3">{entry.time}</td>
              <td className="p-3">{entry.spindleSpeed} RPM</td>
              <td className="p-3">{entry.temperature}°C</td>
              <td className="p-3">{entry.power} kW</td>
              <td
                className={`p-3 font-semibold ${
                  entry.status === "Running"
                    ? "text-green-600"
                    : entry.status === "Idle"
                    ? "text-yellow-600"
                    : entry.status === "Maintenance"
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
              >
                {entry.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

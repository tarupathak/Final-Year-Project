import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ vmcData }) {
  const data = {
    labels: ["Running", "Idle", "Maintenance", "Error"],
    datasets: [
      {
        label: "Machine Status",
        data: vmcData?.statusDistribution || [50, 30, 10, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Running
          "rgba(255, 206, 86, 0.6)", // Idle
          "rgba(54, 162, 235, 0.6)", // Maintenance
          "rgba(255, 99, 132, 0.6)", // Error
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

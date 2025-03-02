import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ vmcData }) {
  const data = {
    labels: vmcData?.timestamps || ["00:00", "01:00", "02:00", "03:00", "04:00"],
    datasets: [
      {
        label: "Spindle Speed (RPM)",
        data: vmcData?.spindleSpeed || [1200, 1500, 1700, 1300, 1600],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Temperature (°C)",
        data: vmcData?.temperature || [40, 45, 43, 47, 42],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "VMC Machine Performance Over Time",
      },
    },
  };

  return <Line data={data} options={options} />;
}

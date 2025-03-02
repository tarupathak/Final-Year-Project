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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AreaChart({ vmcData }) {
  const data = {
    labels: vmcData?.timestamps || ["08:00", "09:00", "10:00", "11:00", "12:00"],
    datasets: [
      {
        label: "Spindle Speed (RPM)",
        data: vmcData?.spindleSpeed || [1200, 1300, 1250, 1400, 1350],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Temperature (°C)",
        data: vmcData?.temperature || [40, 42, 41, 43, 39],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
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
        text: "VMC Spindle Speed & Temperature",
      },
    },
  };

  return <Line data={data} options={options} />;
}

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ vmcData }) {
  const data = {
    labels: vmcData?.timestamps || ["08:00", "09:00", "10:00", "11:00", "12:00"],
    datasets: [
      {
        label: "Power Consumption (kW)",
        data: vmcData?.power || [5.2, 6.1, 5.8, 6.5, 5.9],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
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
        text: "VMC Power Consumption Over Time",
      },
    },
  };

  return <Bar data={data} options={options} />;
}

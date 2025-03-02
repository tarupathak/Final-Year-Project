"use client";
import Head from "next/head";
import LineChart from "./component/LineChart";
import PieChart from "./component/PieChart";
import BarChart from "./component/BarChart";
import AreaChart from "./component/AreaChart";
import ProgressBar from "./component/ProgressBar";
import Table from "./component/Table";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Impressive Dashboard with Chart.js and Tailwind CSS"
        />
      </Head>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your analytics dashboard</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards for quick stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">$12,345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">
            Conversion Rate
          </h2>
          <p className="text-2xl font-bold text-purple-600">8.5%</p>
        </div>
      </div>

      {/* Progress Bars Section
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Task Completion
          </h2>
          <ProgressBar progress={75} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Project Progress
          </h2>
          <ProgressBar progress={50} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sales Target
          </h2>
          <ProgressBar progress={90} />
        </div>
      </div> */}

      {/* Charts and Tables Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sales Over Time
          </h2>
          <LineChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            User Distribution
          </h2>
          <PieChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Revenue
          </h2>
          <BarChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Website Traffic
          </h2>
          <AreaChart />
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Transactions
          </h2>
          <Table />
        </div>
      </div>
    </div>
  );
}
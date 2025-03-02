"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import LineChart from "./component/LineChart";
import PieChart from "./component/PieChart";
import BarChart from "./component/BarChart";
import AreaChart from "./component/AreaChart";
import ProgressBar from "./component/ProgressBar";
import Table from "./component/Table";

export default function Home() {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    revenue: 0,
    conversionRate: 0,
    salesData: [],
    userDistribution: [],
    revenueData: [],
    trafficData: [],
    transactions: [],
  });

  useEffect(() => {
    const fetchData = () => {
      const newData = {
        totalUsers: Math.floor(Math.random() * 5000),
        revenue: (Math.random() * 50000).toFixed(2),
        conversionRate: (Math.random() * 10).toFixed(2),
        salesData: [
          { month: "Jan", value: Math.random() * 100 },
          { month: "Feb", value: Math.random() * 100 },
          { month: "Mar", value: Math.random() * 100 },
          { month: "Apr", value: Math.random() * 100 },
          { month: "May", value: Math.random() * 100 },
          { month: "Jun", value: Math.random() * 100 },
          { month: "Jul", value: Math.random() * 100 },
        ],
        userDistribution: [35, 25, 20, 20],
        revenueData: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        trafficData: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        transactions: Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          name: `User ${i + 1}`,
          amount: (Math.random() * 1000).toFixed(2),
          status: ["Completed", "Pending", "Failed"][
            Math.floor(Math.random() * 3)
          ],
        })),
      };
      setDashboardData(newData);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const sampleVMCData = {
    timestamps: ["08:00", "09:00", "10:00", "11:00", "12:00"],
    spindleSpeed: [1200, 1300, 1250, 1400, 1350],
    temperature: [40, 42, 41, 43, 39],
  };

  const sampleData = {
    timestamps: ["08:00", "09:00", "10:00", "11:00", "12:00"],
    spindleSpeed: [1200, 1300, 1250, 1400, 1350],
    temperature: [40, 42, 41, 43, 39],
    power: [5.2, 6.1, 5.8, 6.5, 5.9],
    statusDistribution: [50, 30, 10, 10], // Running, Idle, Maintenance, Error
  };

  const sampleTableData = {
    entries: [
      {
        time: "08:00",
        spindleSpeed: 1200,
        temperature: 40,
        power: 5.2,
        status: "Running",
      },
      {
        time: "09:00",
        spindleSpeed: 1300,
        temperature: 42,
        power: 6.1,
        status: "Idle",
      },
      {
        time: "10:00",
        spindleSpeed: 1250,
        temperature: 41,
        power: 5.8,
        status: "Running",
      },
      {
        time: "11:00",
        spindleSpeed: 1400,
        temperature: 43,
        power: 6.5,
        status: "Maintenance",
      },
      {
        time: "12:00",
        spindleSpeed: 1350,
        temperature: 39,
        power: 5.9,
        status: "Error",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="VMC Machine Analytics Dashboard" />
    </Head>
  
    <header className="mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">VMC Dashboard</h1>
      <p className="text-sm sm:text-base text-gray-600">Real-time analytics for VMC machines</p>
    </header>
  
    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700">Total Users</h2>
        <p className="text-xl sm:text-2xl font-bold text-blue-600">
          {dashboardData.totalUsers}
        </p>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700">Revenue</h2>
        <p className="text-xl sm:text-2xl font-bold text-green-600">
          ${dashboardData.revenue}
        </p>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700">Conversion Rate</h2>
        <p className="text-xl sm:text-2xl font-bold text-purple-600">
          {dashboardData.conversionRate}%
        </p>
      </div>
    </div>
  
    {/* Charts and Table Grid */}
    <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <LineChart vmcData={sampleVMCData} />
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <BarChart vmcData={sampleData} />
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <AreaChart vmcData={sampleData} />
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <PieChart vmcData={sampleData} />
      </div>
    </div>
  
    {/* Recent Transactions Table */}
    <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
      <Table vmcData={sampleTableData} />
    </div>
  </div>
  );
}

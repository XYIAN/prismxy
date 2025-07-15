"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useTheme } from "@/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface StatsChartProps {
  data: {
    labels: string[];
    values: number[];
  };
  type?: "bar" | "doughnut";
}

const StatsChart: React.FC<StatsChartProps> = ({ data, type = "bar" }) => {
  const { currentTheme } = useTheme();

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Statistics",
        data: data.values,
        backgroundColor: [
          currentTheme.primary,
          currentTheme.secondary,
          currentTheme.accent,
          currentTheme.primary + "80",
        ],
        borderColor: [
          currentTheme.primary,
          currentTheme.secondary,
          currentTheme.accent,
          currentTheme.primary + "80",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: currentTheme.surface,
        titleColor: currentTheme.text,
        bodyColor: currentTheme.textSecondary,
        borderColor: currentTheme.primary,
        borderWidth: 1,
      },
    },
    scales:
      type === "bar"
        ? {
            x: {
              ticks: {
                color: currentTheme.textSecondary,
              },
              grid: {
                color: currentTheme.textSecondary + "20",
              },
            },
            y: {
              ticks: {
                color: currentTheme.textSecondary,
              },
              grid: {
                color: currentTheme.textSecondary + "20",
              },
            },
          }
        : undefined,
  };

  return (
    <div className="w-full h-64 p-4 rounded-2xl backdrop-blur-lg border">
      {type === "bar" ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Doughnut data={chartData} options={options} />
      )}
    </div>
  );
};

export default StatsChart;

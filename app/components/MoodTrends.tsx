"use client";

import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { MoodContext } from "../contexts/MoodContext";
import moodTrendsStyles from "../styles/mood-trends.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const MoodTrends = () => {
  const { moodData } = useContext(MoodContext);

  const data = {
    labels: moodData.map((mood) => mood.date),
    datasets: [
      {
        label: "Mood Score",
        data: moodData.map((mood) => mood.score),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className={moodTrendsStyles.trends}>
      <Line data={data} />
    </div>
  );
};

export default MoodTrends;

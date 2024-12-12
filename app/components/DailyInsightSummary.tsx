"use client";

import React, { useContext, useState, useEffect, useMemo } from "react";
import { MoodContext } from "../contexts/MoodContext";
import neonStyles from "../styles/neon.module.css";
import dailyInsight from "../styles/daily-insights.module.css";

const DailyInsights = () => {
  const { moodData } = useContext(MoodContext);

  const [tasksCompleted, setTasksCompleted] = useState<number | null>(null);

  useEffect(() => {
    const randomTasks = Math.floor(Math.random() * 10 + 1);
    setTasksCompleted(randomTasks);
  }, []);

  const moodScore = useMemo(() => {
    if (moodData.length) {
      return (
        moodData.reduce((acc, mood) => acc + mood.score, 0) / moodData.length
      ).toFixed(1);
    }

    return "N/A";
  }, [moodData]);

  if (tasksCompleted === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={dailyInsight.insight}>
      <h2 className={neonStyles.neonText}>Daily Insights</h2>
      <div>
        <p className={neonStyles.neonText}>
          Tasks Completed: <strong>{tasksCompleted}</strong>
        </p>
        <p className={neonStyles.neonText}>
          Mood Score: <strong>{moodScore}</strong>
        </p>
      </div>
    </div>
  );
};

export default DailyInsights;

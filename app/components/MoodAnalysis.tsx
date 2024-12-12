"use client";

import React, { useCallback, useContext } from "react";
import neon from "../styles/neon.module.css";
import analysisStyles from "../styles/analysis.module.css";
import { MoodContext } from "../contexts/MoodContext";

const MoodAnalysis = () => {
  const { moodData } = useContext(MoodContext);

  const generateInsight = useCallback(() => {
    if (moodData.length < 2) return "Not enough data for insights!";
    const recentMoods = moodData.slice(-7).map((mood) => mood.score);

    const trend = recentMoods.reduce(
      (acc, cur, i, arr) =>
        acc + (cur > arr[i - 1] ? 1 : cur < arr[i - 1] ? -1 : 0),
      0
    );

    if (trend > 0)
      return "Your mood has been improving over the past few days!";
    if (trend < 0)
      return "It seems like you’ve been feeling a bit down. Hang in there!";
    return "Your mood has been varying lately. Try finding balance!";
  }, [moodData]);

  return (
    <div className={analysisStyles.analysis}>
      <h2 className={neon.neonText}>Mood Analysis</h2>
      <p className={neon.neonText}>{generateInsight()}</p>
    </div>
  );
};

export default MoodAnalysis;

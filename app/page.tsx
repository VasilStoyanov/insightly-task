"use client";

import React from "react";
import { MoodProvider } from "./contexts/MoodContext";
import DailyInsights from "./components/DailyInsightSummary";
import MoodTracker from "./components/MoodTracker";
import MoodAnalysis from "./components/MoodAnalysis";
import MoodTrends from "./components/MoodTrends";

const HomePage = () => {
  return (
    <MoodProvider>
      <div className="main">
        <MoodTracker />
        <MoodTrends />
        <DailyInsights />
        <MoodAnalysis />
      </div>
    </MoodProvider>
  );
};

export default HomePage;

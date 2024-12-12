"use client";

import React, { useContext } from "react";
import neonStyle from "../styles/neon.module.css";
import { MoodContext } from "../contexts/MoodContext";

const MoodTracker = () => {
  const { addMood } = useContext(MoodContext);

  return (
    <div>
      <h2 className={neonStyle["neon-text-tracker"]}>Log Your Mood:</h2>
      <div style={{ display: "inline" }}>
        <button className={neonStyle["neon-button"]} onClick={() => addMood(3)}>
          😊 Happy
        </button>
        <button
          className={neonStyle["neon-button-neutral"]}
          onClick={() => addMood(2)}
        >
          😐 Neutral
        </button>
        <button
          className={neonStyle["neon-button-sad"]}
          onClick={() => addMood(1)}
        >
          😢 Sad
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;

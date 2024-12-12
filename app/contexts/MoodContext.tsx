"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

interface MoodEntry {
  date: string;
  score: number;
}

interface MoodContextType {
  moodData: MoodEntry[];
  addMood: (score: number) => void;
}

export const MoodContext = createContext<MoodContextType>({
  moodData: [],
  addMood: () => {},
});

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [moodData, setMoodData] = useState<MoodEntry[]>([]);

  const addMood = useCallback((score: number) => {
    const newEntry: MoodEntry = {
      date: new Date().toLocaleDateString(),
      score,
    };
    setMoodData((prev) => [...prev, newEntry]);
  }, []);

  const value = useMemo(() => ({ moodData, addMood }), [moodData, addMood]);

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
};

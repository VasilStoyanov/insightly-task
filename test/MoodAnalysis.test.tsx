import React from "react";
import { render, screen } from "@testing-library/react";
import { MoodContext } from "../app/contexts/MoodContext";
import MoodAnalysis from "../app/components/MoodAnalysis";
import "@testing-library/jest-dom";

describe("MoodAnalysis Component", () => {
  const renderWithMoodData = (moodData) => {
    return render(
      <MoodContext.Provider value={{ moodData }}>
        <MoodAnalysis />
      </MoodContext.Provider>
    );
  };

  it("renders without crashing", () => {
    renderWithMoodData([]);
    expect(screen.getByText(/Mood Analysis/i)).toBeInTheDocument();
  });

  it("displays a message when there is not enough data", () => {
    renderWithMoodData([]);
    expect(
      screen.getByText(/Not enough data for insights!/i)
    ).toBeInTheDocument();
  });

  it("displays an improving trend message", () => {
    const moodData = [{ score: 2 }, { score: 3 }, { score: 4 }, { score: 5 }];
    renderWithMoodData(moodData);
    expect(
      screen.getByText(/Your mood has been improving over the past few days!/i)
    ).toBeInTheDocument();
  });

  it("displays a declining trend message", () => {
    const moodData = [{ score: 5 }, { score: 4 }, { score: 3 }, { score: 2 }];
    renderWithMoodData(moodData);
    expect(
      screen.getByText(
        /It seems like you’ve been feeling a bit down. Hang in there!/i
      )
    ).toBeInTheDocument();
  });

  it("uses only the last 7 mood entries for insights", () => {
    const moodData = [
      { score: 1 },
      { score: 2 },
      { score: 3 },
      { score: 4 },
      { score: 5 },
      { score: 6 },
      { score: 7 },
      { score: 8 },
    ];
    renderWithMoodData(moodData);
    expect(
      screen.getByText(/Your mood has been improving over the past few days!/i)
    ).toBeInTheDocument();
  });
});

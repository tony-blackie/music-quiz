"use client";
import { UISong } from "@/app/quiz/[questionIndex]/types";
import { SONGS_COUNT_PER_QUESTION } from "@/constants";
import { getSnapshot, subscribe } from "@/services/serializer";
import { useSyncExternalStore } from "react";

const Header = () => {
  const data = useSyncExternalStore(subscribe, getSnapshot) || "";
  let count;
  try {
    const parsed = JSON.parse(data) as { [questionNumber: number]: UISong[] };
    count = Object.values(parsed).reduce((acc, current) => {
      let selectionCount = 0;

      const isQuestionAnsweredCorrectly = current.some(
        (answer) => answer.isCorrect && answer.isSelected,
      );

      current.forEach((answer) => {
        if (isQuestionAnsweredCorrectly && answer.isSelected) {
          selectionCount += 1;
        }
      });

      return acc + SONGS_COUNT_PER_QUESTION - selectionCount;
    }, 0);
  } catch (e) {
    console.log("there was an error: ", e);
  }

  console.log("header render");

  return (
    <div className="flex justify-end w-full">
      <div>Your Score: {count}</div>
    </div>
  );
};

export default Header;

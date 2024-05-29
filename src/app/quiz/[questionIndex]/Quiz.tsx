"use client";

import { useCallback, useEffect, useState } from "react";
import Answer from "./Answer";
import { UISong } from "./types";
import ArtistDetails from "./ArtistDetails";

type Props = {
  questionIndex: number;
  answers: UISong[];
};

const Quiz = ({ questionIndex, answers: initialAnswers }: Props) => {
  const [answers, setAnswers] = useState(initialAnswers);

  console.log("answers: ", answers);

  const correctAnswer = answers.find((answer) => answer.isCorrect);

  const handleAnswerSelect = useCallback(
    (selectedAnswerIndex: number) => {
      const currentAnswer = answers[selectedAnswerIndex];

      if (currentAnswer.isCorrect && !currentAnswer.isSelected) {
        // handleSetScore()
      }

      const isCorrectAnswerSelected = correctAnswer?.isSelected;

      setAnswers(
        answers.map((answer, i) => {
          return {
            ...answer,
            isSelected:
              (!isCorrectAnswerSelected && selectedAnswerIndex === i) ||
              answer.isSelected,
            isActive: selectedAnswerIndex === i,
          };
        }),
      );
    },
    [answers, correctAnswer],
  );

  const activeAnswer = answers.find((answer) => answer.isActive);

  return (
    // <div className="flex flex-row w-full">
    <>
      <div className="text-mango-50 basis-1/3 shrink">
        <div>
          <h1 className="text-2xl font-bold">Song #{questionIndex}</h1>
          <p className="py-2">
            Listen to the audio and guess the song from the list
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 px-8 py-4 bg-mango-300 rounded-xl lg:flex-row">
          <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-mango-700 via-mango-500 to-mango-400 rounded-xl shrink-0">
            {correctAnswer?.isSelected ? (
              <img src={correctAnswer.songImageUrl} />
            ) : (
              <div className="text-4xl font-bold text-mango-50">?</div>
            )}
          </div>
          <audio
            src={correctAnswer?.audioUrl}
            controls
            className="w-full grow"
          />
        </div>

        <div>
          {answers.map((answer, i) => (
            <Answer
              key={answer.id}
              {...answer}
              handleAnswerSelect={handleAnswerSelect}
              index={i}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div></div>
        {activeAnswer && <ArtistDetails {...activeAnswer} />}
      </div>
    </>
    // </div>
  );
};

export default Quiz;

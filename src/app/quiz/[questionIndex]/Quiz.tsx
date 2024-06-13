"use client";

import { useCallback, useEffect, useState } from "react";
import Answer from "./Answer";
import { Song, UISong } from "./types";
import ArtistDetails from "./ArtistDetails";
import { ButtonFlat } from "../../../components";
import Link from "next/link";
import {
  API_URL,
  FINAL_QUESTION_NUMBER,
  Routes,
  SONGS_COUNT_PER_QUESTION,
} from "../../../constants";
import Header from "../../../components/ui-elements/Header/Header";
import { QuizSerializer } from "../../../services/serializer";
import { getRandomValueFromZeroToNum } from "./utils";

type Props = {
  questionIndex: number;
  answers: Song[];
};

const Quiz = ({ questionIndex, answers: initialAnswers }: Props) => {
  const correctAnswerIndex = getRandomValueFromZeroToNum(
    SONGS_COUNT_PER_QUESTION,
  );

  const preparedAnswers: UISong[] = getPreparedAnswers(
    initialAnswers,
    correctAnswerIndex,
  );

  const [answers, setAnswers] = useState(preparedAnswers);

  console.log("answers: ", answers);

  const correctAnswer = answers.find((answer) => answer.isCorrect);

  console.log("correctAnswer: ", correctAnswer);

  const handleAnswerSelect = useCallback(
    (selectedAnswerIndex: number) => {
      const isCorrectAnswerSelected = correctAnswer?.isSelected;

      const newAnswers = answers.map((answer, i) => {
        return {
          ...answer,
          isSelected:
            (!isCorrectAnswerSelected && selectedAnswerIndex === i) ||
            answer.isSelected,
          isActive: selectedAnswerIndex === i,
        };
      });

      setAnswers(newAnswers);

      QuizSerializer.write({
        [questionIndex]: newAnswers,
      });
    },
    [answers, correctAnswer],
  );

  const activeAnswer = answers.find((answer) => answer.isActive);

  const getButtonLink = () => {
    if (questionIndex !== FINAL_QUESTION_NUMBER) {
      return Routes.QUIZ + `/${questionIndex + 1}`;
    }

    return Routes.SCORE;
  };

  return (
    <>
      <Header />
      <div className="w-full h-full overflow-auto bg-mango-950">
        <div className="flex flex-col w-full px-12 pt-12 bg-mango-950 md:flex-row">
          <div className="text-mango-50 basis-1/3 shrink">
            <div>
              <h1 className="text-2xl font-bold">Song #{questionIndex}</h1>
              <p className="py-8">
                Listen to the audio and guess the song from the list
              </p>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 px-8 py-4 bg-mango-400 rounded-xl lg:flex-row">
              <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-mango-900 via-mango-700 to-mango-500 rounded-xl shrink-0">
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
          <div className="flex-1 pl-8">
            {activeAnswer && <ArtistDetails {...activeAnswer} />}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 pb-8">
            <Link href={getButtonLink()}>
              <ButtonFlat
                text="Next Question"
                disabled={!correctAnswer?.isSelected}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;

const getPreparedAnswers = (question: Song[], correctAnswerIndex: number) =>
  question.map((answer, i) => {
    return {
      ...answer,
      audioUrl: `${API_URL}${answer.audioUrl}`,
      songImageUrl: `${API_URL}${answer.songImageUrl}`,
      artistImageUrl: `${API_URL}${answer.artistImageUrl}`,
      isCorrect: i + 1 === correctAnswerIndex,
      isSelected: false,
      isActive: false,
    };
  });

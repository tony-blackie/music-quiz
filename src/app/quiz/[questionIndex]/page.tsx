import { API_URL, SONGS_COUNT_PER_QUESTION } from "@/constants";
import Quiz from "./Quiz";
import { getRandomValueFromZeroToNum } from "./utils";
import { Song, UISong } from "./types";

const getQuestion = async (questionIndex: string | number): Promise<Song[]> => {
  const res = await fetch(`${API_URL}/question/${questionIndex}`);

  if (!res.ok) {
    throw new Error("Failed to fetch the question data");
  }

  return res.json();
};

export default async function QuizPage({
  params,
}: {
  params: { questionIndex: string };
}) {
  const questionIndex = parseInt(params.questionIndex, 10);
  const correctAnswerIndex = getRandomValueFromZeroToNum(
    SONGS_COUNT_PER_QUESTION,
  );

  const answers = await getQuestion(questionIndex);

  const preparedAnswers: UISong[] = getPreparedAnswers(
    answers,
    correctAnswerIndex,
  );

  return <Quiz questionIndex={questionIndex} answers={preparedAnswers} />;
}

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

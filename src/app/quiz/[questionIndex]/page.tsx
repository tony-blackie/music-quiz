import { API_URL } from "@/constants";
import Quiz from "./Quiz";
import { Song } from "./types";
import { Suspense } from "react";

export default async function QuizPage({
  params,
}: {
  params: { questionIndex: string };
}) {
  const questionIndex = parseInt(params.questionIndex, 10);

  const answers = await getQuestion(questionIndex);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Quiz questionIndex={questionIndex} answers={answers} />
    </Suspense>
  );
}

const getQuestion = async (questionIndex: string | number): Promise<Song[]> => {
  const url = `${API_URL}/question/${questionIndex}`;

  const result = [];

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch the question data");
    }

    return res.json();
  } catch (e) {
    result.push(e);
    console.log("error: ", e);
  }

  return result as Song[];
};

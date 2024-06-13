import { API_URL, SONGS_COUNT_PER_QUESTION } from "../../../constants";
import Quiz from "./Quiz";
import { getRandomValueFromZeroToNum } from "./utils";
import { Song, UISong } from "./types";

export default async function QuizPage({
  params,
}: {
  params: { questionIndex: string };
}) {
  const questionIndex = parseInt(params.questionIndex, 10);

  console.log("QUiz render");

  const answers = await getQuestion(questionIndex);

  console.log("answersssss: ", answers);

  return <Quiz questionIndex={questionIndex} answers={answers} />;
}

const getQuestion = async (questionIndex: string | number): Promise<Song[]> => {
  const url = `${API_URL}/question/${questionIndex}`;

  console.log("url: ", url);

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

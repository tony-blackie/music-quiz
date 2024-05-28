import { API_URL, SONGS_COUNT_PER_QUESTION } from "@/constants";
import Quiz from "./Quiz";
import { getRandomValueFromZeroToNum } from "./utils";

const getQuestion = async (questionIndex: string | number) => {
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
  const randomSongIndex = getRandomValueFromZeroToNum(SONGS_COUNT_PER_QUESTION);

  const audioUrl = `${API_URL}/songs/${questionIndex}-${randomSongIndex}.mp3`;

  const question = await getQuestion(questionIndex);

  console.log("question: ", question);

  return (
    <div className="flex w-4/5 px-12 py-24 font-sans rounded-2xl h-4/5 bg-mango-950">
      <Quiz audioUrl={audioUrl} questionIndex={questionIndex} />;
    </div>
  );
}

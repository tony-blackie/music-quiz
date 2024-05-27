import { API_URL, SONGS_COUNT_PER_QUESTION } from "@/constants";
import Quiz from "./Quiz";
import { getRandomValueFromZeroToNum } from "./utils";

const QuizPage = ({ params }: { params: { questionIndex: string } }) => {
  const questionIndex = parseInt(params.questionIndex, 10);
  const randomSongIndex = getRandomValueFromZeroToNum(SONGS_COUNT_PER_QUESTION);

  const audioUrl = `${API_URL}/songs/${questionIndex}-${randomSongIndex}.mp3`;

  return (
    <div className="flex w-4/5 px-12 py-24 font-sans rounded-2xl h-4/5 bg-mango-950">
      <Quiz audioUrl={audioUrl} questionIndex={questionIndex} />;
    </div>
  );
};

export default QuizPage;

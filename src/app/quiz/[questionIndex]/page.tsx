import { API_URL } from "@/constants";
import Quiz from "./Quiz";

const QuizPage = ({ params }: { params: { questionIndex: string } }) => {
  const audioUrl = `${API_URL}/songs/1-1.mp3`;

  const { questionIndex } = params;

  return (
    <div className="flex w-4/5 px-12 py-24 font-sans rounded-2xl h-4/5 bg-mango-950">
      <Quiz audioUrl={audioUrl} questionIndex={parseInt(questionIndex, 10)} />;
    </div>
  );
};

export default QuizPage;

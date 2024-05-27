import { API_URL } from "@/constants";
import Quiz from "./Quiz";

const QuizPage = () => {
  const audioUrl = `${API_URL}/songs/1-1.mp3`;

  return (
    <div className="flex w-4/5 px-12 py-24 font-sans rounded-2xl h-4/5 bg-mango-950">
      <Quiz audioUrl={audioUrl} />;
    </div>
  );
};

export default QuizPage;

"use client";

import Answer from "./Answer";
import { UISong } from "./types";

type Props = {
  audioUrl: string;
  questionIndex: number;
  answers: UISong[];
};

const Quiz = ({ audioUrl, questionIndex, answers }: Props) => {
  return (
    <div className="w-full text-mango-50">
      <div>
        <h1 className="text-2xl font-bold">Song #{questionIndex}</h1>
        <p className="py-2">
          Listen to the audio and guess the song from the list
        </p>
      </div>
      <div className="flex items-center justify-between w-full px-8 py-4 bg-mango-300 rounded-xl">
        <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-mango-700 via-mango-500 to-mango-400 rounded-xl">
          <div className="text-4xl font-bold text-mango-50">?</div>
        </div>
        <audio src={audioUrl} controls className="pl-8 grow" />
      </div>

      <div>
        {answers.map((answer, i) => (
          <Answer key={answer.id} {...answer} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;

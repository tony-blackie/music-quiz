"use client";

import { useParams } from "next/navigation";

type Props = {
  audioUrl: string;
};

const Quiz = ({ audioUrl }: Props) => {
  const params = useParams();

  return (
    <div className="w-full text-mango-50">
      <h1 className="text-2xl font-bold">Song #{params.questionIndex}</h1>
      <p>Listen to the audio and guess the song from the list</p>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center w-40 h-40 bg-gradient-to-r from-mango-200 via-mango-500 to-mango-700">
          <div className="text-4xl font-bold text-mango-50">?</div>
        </div>
        <audio src={audioUrl} controls />
      </div>
    </div>
  );
};

export default Quiz;

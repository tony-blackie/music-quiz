"use client";

import { API_URL } from "@/constants";
import { useParams } from "next/navigation";

const Quiz = () => {
  const params = useParams();

  return (
    <div>
      <h1>Song #{params.questionIndex}</h1>
      <audio src={`${API_URL}/songs/1-1.mp3`} controls />
      <div>Quiz</div>
    </div>
  );
};

export default Quiz;

"use client";

import { ButtonFlat } from "@/components";
import { INITIAL_QUESTION_INDEX, Routes } from "@/constants";
import { QuizSerializer, getSnapshot, subscribe } from "@/services/serializer";
import Link from "next/link";
import { getStoreValues } from "../utils/store";
import { useSyncExternalStore } from "react";
import PageContainer from "@/components/ui-elements/PageContainer/PageContainer";
import dynamic from "next/dynamic";

const Score = dynamic(
  () => {
    const store = useSyncExternalStore(subscribe, getSnapshot);
    const { name, count } = getStoreValues(store);

    const handleButtonClick = () => {
      QuizSerializer.clear();
    };

    return (
      <PageContainer>
        <div className="w-full h-full flex flex-col justify-around bg-mango-950 text-mango-50">
          <div>
            <div className="font-bold px-8 uppercase text-center">{name}</div>
            <div className="text-center">You got {count} out of 12 points!</div>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href={Routes.QUIZ + `/${INITIAL_QUESTION_INDEX}`}
              className="w-44"
            >
              <ButtonFlat text="Restart Quiz" onClick={handleButtonClick} />
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  },
  { ssr: false },
);

export default Score;

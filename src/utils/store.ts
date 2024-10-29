import { SONGS_COUNT_PER_QUESTION } from "@/constants";
import { UISong } from "@/app/quiz/[questionIndex]/types";

export const getStoreValues = (stringifiedStore: string) => {
  const { quiz, name } = JSON.parse(stringifiedStore);
  let count: number = 0;
  let parsedName: string = "";
  try {
    const parsed = JSON.parse(quiz) as { [questionNumber: number]: UISong[] };
    count = Object.values(parsed).reduce((acc, current) => {
      let selectionCount = 0;

      const isQuestionAnsweredCorrectly = current.some(
        (answer) => answer.isCorrect && answer.isSelected,
      );

      current.forEach((answer) => {
        if (answer.isSelected) {
          selectionCount += 1;
        }
      });

      return (
        acc +
        (isQuestionAnsweredCorrectly
          ? SONGS_COUNT_PER_QUESTION - selectionCount
          : 0)
      );
    }, 0);
  } catch (e) {}

  try {
    parsedName = JSON.parse(name);
  } catch (e) {}

  return { count, name };
};

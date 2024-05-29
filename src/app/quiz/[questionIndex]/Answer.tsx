import { UISong } from "./types";
import Close from "../../images/close";
import Check from "../../images/check";

type Props = UISong & {
  index: number;
};

const Answer = ({ name, artist, index }: Props) => {
  const isSelected = true;
  const isCorrect = true;

  const getImage = (isSelected: boolean, isCorrect: boolean) => {
    if (!isSelected) {
      return null;
    }

    return isCorrect ? (
      <Check className="w-4 h-4 fill-mango-50" alt="Correct" />
    ) : (
      <Close className="w-4 h-4 fill-mango-50" alt="Incorrect" />
    );
  };

  return (
    <div className="flex items-center w-full px-4 py-4 my-5 border border-mango-200 rounded-xl">
      <div className="flex items-center justify-center w-6 h-6 border rounded-full border-mango-200">
        {getImage(isSelected, isCorrect)}
      </div>
      <div className="px-4">{`0${index + 1}: ${artist} - ${name}`}</div>
    </div>
  );
};

export default Answer;

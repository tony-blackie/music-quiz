import { UISong } from "./types";
import Close from "../../images/close";
import Check from "../../images/check";

type Props = UISong & {
  index: number;
  handleAnswerSelect: (answerIndex: number) => void;
};

const Answer = ({
  name,
  artist,
  index,
  isSelected,
  isCorrect,
  handleAnswerSelect,
}: Props) => {
  const getImage = (isSelected: boolean, isCorrect: boolean) => {
    if (!isSelected) {
      return { icon: null, styles: "" };
    }

    return isCorrect
      ? {
          icon: <Check className="w-4 h-4 fill-mango-50" alt="Correct" />,
          styles: " bg-teal-500",
        }
      : {
          icon: <Close className="w-4 h-4 fill-mango-50" alt="Incorrect" />,
          styles: " bg-red-400",
        };
  };

  const { icon, styles } = getImage(isSelected, isCorrect);

  return (
    <div
      onClick={() => handleAnswerSelect(index)}
      className={
        "flex items-center w-full px-4 py-4 my-5 border border-mango-200 rounded-xl" +
        styles
      }
    >
      <div
        className={
          "flex items-center justify-center w-6 h-6 border rounded-full border-mango-200 "
        }
      >
        {icon}
      </div>

      <div className="px-4">{`0${index + 1}: ${artist} - ${name}`}</div>
    </div>
  );
};

export default Answer;

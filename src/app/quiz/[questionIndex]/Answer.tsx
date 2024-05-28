import { UISong } from "./types";
import Close from "../../images/close";

type Props = UISong & {
  index: number;
};

const Answer = ({ name, artist, index }: Props) => {
  return (
    <div className="flex items-center w-full px-4 py-4 my-5 border border-mango-200 rounded-xl">
      <div className="w-6 h-6 border rounded-full border-mango-200">
        <Close className="fill-mango-50" alt="Incorrect" />
      </div>
      <div className="px-4">{`0${index + 1}: ${artist} - ${name}`}</div>
    </div>
  );
};

export default Answer;

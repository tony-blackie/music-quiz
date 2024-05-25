type Props = {
  text: string;
  disabled?: boolean;
};

const ButtonFlatActive = ({ text, disabled }: Props) => {
  return (
    <button
      className="flex items-center justify-center w-64 my-2 font-semibold bg-white border rounded-lg h-9 text-mango-600 hover:text-mango-700 border-mango-600 hover:border-mango-700 disabled:border-mango-200 disabled:text-mango-200"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonFlatActive;

type Props = {
  text: string;
  disabled?: boolean;
};

const ButtonFlatActive = ({ text, disabled = false }: Props) => {
  return (
    <button
      className="flex items-center justify-center w-64 h-10 my-2 font-semibold rounded-lg bg-mango-600 text-mango-50 hover:bg-mango-700 disabled:bg-mango-100 disabled:text-mango-400"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonFlatActive;

type Props = {
  text: string;
  disabled?: boolean;
};

const ButtonFlatActive = ({ text, disabled = false }: Props) => {
  return (
    <button
      className="flex items-center justify-center w-64 h-10 my-2 font-medium rounded-lg bg-mango-600 text-mango-50 hover:bg-mango-700 disabled:bg-slate-100 disabled:text-slate-400"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonFlatActive;

type Props = {
  text: string;
  disabled?: boolean;
};

const ButtonFlatActive = ({ text, disabled }: Props) => {
  return (
    <button
      className="flex items-center justify-center w-full my-2 font-medium bg-white border rounded-lg h-9 text-mango-600 hover:text-mango-700 border-mango-600 hover:border-mango-700 disabled:bg-slate-100 disabled:text-slate-400"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonFlatActive;

type Props = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonFlat = ({ text, disabled = false, onClick }: Props) => {
  return (
    <button
      className="flex items-center justify-center w-full h-10 my-2 font-medium rounded-lg bg-mango-600 text-mango-50 hover:bg-mango-700 disabled:bg-slate-100 disabled:text-slate-400"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonFlat;

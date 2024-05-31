type Props = {
  children: JSX.Element | JSX.Element[];
};

const PageContainer = ({ children }: Props) => {
  return (
    <div className="flex w-4/5 px-12 py-24 rounded-2xl h-4/5 bg-mango-950">
      {children}
    </div>
  );
};

export default PageContainer;

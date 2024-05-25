import { ButtonFlat, ButtonOutline } from "@/components";

const Login = () => {
  return (
    <div className="flex font-sans">
      <form className="justify-center flex-auto p-6 bg-mango-950 align-center">
        <ButtonFlat text={"Default"} disabled={true} />
        <ButtonOutline text={"Active"} disabled={true} />

        <h1 className="text-xl font-bold text-center text-mango-50">
          Welcome!
        </h1>

        <p className="text-sm text-center text-mango-50">
          Please enter the name and let's start our quiz!
        </p>

        <input
          className="w-full py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-1 focus:ring-mango-400 focus:outline-none text-mango-950 placeholder-mango-400 ring-1 ring-mango-200"
          type="text"
          aria-label="Name"
          placeholder="Type your name here"
        />
      </form>
    </div>
  );
};

export default Login;

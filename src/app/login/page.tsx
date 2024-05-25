import { ButtonFlat, ButtonOutline } from "@/components";

const Login = () => {
  return (
    <div className="flex font-sans">
      <div className="relative flex-none w-48">
        <img
          src="/classic-utility-jacket.jpg"
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <form className="justify-center flex-auto p-6 align-center">
        <ButtonFlat text={"Default"} disabled={true} />
        <ButtonOutline text={"Active"} disabled={true} />

        <h1 className="font-bold">Welcome!</h1>

        <div className="flex mb-6 space-x-4 text-sm font-medium">
          <div className="flex flex-auto space-x-4">
            <button
              className="h-10 px-6 font-semibold text-white bg-black rounded-md"
              type="submit"
            >
              Buy now
            </button>
            <button
              className="h-10 px-6 font-semibold border rounded-md border-slate-200 text-slate-900"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-700">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default Login;

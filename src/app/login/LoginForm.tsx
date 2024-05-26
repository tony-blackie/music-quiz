"use client";

import { ButtonFlat } from "@/components";
import { Routes } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");

  return (
    <form className="flex flex-col items-center justify-between flex-auto px-12 py-24">
      <div>
        <h1 className="text-xl font-bold text-center text-mango-50">
          Welcome!
        </h1>

        <p className="text-sm text-center text-mango-50">
          Please enter the name and let's start our quiz!
        </p>
      </div>

      <input
        className="w-full py-2 pl-10 text-sm leading-6 text-center rounded-md shadow-sm appearance-none focus:ring-1 focus:ring-mango-400 focus:outline-none text-mango-950 placeholder-mango-700 ring-1 ring-mango-200"
        type="text"
        aria-label="Name"
        placeholder="Type your name here"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />

      <Link href={Routes.QUIZ}>
        <ButtonFlat text="Start Quiz" disabled={!name.length} />
      </Link>
    </form>
  );
};

export default LoginForm;
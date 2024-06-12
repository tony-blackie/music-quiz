"use client";
import { getStoreValues } from "../../../app/utils/store";
import { getSnapshot, subscribe } from "../../../services/serializer";
import { useSyncExternalStore } from "react";

const Header = () => {
  const store = useSyncExternalStore(subscribe, getSnapshot) || "";
  const { count, name } = getStoreValues(store);

  return (
    <div className="flex justify-end w-full px-8 py-6 text-mango-50 items-center">
      <div className="font-bold px-8 uppercase">{name}</div>
      <div>Your Score: {count}</div>
    </div>
  );
};

export default Header;

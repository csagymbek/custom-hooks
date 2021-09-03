import { useState } from "react";

export const useLocalStorage = (key = "", initialValue = "") => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error.message);
      return initialValue;
    }
  });

  const setLocalStorage = (newState) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  };
  return [state, setLocalStorage];
};

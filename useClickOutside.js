import { useEffect, useRef } from "react";
const useClickOutside = (elRef, callback) => {
  const callbackRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (elRef?.current?.contains(e.target) && callback) {
        callbackRef.current(e);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elRef, callbackRef]);
};

import { useClickOutside } from "./useClickOutside";
import { useRef, useCallback } from "react";
const Menu = () => {
  const menuRef = useRef();
  const onClickOutside = useCallback(() => {
    console.log("Clicked Outside!");
  }, []);
  useClickOutside(menuRef, onClickOutside);
  return <div ref={menuRef}></div>;
};

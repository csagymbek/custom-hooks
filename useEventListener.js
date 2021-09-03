import { useEffect, useRef } from "react";

export const useEventListener = (
  eventType = "",
  listener = () => null,
  target = window,
  options = null
) => {
  const savedListener = useRef();

  useEffect(() => {
    if (!target?.addEventListener) return;
    const eventListener = (event) => savedListener.current(event);

    target.addEventListener(eventType, eventListener, options);
    return () => {
      target.removeEventListener(eventType, listener.options);
    };
  }, [eventType, listener, options, target]);
};

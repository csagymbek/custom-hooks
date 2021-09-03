import { useEffect, useState } from "react";

const getOnlineStatus = () => {
  typeof navigator !== "undefined" && typeof navigator.online === "boolean"
    ? navigator.online
    : true;
};

const useNavigatorOnline = () => {
  const [status, setStatus] = useState(getOnlineStatus());
  const setOnline = () => setStatus(true);
  const setOffline = () => setStatus(false);
  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return status;
};

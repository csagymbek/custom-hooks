import { useEffect, useState } from "react";

const matchDark = "(prefers-color-scheme: dark)";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia(matchDarl).matches
  );

  useEffect(() => {
    const matcher = window.matchMedia(matchDark);
    const onChange = ({ matches }) => setIsDark(matches);
    matcher.addEventListener(onChange);
    return () => {
      matcher.removeEventListener(onChange);
    };
  }, [setIsDark]);
  return isDark;
};

import { useDarkMode } from "./useDarkMode-1";

const App = () => {
  const theme = useDarkMode() ? themes.dark : themes.light;
  return (
    <div>
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
};

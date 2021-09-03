import { useState, useRef, useEffect } from "react";

const usePrevious = (value) => {};
const ref = useRef();
useEffect(() => {
  ref.current = value;
});
return ref.current;

// Example
const Counter = () => {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);
  return (
    <div>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

ReactDOM.render(<COunter />, document.getElementById("root"));

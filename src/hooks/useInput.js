import { useState } from "react";

function useInput(initialState, rules) {
  const [value, setValue] = useState(() => {
    if (initialState === "function") return initialState();
    return initialState;
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    //validation
    const inputName = e.target.name || "input";

    if (rules.required && e.target.value == "") {
      setError(`${inputName} can't be empty !!`);
      return;
    }
    if (e.target.value.length >= rules.minLength) {
      setError(
        `${inputName} can't be less than ${rules.minLength} character(s) !!`
      );
      return;
    }
    setError("");
  };

  const reset = () => {
    setError(""),
      setValue(() => {
        if (initialState === "function") return initialState();
        return initialState;
      });
  };

  return {
    value,
    onChange,
    isValid: !error,
    error,
    reset,
  };
}
export default useInput;

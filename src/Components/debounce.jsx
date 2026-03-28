import { useEffect, useState } from "react";

const SearchKey = () => {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  // Trigger effect when debounced value changes
  useEffect(() => {
    if (debouncedValue) {
      console.log("API KEY DEBOUNCE:", debouncedValue);
      // Here you can call your API
    }
  }, [debouncedValue]);

  return (
    <>
      <h1>Search a Keyword</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ENTER THE KEY"
      />
    </>
  );
};

export default SearchKey;
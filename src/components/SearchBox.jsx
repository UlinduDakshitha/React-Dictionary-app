 import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [word, setWord] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={() => onSearch(word)}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;

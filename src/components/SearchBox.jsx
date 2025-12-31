import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const SearchBox = ({ onSearch }) => {
  const [word, setWord] = useState("");

  const handleSearch = () => {
    if (word.trim() !== "") {
      onSearch(word);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <TextField
        label="Enter Word"
        variant="outlined"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ ml: 2 }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBox;

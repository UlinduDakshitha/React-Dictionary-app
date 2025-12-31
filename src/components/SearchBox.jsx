 import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const SearchBox = ({ onSearch }) => {
  const [word, setWord] = useState("");

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <TextField
        fullWidth
        placeholder="Enter word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch(word)}
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSearch(word)}
        sx={{ minWidth: 100 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;

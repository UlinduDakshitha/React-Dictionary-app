 import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import SearchBox from "./components/SearchBox";
import WordDetails from "./components/WordDetails";
import { getWord } from "./Service/api";

function App() {
    const [data, setData] = useState(null);

  const searchWord = async (word) => {
    try {
      const response = await getWord(word);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching word data:", error);
      alert("Word not found!");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          📘 Dictionary App
        </Typography>
      </Box>
      <SearchBox onSearch={searchWord} />
      <WordDetails data={data} />
    </Container>
  );
}

export default App;

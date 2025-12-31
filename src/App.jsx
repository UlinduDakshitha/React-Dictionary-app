import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WordDetails from "./components/WordDetails";
import { getWordDetails } from "./Service/api";

function App() {
  const [wordData, setWordData] = useState(null);

  const searchWord = async (word) => {
    try {
      const response = await getWordDetails(word);
      setWordData(response.data);
    } catch (error) {
      console.error("Error fetching word details:", error);
      alert("Word not found!");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>📘 Dictionary App</h2>

      <SearchBox onSearch={searchWord} />
      <WordDetails data={wordData} />
    </div>
  );
}

export default App;

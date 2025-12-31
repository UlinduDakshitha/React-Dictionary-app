 import React, { useState } from "react";
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
    <div style={{ padding: 40 }}>
      <h2>📘 Dictionary App</h2>
      <SearchBox onSearch={searchWord} />
      <WordDetails data={data} />
    </div>
  );
}

export default App;

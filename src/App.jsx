 import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WordDetails from "./components/WordDetails";
import Loader from "./components/Loader";
import { getWord } from "./Service/api";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchWord = async (word) => {
    try {
      setLoading(true);
      const response = await getWord(word);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching word data:", error);
      alert("Word not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📘 Dictionary App</h1>

      <SearchBox onSearch={searchWord} />

      {loading && <Loader />}
      {!loading && <WordDetails data={data} />}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { getWords, addWord } from "../Service/api";

export default function Dictionary() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  useEffect(() => {
    loadWords();
  }, []);



  const loadWords= async () => {
    const res =  getWords();
    setWords(res.data);
  };


  const handleSave = async () => {
    await addWord({ word, meaning });
    setWord("");
    setMeaning("");
    loadWords();
    alert("Saved Successfully!");
  };

  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h4">Dictionary App</Typography>

      <Card style={{ padding: 20, marginTop: 20 }}>
        <TextField
          label="Word"
          fullWidth
          margin="normal"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <TextField
          label="Meaning"
          fullWidth
          margin="normal"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Save
        </Button>
      </Card>

      <Card style={{ padding: 20, marginTop: 30 }}>
        <Typography variant="h6">Word List</Typography>

        {words.map((w) => (
          <p key={w.id}>
            <b>{w.word}</b> - {w.meaning}
          </p>
        ))}
      </Card>
    </div>
  );
}

import React from "react";
import { Card, Typography } from "@mui/material";

const WordDetails = ({ data }) => {
  if (!data) return null;

  const wordData = data[0];

  return (
    <Card sx={{ padding: 3 }}>
      <Typography variant="h4">{wordData.word}</Typography>
      <Typography color="gray">
        {wordData.phonetic}
      </Typography>

      {wordData.meanings.map((meaning, index) => (
        <div key={index}>
          <Typography variant="h6">
            {meaning.partOfSpeech}
          </Typography>

          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </Card>
  );
};

export default WordDetails;

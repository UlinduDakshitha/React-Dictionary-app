 import React from "react";

const WordDetails = ({ data }) => {
  if (!data) return null;

  const wordData = data[0];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{wordData.word}</h2>

      {wordData.phonetic && (
        <p>
          <b>Phonetic:</b> {wordData.phonetic}
        </p>
      )}

      {wordData.meanings.map((meaning, index) => (
        <div key={index}>
          <h4>{meaning.partOfSpeech}</h4>
          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WordDetails;

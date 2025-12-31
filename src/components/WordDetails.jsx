 import React from "react";

const WordDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>{data[0].word}</h2>

      {data[0].meanings.map((m, i) => (
        <div key={i}>
          <b>{m.partOfSpeech}</b>
          <ul>
            {m.definitions.map((d, j) => (
              <li key={j}>{d.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WordDetails;

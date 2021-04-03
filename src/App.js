import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState([]);

  const handlSubmit = (e) => {
    e.preventDefault();
    let count = parseInt(num);

    if (num <= 0) {
      count = 1;
    }
    if (num > 8) {
      count = 8;
    }
    setText(data.slice(0, count));
  };

  return (
    <div className="App">
      <div className="container">
        <header>Lorem IPSUM Generator</header>
        <form onSubmit={handlSubmit}>
          <label htmlFor="number">Paragraphs</label>
          <input
            type="number"
            name="number"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <button type="submit">Generate</button>
        </form>
        <article>
          {text.map((p, i) => {
            return <p key={i}>{p}</p>;
          })}
        </article>
      </div>
    </div>
  );
}

export default App;

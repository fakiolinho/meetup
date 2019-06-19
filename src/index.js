import React from "react";
import ReactDOM from "react-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

import "./style.css";

function App() {
  return (
    <React.Fragment>
      <Form1 />

      <Form2 />

      <Form3 />

      <Form4 />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

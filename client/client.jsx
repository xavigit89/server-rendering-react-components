import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let state = undefined;

fetch("http://localhost:7777/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;
    console.log("Got the state", state);
    render();
  });

function render() {
  //ReactDOM.hydrate(<App />, document.getElementById("Container"));
}

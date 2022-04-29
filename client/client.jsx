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

function handleModifyAnswerVotes(answerId, increment) {
  state.answers = state.answers.map((answer) =>
    answer.answerId === answerId
      ? { ...answer, upvotes: answer.upvotes + increment }
      : answer
  );
  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleModifyAnswerVotes={handleModifyAnswerVotes} />,
    document.getElementById("Container")
  );
}

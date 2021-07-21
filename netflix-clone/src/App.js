import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey let's build a netflix clone</h1>
      <Row
        title=" Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;

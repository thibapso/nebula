import React from "react";
import Header from "./components/Header";
import Comment from "./components/Comment";
import Card from "./components/Card";
import "./app.scss";

function App() {
  return (
    <>
      <Header />
      <Comment />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;

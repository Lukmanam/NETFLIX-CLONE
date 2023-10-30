import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import "./App.css";
import RowPost from "./components/RowPost/RowPost";
import { originals, action } from "./urls";
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action Series" isSmall />
    </div>
  );
}

export default App;

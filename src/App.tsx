import React from "react";

import "./App.css";
import Header from "./Header/Header";
import WorkFlowList from "./WorkFlowList/WorkFlowList";
import WorkItem from "./WorkItem/WorkItem";

function App() {
  return (
    <div className="App">
      <Header />
      <WorkItem />
      <WorkFlowList />
    </div>
  );
}

export default App;

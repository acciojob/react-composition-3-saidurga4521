import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">Hover over me</h2>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="This is another tooltip">
        <p className="tooltip">Hover over me see to another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;

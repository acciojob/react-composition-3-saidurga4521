import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip for Button">
        <h1 className="tooltip">Hover me</h1>
      </Tooltip>

      <br />
      <br />

      <Tooltip text="Tooltip for a paragraph">
        <p className="tooltip">Hover me see to another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;

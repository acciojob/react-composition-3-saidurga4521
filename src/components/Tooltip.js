import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <h2
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </h2>
  );
};

export default Tooltip;

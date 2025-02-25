import React, { useEffect, useState } from "react";
import "./progressBar.css";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  const textColor = width < 50 ? "black" : "whitesmoke";
  useEffect(() => {
    const timer = setInterval(
      () =>
        setWidth((prev) => {
          if (prev === 100) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        }),
      80
    );
  }, []);
  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress">
        <div className="progress-bar" style={{ "--width": `${width}%` }}></div>
      </div>
      <div className="text" style={{ color: textColor }}>
        {width}
      </div>
    </div>
  );
};

export default ProgressBar;

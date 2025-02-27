import React, { useRef, useState } from "react";
import "./stepper.css";
import { config } from "../../helpers/data";

let len = config.length;

const Stepper = () => {
  const [curr, setCurr] = useState(1);
  const [finish, setFinish] = useState(false);
  // const [margins, setMargins] = useState({
  //   marginLeft: 0,
  //   marginRight: 0,
  // });
  const stepRef = useRef([]);
  // useEffect(() => {
  //   setMargins({
  //     marginLeft: stepRef.current[0].offsetWidth / 2,
  //     marginRight: stepRef.current[config.length - 1].offsetWidth / 2,
  //   });
  // }, [stepRef, config.length]);

  const handleNext = () => {
    setCurr((prev) => {
      if (prev === len) {
        setFinish(true);
        return prev;
      }
      return prev + 1;
    });
  };
  const handlePrev = () => {
    setCurr((prev) => prev - 1);
  };

  const calculatePercentage = () => {
    return ((curr - 1) / (len - 1)) * 100;
  };
  return (
    <div className="container">
      <h1>Stepper</h1>
      <div className="stepper-container">
        {config.map((item, index) => (
          <div
            key={index}
            ref={(el) => (stepRef.current[index] = el)}
            className={`${curr === index + 1 ? "current" : ""} ${
              curr > index + 1 || finish ? "selected" : "stepper-key"
            } 
              `}
          >
            {item.key}
          </div>
        ))}
        {curr <= len && (
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${calculatePercentage()}%` }}
            ></div>
          </div>
        )}
      </div>
      <div>{config[curr - 1]?.description}</div>

      {curr !== 1 && !finish && (
        <button onClick={() => handlePrev()} className="btnStyle">
          Prev
        </button>
      )}
      {!finish && (
        <button onClick={() => handleNext()} className="btnStyle">
          Next
        </button>
      )}
      {finish && <button className="btnStyle">Submit</button>}
    </div>
  );
};

export default Stepper;

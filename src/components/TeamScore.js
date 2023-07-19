import React, { useState } from "react";

export const TeamScore = (props) => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const addOneRun = () => {
    setRuns(runs + 1);
  };
  const addFourRun = () => {
    setRuns(runs + 4);
  };
  const addSixRun = () => {
    setRuns(runs + 6);
  };
  const addOneWicket = () => {
    setWickets(wickets + 1);
  };
  return (
    <div>
      <div>
        <div>Team : {props.teamName}</div>
        <div>Runs scores are:{runs}</div>
        <div>Wickets are:{wickets}</div>
        {wickets === 10 ? (
          <div>ALl OUT</div>
        ) : (
          <div>
            <button onClick={addOneRun}>1 Run</button>
            <button onClick={addFourRun}>4 Runs</button>
            <button onClick={addSixRun}>6 Runs</button>
            <button onClick={addOneWicket}>Wicket</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { TeamScore } from "./TeamScore";
import "../styles/Scoreboard.css";

export const Scoreboard = (props) => {
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");

  const handleTeam1InputChange = (event) => {
    setTeamOneName(event.target.value);
  };

  const handleTeam2InputChange = (event) => {
    setTeamTwoName(event.target.value);
  };

  return (
    <div>
      <h1>Game {props.gameNumber}</h1>
      <div className="scoreboard">
        <div>
          <h3>Enter Your Team Name</h3>
          <input
            type="text"
            value={teamOneName}
            onChange={handleTeam1InputChange}
          />
          <TeamScore teamName={teamOneName} />
        </div>
        <div>
          <h3>Enter Your Team Name</h3>
          <input
            type="text"
            value={teamTwoName}
            onChange={handleTeam2InputChange}
          />
          <TeamScore teamName={teamTwoName} />
        </div>
      </div>
    </div>
  );
};

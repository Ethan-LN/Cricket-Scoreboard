import React, { useState } from "react";
import { TeamScore } from "./TeamScore";
import "../styles/Scoreboard.css";

export const Scoreboard = () => {
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");

  const handleTeam1InputChange = (event) => {
    setTeamOneName(event.target.value);
  };

  const handleTeam2InputChange = (event) => {
    setTeamTwoName(event.target.value);
  };

  return (
    <div className="scoreboard">
      <div>
        <h2>Team 1</h2>
        <input
          type="text"
          value={teamOneName}
          onChange={handleTeam1InputChange}
        />
        <TeamScore teamName={teamOneName} />
      </div>
      <div>
        <h2>Team 2</h2>
        <input
          type="text"
          value={teamTwoName}
          onChange={handleTeam2InputChange}
        />
        <TeamScore teamName={teamTwoName} />
      </div>
    </div>
  );
};

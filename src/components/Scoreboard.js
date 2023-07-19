import React from "react";
import { TeamScore } from "./TeamScore";
import "../styles/Scoreboard.css";

export const Scoreboard = () => {
  const teamOneName = "Cricket Time";
  const temaTwoTeam = "Go Criecket";
  return (
    <div className="scoreboard">
      <TeamScore teamName={teamOneName} />
      <TeamScore teamName={temaTwoTeam} />
    </div>
  );
};

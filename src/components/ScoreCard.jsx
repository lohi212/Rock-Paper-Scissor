import React from "react";

const ScoreCard = ({ score }) => {
  return (
    <div className="score-card">
      <h2>Score</h2>
      <div className="score">{score || 0}</div>
    </div>
  );
};

export default ScoreCard;

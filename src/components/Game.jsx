import React from "react";
import { mapperObj } from "../utils";

const Game = ({
  setSelectedGesture,
  selectedGesture,
  randomEle,
  isWinner,
  setScore,
}) => {
  const handleGestureSelection = (e) => {
    setSelectedGesture(e.target.id);
  };

  const handlePlayAgain = () => {
    setSelectedGesture("");
    if (!isWinner) setScore(0);
  };

  return (
    <div className="game-dashboard">
      {selectedGesture ? (
        <div className="selected-game">
          <div className="item">{selectedGesture}</div>
          <div>
            <div>YOU {isWinner ? "WON" : "LOST"}</div>
            <button
              onClick={handlePlayAgain}
              className={isWinner ? "play-again-btn" : "restart-btn"}
            >
              {isWinner ? "Play" : "Restart"} Again
            </button>
          </div>
          <div className="item">{randomEle}</div>
        </div>
      ) : (
        <>
          <h3>Select your gesture</h3>
          <div className="game-items" onClick={handleGestureSelection}>
            <div className="triangle">
              {Object.keys(mapperObj).map((ele) => (
                <div id={ele} className="" key={mapperObj[ele].key}>
                  <img src={mapperObj[ele].img} alt={mapperObj[ele].key} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;

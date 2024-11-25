import React, { useEffect } from "react";
import { mapperObj } from "../utils";

const Game = ({ setSelectedGesture, selectedGesture, setScore }) => {
  const handleGestureSelection = (e) => {
    setSelectedGesture(e);
  };

  const handlePlayAgain = () => {
    setSelectedGesture("");
    if (!isWinner) setScore(0);
  };

  const getRandomElement = () => {
    const arr = Object.keys(mapperObj);
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const randomEle = getRandomElement();
  const isWinner =
    randomEle === mapperObj[selectedGesture]?.win ||
    randomEle === selectedGesture;

  const handleScore = () => {
    if (isWinner) setScore((prev) => prev + 1);
  };

  useEffect(() => {
    if (selectedGesture) handleScore();
  }, [selectedGesture]);

  return (
    <div className="game-dashboard">
      {selectedGesture ? (
        <div className="selected-game">
          <div>
            <div className="box">
              <img
                src={mapperObj[selectedGesture].img}
                alt={mapperObj[selectedGesture].key}
                width={150}
              />
            </div>
            <p className="text-center">You</p>
          </div>

          <div>
            <p className="text-center">YOU {isWinner ? "WON" : "LOST"}</p>
            <button
              onClick={handlePlayAgain}
              className={isWinner ? "play-again-btn" : "restart-btn"}
            >
              {isWinner ? "Play" : "Restart"} Again
            </button>
          </div>

          <div>
            <div className="box">
              <img
                src={mapperObj[randomEle].img}
                alt={mapperObj[randomEle].key}
                width={150}
              />
            </div>
            <p className="text-center">Computer</p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="title">Select your gesture</h2>

          <div className="triangle">
            {Object.keys(mapperObj).map((ele, index) => (
              <div
                id={ele}
                className={`box box-${index + 1}`}
                key={mapperObj[ele].key}
                onClick={() => handleGestureSelection(ele)}
              >
                <img
                  src={mapperObj[ele].img}
                  alt={mapperObj[ele].key}
                  width={150}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;

import logo from "./logo.svg";
import "./App.css";
import ScoreCard from "./components/ScoreCard";
import Game from "./components/Game";
import Rules from "./components/Rules";
import { useEffect, useState } from "react";
import { mapperObj } from "./utils";

function App() {
  const arr = ["Rock", "Paper", "Scissors"];
  const [selectedGesture, setSelectedGesture] = useState("");
  const [score, setScore] = useState(0);

  const getRandomElement = () => {
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
    handleScore();
  }, [selectedGesture]);

  return (
    <div className="App">
      <div className="dashboard">
        <ScoreCard score={score} />
        <Game
          setSelectedGesture={setSelectedGesture}
          selectedGesture={selectedGesture}
          isWinner={isWinner}
          randomEle={randomEle}
          setScore={setScore}
        />
      </div>

      <Rules />
    </div>
  );
}

export default App;

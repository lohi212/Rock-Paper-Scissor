import ScoreCard from "./components/ScoreCard";
import Game from "./components/Game";
import Rules from "./components/Rules";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedGesture, setSelectedGesture] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="dashboard">
        <ScoreCard score={score} />
        <Game
          setSelectedGesture={setSelectedGesture}
          selectedGesture={selectedGesture}
          setScore={setScore}
        />
      </div>

      <Rules />
    </div>
  );
}

export default App;

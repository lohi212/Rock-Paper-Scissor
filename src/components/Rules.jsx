import React from "react";

const Rules = () => {
  const handleRulesClick = () => {
    const rulesDrawer = document.getElementById("rules-drawer");

    rulesDrawer.classList.remove("hide-drawer");
    rulesDrawer.classList.add("display-drawer");
  };

  const closeRules = () => {
    const rulesDrawer = document.getElementById("rules-drawer");

    rulesDrawer.classList.remove("display-drawer");
    rulesDrawer.classList.add("hide-drawer");
  };

  return (
    <div>
      <button onClick={handleRulesClick} className="rules-btn">
        Rules
      </button>
      <div className="drawer" id="rules-drawer">
        <div className="drawer-header">
          <h3>Rules</h3>
          <p onClick={closeRules} className="close">
            X
          </p>
        </div>

        <ul className="rules-list">
          <p className="rules-list-text">
            The rules of Rock-Paper-Scissors are simple and based on three
            possible moves: Rock, Paper, and Scissors. The outcomes depend on
            the choices of two players:
          </p>
          <li>Rock beats Scissors: Rock crushes Scissors.</li>
          <li>Scissors beats Paper: Scissors cuts Paper.</li>
          <li>Paper beats Rock: Paper covers Rock.</li>
          <li>
            Same Move Results in a Tie: If both players choose the same move,
            it's a draw.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;

import { useState } from "react";

import "./index.css";
import dice1Img from "./assets/dice1.png";
import dice2Img from "./assets/dice2.png";
import dice3Img from "./assets/dice3.png";
import dice4Img from "./assets/dice4.png";
import dice5Img from "./assets/dice5.png";
import dice6Img from "./assets/dice6.png";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState("");

  const rollDice = () => {
    setIsRolling(true);
    setResult("");

    const rollInterval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;

      setDice1(finalDice1);
      setDice2(finalDice2);
      setIsRolling(false);

      if (finalDice1 > finalDice2) setResult("Win! 🎉");
      else if (finalDice1 < finalDice2) setResult("Lose! 💀");
      else setResult("Draw! 🤝");
    }, 3000);
  };

  const displayName = playerName.trim() === "" ? "Player 1" : playerName;

  return (
    <div className="app">
      <h1 className="result">{result}</h1>

      <div className="name-input">
        <label htmlFor="name">Enter Your Name: </label>
        <input
          id="name"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Name (Optional)"
        />
      </div>

      <div className="players">
        <div className="player">
          <h2>{displayName}</h2>
          <img
            src={
              [dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img][
                dice1 - 1
              ]
            }
            alt={`Dice ${dice1}`}
            className={isRolling ? "rolling" : ""}
          />
        </div>

        <div className="player">
          <h2>Player 2</h2>
          <img
            src={
              [dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img][
                dice2 - 1
              ]
            }
            alt={`Dice ${dice2}`}
            className={isRolling ? "rolling" : ""}
          />
        </div>
      </div>

      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Play"}
      </button>
    </div>
  );
}

export default App;

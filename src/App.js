import { useState } from "react";
import "./styles/App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [cardArray, setCardArray] = useState([]);

  const handleSelection = (e) => {
    console.log(e)
    if (e.target.color) {
    } else {
      setScore(score + 1);
      setHighScore(checkHighScore());
    }
  };

  const checkHighScore = () => {
    return score > highScore ? score : highScore;
  };

  return (
    <div className="page-wrapper">
      <Header
        score={score}
        highScore={highScore}
        handleSelection={handleSelection}
      />
      <Gameboard />
    </div>
  );
}

export default App;

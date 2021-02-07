import { useState, useEffect } from "react";
import "./styles/App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [cardArray, setCardArray] = useState([]);

  const handleSelection = (e) => {
    console.log(e.target.style['background-color']);
    if (e.target.color) {
    } else {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    setHighScore(score > highScore ? score : highScore);
  }, [score]);

  return (
    <div className="page-wrapper">
      <Header
        score={score}
        highScore={highScore}
      />
      <Gameboard handleSelection={handleSelection} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./styles/App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [cardList, setCardList] = useState({});
  const [palette, setPalette] = useState('pastel');

  const handleSelection = (e) => {
    const chosenColor = e.target.style['background-color']; 
    if (cardList[chosenColor]) {
      resetGame();
    } else {
      setScore(score + 1);
      setCardList(prevState => ({ ...prevState, [chosenColor]: chosenColor}))
    }
  };

  useEffect(() => {
    setHighScore(score > highScore ? score : highScore);
  }, [score]);

  const handlePalette = (e) => {
    setPalette(palette === 'pastel' ? 'summer' : 'pastel');
  };

  useEffect(() => {
    resetGame();
  }, [palette]);

  const resetGame = () => {
    setScore(0);
    setCardList({});
  };

  return (
    <div className="page-wrapper">
      <Header
        score={score}
        highScore={highScore}
        handlePalette={handlePalette}
      />
      <Gameboard handleSelection={handleSelection} palette={palette} />
    </div>
  );
}

export default App;

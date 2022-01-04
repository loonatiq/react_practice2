import {useState} from 'react';
import HandIcon from "./HandIcon";
import HandButton from './HandButton';
import Button from './Button';
import { compareHand, generateRandomHand } from './utils';
import './App.css';
import './HandIcon.css';

const INIT_VALUE = 'rock';




function App() {
  const [hand, setHand] = useState(INIT_VALUE);
  const [otherHand, setOtherHand] = useState(INIT_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  
  

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextGameHistory = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextGameHistory]);
    if(nextGameHistory === '승리') setScore(score + bet);
    if(nextGameHistory === '패배') setOtherScore(otherScore + bet);
    console.log('me:', nextHand, 'other:', nextOtherHand, compareHand(nextHand,nextOtherHand));
  }

  

  const handleClearButton = () => {
    setHand(INIT_VALUE);
    setOtherHand(INIT_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
    console.log('RESET');
  }


  const handleBetChanger = (e) => {
    let num = Number(e.target.value);
    if(num > 9) num = 9;
    if(num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  }

  return (
    <>
    <div className='board'>
    <div className='title'>Rock, Scissors, Paper</div>
    <div className='result'>
      {compareHand(hand,otherHand)}
    </div>
    <div className='rspResult'>
      <div className = 'hand'>
      <HandIcon value = {hand} />
      </div>
        <h1>VS</h1>
      <div className = 'otherHand'>
      <HandIcon value = {otherHand} />
      </div>
    </div>
    <div className='handBtn'>
    <HandButton value = "rock" onClick = {handleButtonClick}/>
    <HandButton value = "scissors" onClick = {handleButtonClick}/>
    <HandButton value = "paper" onClick = {handleButtonClick}/>
    </div>
    <div>
    <input className='bettingBox' type="number" value={bet} onChange={handleBetChanger}></input>
    </div>
    <h1>점수</h1>
    <h1>{score} : {otherScore}</h1>
    <div>
      <Button onClick={handleClearButton}>RESET</Button>
    </div>
    <h2>기록</h2>
    <h2>{gameHistory.join(', ')}</h2>
    </div>
    </> 
  );
}

export default App;

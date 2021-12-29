import {useState} from 'react';
import HandIcon from "./HandIcon";
import HandButton from './HandButton';
import Button from './Button';
import { compareHand, generateRandomHand } from './utils';

const INIT_VALUE = 'rock';
function App() {
  const [hand, setHand] = useState(INIT_VALUE);
  const [otherHand, setOtherHand] = useState(INIT_VALUE);
  
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    console.log('me:', nextHand, 'other:', nextOtherHand, compareHand(nextHand,nextOtherHand));
  }

  

  const handleClearButton = () => {
    setHand(INIT_VALUE);
    setOtherHand(INIT_VALUE);
    console.log('RESET');
  }

  return (
    <>
    <div>
      <Button onClick={handleClearButton}>RESET</Button>
    </div>
    <div>
      {compareHand(hand,otherHand)}
    </div>
    <div>
      <HandIcon value = {hand} />
    VS
      <HandIcon value = {otherHand} />
    </div>
    <HandButton value = "rock" onClick = {handleButtonClick}/>
    <HandButton value = "scissors" onClick = {handleButtonClick}/>
    <HandButton value = "paper" onClick = {handleButtonClick}/>
    </> 
  );
}

export default App;

import HandIcon from "./HandIcon";
import HandButton from './HandButton';
import Button from './Button';


function App() {
  const handleClick = (value) => console.log(value);
  const handleClearButton = () => console.log('처음부터');
  return (
    <>
    <div>
      <Button onClick={handleClearButton}>처음부터</Button>
    </div>
    <HandButton value="rock" onClick={handleClick}/>
    <HandButton value="scissors" onClick={handleClick}/>
    <HandButton value="paper" onClick={handleClick}/>
    </> 
  );
}

export default App;

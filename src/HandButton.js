import HandIcon from './HandIcon';
import './HandButton.css';

function HandButton({ value, onClick }){
  const handleClick = () => onClick(value);
  return(
  <button onClick = { handleClick }> 
    <HandIcon className = 'HandButtons' value = { value } />
  </button>
  );
}
export default HandButton;
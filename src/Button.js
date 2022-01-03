import './Button.css';

function Button({ children, onClick }){
return(
  <button className='Buttons' onClick={ onClick }>{ children }</button>
);
}

export default Button;
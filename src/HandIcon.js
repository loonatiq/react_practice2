import rockImg from './assets/rock.svg';
import scissorsImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissors: scissorsImg,
  paper: paperImg,
};

function HandIcon({ value }) {
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
const HANDS = ['rock', 'scissors', 'paper'];
const WINS = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock',
};

export function compareHand(a,b){
  if(WINS[a] === b) return '승리';
  if(WINS[b] === a) return '패배';
  return '무승부';
}

function random(n){
  return Math.floor(Math.random() * n);
}

export function generateRandomHand(){
  const randomHands = random(HANDS.length);
  return HANDS[randomHands];
}

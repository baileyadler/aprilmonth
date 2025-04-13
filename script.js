let correctWord, timer;
const initTimer = maxTime => {
  clearInterval(timer)
  timer = setInterval(() => {
if(maxTime > 0) {
  maxTime--;
  return timeText.innerText = maxTime;
}
clearInterval(timer)
alert(`Time is up! ${correctWord.toUpperCase()} was the correct word`)
initGame();//let the game restart to a new word
  }, 1000);
}
const wordText = document.getElementById('word')//callsthe word id
const timeText = document.getElementById('time')
const hintText = document.getElementById('hint')//calls the id for the hint
const refreshBtn = document.getElementById('refreshWord')
const inputField = document.getElementById('inputField')
const checkBtn = document.getElementById('checkWord')
//word list to get scrambled with hints
const words = [
  {
    word: 'rain',
    hint:'Often falls in April'
  },
  {
    word:'bloom',	
    hint: 'What flowers do in spring'
  },
  {
    word:'bees',
    hint:'Small buzzing insects that love flowers'
  },
  {
    word: 'grass',
    hint:'Grows green and fast in spring'
  },
  {
    word:'flower',	
    hint: 'A colorful spring plant'
  },
  {
    word:'sun',
    hint:'Warms up the weather after winter'
  },
  {
    word: 'nest',
    hint:'Birds build this for their eggs'
  },
  {
    word:'garden',	
    hint: 'A place where you plant flowers or veggies'
  },
  {
    word:'bunny',
    hint:'A fluffy animal often seen in spring'
  },
  {
    word: 'chick',
    hint:'A baby bird'
  },
  {
    word:'pollen',	
    hint: 'What causes spring allergies'
  },
  {
    word:'tullip',
    hint:'A popular spring flower'
  },
  {
    word: 'picnic',
    hint:'Eating outside on a blanket'
  },
  {
    word:'rainbow',	
    hint: 'Appears after rain with colors'
  },
  {
    word:'sprouts',
    hint:'Tiny green plants beginning to grow'
  },
  {
    word:'butterfly',	
    hint: 'A colorful insect with wings'
  },
  {
    word:'umbrella',
    hint:'Used when it rains'
  },
  {
    word: 'Sunshine',
    hint:'Bright light from the sun'
  },
  {
    word:'daffodil',	
    hint: 'A yellow flower that blooms in early spring'
  },
  {
    word:'watering',
    hint:'What you do to help plants grow'
  },
];

const initGame = () => {
  initTimer(40); // gives the max time of 40 seconds
  let randomObj = words[Math.floor(Math.random() * words.length)];
  correctWord = randomObj.word.toLowerCase()
  inputField.value = ''//will reset the input field -make it empty again for new word
inputField.setAttribute('maxlength', correctWord.length)
  let wordArray = randomObj.word.split(''); //split the letters randomly
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i +1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]] //shuffle and swap the letters from array randomly
  }
  wordText.innerText = wordArray.join('');
  hintText.innerText = randomObj.hint;
  console.log(wordArray, randomObj.word);
}
initGame();
const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase();//finds out the user value
  if(!userWord) return alert(`Please enter a word check`);//alerts user if they did not enter anything
  if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`) //if user word does not match with correct word
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`)//shows what happens if the user word is the correct word
    initGame();
  }
refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);
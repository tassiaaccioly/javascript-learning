//Remove this next line commentary to play

//const userInput = prompt('Rock, Paper, Scissors, GO!', '');

//Make user input lower case to standardize the answers

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log(`There is no such thing as ${userInput}!`);
    };
  };
  
  //Make computer select a random number between 0-2 to be the choice
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper'; 
      default:
        return 'scissors';
    }
  };
  
  //Decide if player or computer wins in every case
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return "Player Wins!"
    };
    if (userChoice === computerChoice) {
      return `It's a tie!`;
    };
    if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
          return 'Computer wins!';
        } else {
          return 'Player wins!';
        };
    } else if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'Computer Wins!';
        } else {
        return 'Player Wins!';
        };
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer Wins!';
        } else {
          return 'Player Wins!';
        };
    } else {
      return '!GAME ERROR! PLAY AGAIN!';
    };
  };
  
  const playGame = () => {
      const userChoice = getUserChoice(userInput);
      const computerChoice = getComputerChoice();
      console.log(`You threw: ` + userChoice);
      console.log(`The computer threw: ` + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    };
  
  playGame()
  
  
  
  
  
  
  
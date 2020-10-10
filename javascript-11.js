let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//MAKE THE ORIGINAL STORY AN ARRAY OF IT'S WORDS

const storyWords = story.split(' ');

// console.log(storyWords);

//FIND HOW MANY WORDS THE STORY HAS:

console.log(storyWords.length);

//REMOVE ALL THE TIMES THE UNNECESARY WORDS ARE USED

const betterWords = storyWords.filter(word => {
  if (!unnecessaryWords.includes(word)) {
    return word;
  }
});

// console.log(betterWords);

//COUNT HOW MANY TIMES EACH OVERUSED WORD APPEARS

let really = 0;
let very = 0;
let basically = 0;

const howMany = betterWords.forEach((elem) => {
  if (elem === 'really') {
    really++;
    //for the overused words, remove it every other time it appears;
    if (really % 2 === 0) {
      let indexOf = betterWords.indexOf(elem);
      betterWords.splice(indexOf, 1);
      // console.log(indexOf);
    }
  } else if (elem === 'very') {
    very++;
    //for the overused words, remove it(then replace it) every other time it appears;
    if (very % 2 === 0) {
      let indexOf = betterWords.indexOf(elem);
      betterWords.splice(indexOf, 1);
      // console.log(indexOf);
    }
  } else if (elem === 'basically') {
    basically++;
  }
  return;
});

// console.log(really, very, basically);
// console.log(betterWords);

//FIND OUT HOW MANY SENTENCES THE STORY HAS

let sentences = 0;

const countSentences = betterWords.map((elem) => {
  if (elem.includes('.') || elem.includes('!')) {
    return sentences++;
  }
});

// console.log(sentences);

//LOG THE INFORMATIONS IN A COHESIVE MANNER

// console.log(`The story has ${storyWords.length} words. After improving the writing removing some unnecessary words: ${unnecessaryWords}, the improved story has ${betterWords.length} words. It has ${sentences} sentences and some words that are typically overused and the amount of times they appear are: 
// - 'really' appears ${really} times;
// - 'very' appears ${very} times;
// - 'basically' appears ${basically} time;`)

//CONSOLE.LOG BETTERWORDS AS A SINGLE STRING

// console.log(betterWords.join(' '));

//WRITE A FUNCTION THAT FINDS THE WORD THAT APPEARS THE MOST TIMES

const numberOfWords = []

betterWords.forEach((word) => {
  let indexNum = betterWords.indexOf(word)
  let indexedWord = betterWords[indexNum];
    if (numberOfWords.includes(word)) {
      
      wordSum++;
    } else {
      numberOfWords.splice(0, 0, `{${word}: 1}`);
    }
});

console.log(numberOfWords);


///REPLACED OVERUSED WORDS WITH SOMETHING ELSE:

const replaceWords = betterWords.forEach((word) => {
   if (word === 'really') {
      let indexOf = betterWords.indexOf(word);
      betterWords.splice(indexOf, 1, 'trully');
  } else if (word === 'very') {
      let indexOf = betterWords.indexOf(word);
      betterWords.splice(indexOf, 1, 'super');
  } else if (word === 'basically') {
      let indexOf = betterWords.indexOf(word);
      betterWords.splice(indexOf, 1, 'in fact');
  }
});

console.log(betterWords);


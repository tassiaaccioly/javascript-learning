//These are 15 challenges from the Codecademy Web Developer Path
//Remove the comentary from console.log statements to print the results


//Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'

function greetWorld() {
    return 'Hello, World!';
  }
  
  // console.log(greetWorld());
  
  //The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
  
  function canIVote(number) {
    if (number >= 18) {
      return true;
    } else if (number < 18) {
      return false;
    };
  };
  
  // console.log(canIVote(19));
  
  //Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
  
  function agreeOrDisagree(arg1, arg2) {
    if (arg1 === arg2) {
      return 'You agree!'
    } else if (arg1 !== arg2) {
      return 'You disagree!'
    };
  };
  
  // console.log(agreeOrDisagree('yep', 'yep'));
  
  
  //Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
  
  //Here are the classifications:
  //0-3 should return 'baby'
  //4-12 should return 'child'
  //13-19 should return 'teen'
  //20-64 should return 'adult' 
  //65-140 should return 'senior citizen'
  //If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
  
  function lifePhase(age) {
      if (age < 0 || age > 140) {
        return 'This is not a valid age';
      }
      if (age >= 0 && age <= 3) {
        return 'baby'; 
      }
      if (age >= 4 && age <= 12) {
        return 'child';
      }
      if (age >= 13 && age <= 19) {
        return 'teen';
      }
      if (age >= 20 && age <= 64) {
        return 'adult';
      }
      if (age >= 65 && age <= 140) {
        return 'senior citizen';
      }
  }
  
  // console.log(lifePhase(5))
  
  
  //Write a function, finalGrade(). It should:
  
  //take three arguments of type number
  //find the average of those three numbers
  //return the letter grade (as a string) that the average corresponds to
  //return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
  //0-59 should return: 'F'
  //60-69 should return: 'D'
  //70-79 should return: 'C'
  //80-89 should return: 'B'
  //90-100 should return: 'A'
  
  function finalGrade(grade1, grade2, grade3) {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
      return 'You have entered an invalid grade.';
    } else {
      let average = ((grade1 + grade2 + grade3) / 3);
        if (average >= 0 && average <= 59) {
          return 'F';
        }
        if (average >= 60 && average <= 69) {
          return 'D';
        }
        if (average >= 70 && average <= 79) {
          return 'C';
        }
        if (average >= 80 && average <= 89) {
          return 'B';
        }
        if (average >= 90 && average <= 100) {
          return 'A';
        }
     }
  }
  
  // console.log(finalGrade(99, 92, 95))
  
  
  //Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’
  
  function reportingForDuty(rank, lastName) { 
    return `${rank} ${lastName} reporting for duty!`
  };
  
  // console.log(reportingForDuty('Private', 'Fido'));
  
  
  //We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
  
  //const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  //    let die1 = Math.random() * 6 + 1
  //    let die2 = Math.random() * 6 + 1
  //    return die1 + die2
  //}
  
  const rollTheDice = () => {
    let die1 = Math.floor((Math.random() * 6) + 1);
    let die2 = Math.floor((Math.random() * 6) + 1);
    return die1 + die2;
  }
  
  // console.log(rollTheDice());
  
  
  //Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?
  
  //Write a function, calculateWeight(). It should:
  
  //have two parameters: earthWeight and planet
  //expect earthWeight to be a number
  //expect planet to be a string
  //return a number representing what that Earth-weight would equate to on the planet passed in.
  //Handle the following cases:
  //'Mercury' weight = earthWeight * 0.378
  //'Venus' weight = earthWeight * 0.907
  //'Mars' weight = earthWeight * 0.377
  //'Jupiter' weight = earthWeight * 2.36
  //'Saturn' weight = earthWeight * 0.916
  //For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  
  
  function calculateWeight(earthWeight, planet) {
      switch (planet) {
        case 'Mercury':
          return earthWeight * 0.378;
          break;
        case 'Venus':
          return earthWeight * 0.907;
          break;
        case 'Mars':
          return earthWeight * 0.377;
          break;
        case 'Jupiter':
          return earthWeight * 2.36;
          break;
        case 'Saturn':
          return earthWeight * 0.916;
        default:
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
      }
  }
  
  // console.log(calculateWeight(100, 'Jupiter'));
  
  
  //It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
  
  function truthyOrFalsy(value) {
    if(value) {
      return true
    } 
    return false
  }
  
  // console.log(truthyOrFalsy(0));
  
  
  //A person’s number of imaginary friends are always 33% of their total friends.
  
  //Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
  
  //Since friends can only come in whole numbers, be sure to round your result before returning it.
  
  function numImaginaryFriends(totalFriends) {
      return Math.round(totalFriends * 0.33);
  };
  
  // console.log(numImaginaryFriends(18));
  
  
  //Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:
  
  //I am so ______ because I _______ coding! Time to write some more awesome ______!
  
  function sillySentence(adj, verb, noun) {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
  };
  
  // console.log(sillySentence('excited', 'love', 'functions'));
  
  //Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
  
  //1. If the year is in the future, you should return a string in the following format: 'You will be [calculated age] in the year [year passed in]'
  
  //2. If the year is before they were born, you should return a string in the following format:'The year [year passed in] was [calculated number of years] years before you were born'
  
  //3. If the year is in the past but not before the person was born, you should return a string in the following format: 'You were [calculated age] in the year [year passed in]'
  
  function howOld (age, year) {
    let yearDif = 2020 - year;
    let yearBorn = 2020 - age
    if (year > 2020) {
      age += yearDif;
      return `You will be ${age} in the year ${year}`;
    }
    if (year < yearBorn) {
      let oldYearDif = yearBorn - year;
      return `The year ${year} was ${oldYearDif} years before you were born`
    }
    if (year >= yearBorn && year <= 2020) {
      age -= yearDif;
      return `You were ${age} in the year ${year}`
    };
  };
  
  // console.log(howOld(31, 1964));
  
  
  //Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.
  
  //We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!
  
  //Here’s how it’s supposed to calculate the relationship:
  
  //100 should return 'You are likely identical twins.'
  //35-99 should return 'You are likely parent and child or full siblings.'
  //14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  //6-13 should return 'You are likely 1st cousins.'
  //3-5 should return 'You are likely 2nd cousins.'
  //1-2 should return 'You are likely 3rd cousins.'
  //0 should return 'You are likely not related.'
  
  // const whatRelation = percentSharedDNA => {
  //     if (percentSharedDNA === 100) {
  //         return 'You are likely identical twins.'
  //     }
  //     if (percentSharedDNA > 34) {
  //         return 'You are likely parent and child or full siblings.'
  //     }
  //     if (percentSharedDNA < 13) {
  //         return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  //     }
  //     if (percentSharedDNA > 5) {
  //         return 'You are likely 1st cousins.'
  //     }
  //     if (percentSharedDNA > 2) {
  //         return 'You are likely 2nd cousins.'
  //     }
  //     if (percentSharedDNA > 0) {
  //         return 'You are likely 3rd cousins'
  //     }
  //     return 'You are likely not related.'
  // }
  
  
  const whatRelation = percentSharedDNA => {
      if (percentSharedDNA < 0) {
        return `Please, enter a valid percentage. (From 0 - 100%)`
      }
      if (percentSharedDNA === 100) {
          return 'You are likely identical twins.'
      }
      if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return `You are likely parent and child or full siblings.`
      }
      if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
          return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
      }
      if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
          return 'You are likely 1st cousins.'
      }
      if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
          return 'You are likely 2nd cousins.'
      }
      if (percentSharedDNA === 1 || percentSharedDNA === 2) {
          return 'You are likely 3rd cousins'
      }
      return 'You are likely not related.'
  }
  
  // console.log(whatRelation(0.78));
  
  
  //Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.
  
  //Return the tip, as a number, based on the following:
  //‘bad’ should return a 5% tip
  //‘ok’ should return a 15% tip
  //‘good’ should return a 20% tip 
  //‘excellent’ should return a 30% tip
  //all other inputs should default to 18%
  
  function tipCalculator (quality, total) {
    switch (quality) {
      case 'bad':
        return total * 0.05;
        break;
      case 'ok':
        return total * 0.15;
        break;
      case 'good':
        return total * 0.2;
        break;
      case 'excellent':
        return total * 0.3;
        break;
      default:
        return total * 0.18;
    }
  };
  
  // console.log(tipCalculator('good', 100));
  
  
  //Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:
  
  // 'shrug' should return '|_{"}_|'
  // 'smiley face' should return ':)'
  // 'frowny face' should return':('
  // 'winky face' should return ';)'
  // 'heart' should return '<3'
  // any other input should return '|_(* ~ *)_|'
  
  function toEmoticon(emote) {
    switch (emote) {
      case 'shrug':
        return `|_{"}_|`;
        break;
      case 'smiley face':
        return `:)`;
        break;
      case 'frowny face':
        return `:(`;
        break;
      case 'winky face':
        return `;)`;
        break;
      case 'heart':
        return '<3';
        break;
      default:
        return `|_(* ~ *)_|`;
    }
  }
  
  // console.log(toEmoticon('Whatever'));
  
  
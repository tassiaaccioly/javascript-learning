//1. FIND THE VALUE OF THIS IN A FUNCTION INSIDE OF A METHOD

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName) {
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
      let thisValue = this;
      console.log(thisValue);
 }
};


console.log(person.fullName);



//2. CREATE A NEW FACTORY FUNCTION THAT CAN CREATE OBJECT INSTANCES OF YOUR CHOICE:

function rpgGames(name, dices, oldschool) {
return {
  name,
  dices,
  oldschool
}
};

let oldSchoolGames = rpgGames('Into the Odd', 'd6', true);

console.log(oldSchoolGames);


//3. WRITE A FUNCTION THAT TAKES IN AN ARRAY AS AN ARGUMENT AND RETURNS A NEW ARRAY WITH THE ELEMENTS IN THE REVERSE ORDER.

//YOU CAN'T USE THE BUILT-IN METHOD FOR THIS;

let newArray = []

function reverseArray(anArr) {
for (let i = anArr.length-1; i >= 0; i--) {
  newArray.push(anArr[i]);
}
return newArray
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

//console.log(reverseArray(sentence)) 


//4. WRITE A FUNCTION, greetAliens(), THAT TAKES IN AN ARRAY OF STRINGS AND USES A FOR LOOP TO PRINT A GREETING WITH EACH STRING IN THE ARRAY.

//THE GREETING SHOULD TAKE THE FOLLOWING FORMAT:
//“Oh powerful [stringElement], we humans offer our unconditional surrender!”

function greetAliens(array) {
for (let i = 0; i < array.length; i++) {
  console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
}
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

// greetAliens(aliens);


//5. WRITE A FUNCTION, convertToBaby(), THAT TAKES IN AN ARRAY AS AN ARGUMENT AND, USING A LOOP, RETURNS A NEW ARRAY WITH EACH STRING IN THE ARRAY PREPENDED WITH 'baby ';

//DON'T USE THE .map() METHOD!


function convertToBaby(array) {
const babyArray = []
for (let i = 0; i < array.length; i++) {
  babyArray.push(`baby ` + array[i]);
}
return babyArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

// console.log(convertToBaby(animals)) 


//6. WRITE A FUNCTION declineEverything() THAT TAKES IN AN ARRAY OF STRINGS AND, USING .forEach(), LOOPS THROUGH EACH ELEMENT IN THE ARRAY AND CALLS politelyDecline() WITH EACH OF THEM.

//THE .forEach() FUNCTION SHOULD APPLY politelyDecline() DIRECTLY; IT SHOULD NOT MERELY RECEIVE AN ARGUMENT FUNCTION THAT USES politelyDecline().

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

function declineEverything(array) {
array.forEach(politelyDecline);
}

// NOW WE NEED TO GET HEALTHY! WRITE A FUNCTION acceptEverything() THAT TAKES IN AN ARRAY OF STRINGS AND LOOPS THROUGH EACH ELEMENT IN THE ARRAY AND GRUDGINLY ACCEPTS EACH OF THEM, BY LOGGING TO THE CONSOLE IN THE FORMAT: 'Ok, I guess I will eat some [element].'

//YOU CAN USE ANY TECHNIQUE YOU WANT TO ACCOMPLISH THIS TASK.

function acceptEverything(array) {
array.forEach(elem =>{
  console.log(`Ok, I guess I will eat some ${elem}.`)
})
}

// acceptEverything(veggies)


//7. WRITE A FUNCTION, squareNums(), THAT TAKES IN AN ARRAY OF NUMBERS AND, USING .map(), RETURNS AN ARRAY WITH THE SQUARE OF EACH OF THE ELEMENTS OF THAT ARRAY.

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

//using a third separate function: toSquare:

const squareNums = array => {
return array.map(toSquare);
}

//not using a third function:

// const squareNums = array => {
//   return array.map(elem => elem * elem);
// }

console.log(squareNums(numbers))


//8. GIVEN THE ARRAY greetings MAKE A FUNCTION shoutGreetings() THAT MAKES EACH ELEMENT ALL CAPITALIZED AND APPEND A "!" AT THE END OF EACH ELEMENT AND RETURN AN ARRAY

function shoutGreetings(array) {
return array.map(elem => 
  elem.toUpperCase() + `!`
)
}

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

// console.log(shoutGreetings(greetings))


//9. GIVEN THE ARRAY years AND USING THE .sort() METHOD, RETURN AN ARRAY IN DESCENDING ORDER

//as an arrow function
const sortYears = array => array.sort((a, b) => b - a);

//written as a function declaration
// function sortYears(array) {
//   return array.sort((year1, year2) => year2 - year1)
// }

/*
// As a function declaration AND using a named function:

function sortYears(array) {
    const checkYears = (year1, year2) => year2 - year1
    return array.sort(checkYears)
}
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

// console.log(sortYears(years))


//10. GIVEN THE TWO ARRAYS AND USING .filter() METHOD, RETURN AN ARRAY CONTAINING ONLY THE ELEMENTS THAT EXISTS IN BOTH ARRAYS

// function justCoolStuff(arr1, arr2) {
//   return arr1.filter(elem => arr2.includes(elem))
// }

//not using the .filter() method:

function equalElem(arr1, arr2) {
let theCoolestStuff = []
for(let i = 0; i < arr1.length; i++) {
  for(let j = 0; j < arr2.length; j++) {
    if(arr1[i] === arr2[j]){
      theCoolestStuff.push(arr1[i])
    }
  }
}
return theCoolestStuff
};


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

// console.log(equalElem(coolStuff, myStuff))

// console.log(justCoolStuff(myStuff, coolStuff))


//11. GIVEN THE ARRAY OF OBJECTS dinner MAKE A FUNCTION .isTheDinnerVegan() THAT RETURNS A BOOLEAN VALUE BASED ON WHETER OR NOT EVERY ITEM IN THE ARRAY HAS ENTIRELY PLANT-BASED ORIGINS

const isTheDinnerVegan = array => {
for(let i=0; i < array.length; i++) {
  if(array[1].source === 'plant') {
    return true
  } else {
    return false
  }
}
}


const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// console.log(isTheDinnerVegan(dinner))


//12. GIVEN THE speciesArray ARRAY, SORT THE ARRAY IN ASCENDING ORDER BASED ON THE AVERAGE NUMBER OF TEETH THAT SPECIES POSSESSES;


const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = array => array.sort((a, b) => a.numTeeth > b.numTeeth)

//or using a function

// function sortSpeciesByTeeth(array) {
//   const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
//   return array.sort(compareTeeth)
// }

console.log(sortSpeciesByTeeth(speciesArray))



//13. GIVEN THE ARRAY randomStuff WRITE A FUNCTION findMyKeys() THAT TAKES IN AN ARRAY OF STRINGS WHICH MAY OR MAY NOT CONTAIN 'keys'. IF THE KEYS ARE IN THE ARRAY, YOUR FUNCTION SHOULD RETURN THE INDEX AT WHICH THEY CAN BE FOUND. IF THEY'RE NOT IN THE ARRAY, YOUR FUNCTION SHOULD RETURN -1;

// const findMyKeys = array => {
//   if (array.includes('keys')) {
//     return array.indexOf('keys');
//   } else {
//     return -1
//   }
// }

//USING .findIndex()

const findMyKeys = array => {
return array.findIndex(elem => elem === 'keys')
}

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

//14. WRITE A FUNCTION dogFactory(), IT SHOULD: 

// - HAVE THREE PARAMETERS: NAME, BREED, AND WEIGHT (IN THAT ORDER)
// - EXPECT name AND breed TO BE STRINGS
// - EXPECT weight TO BE A NUMBER
// - RETURN AN OBJECT
// - HAVE EACH OF THOSE PARAMETERS AS KEYS ON THE RETURNED OBJECT RETURNED WITH THE VALUES OF THE ARGUMENTS THAT WERE PASSED IN


const dogFactory = (name, breed, weight) => {
return {
  _name: name,
  _breed: breed,
  _weight: weight,
  
//ADD GETTERS AND SETTERS FOR EACH OF THE THREE PROPERTIES AND CHANGE THE PROPERTY NAMES TO HAVE AN UNDERSCORE PREPEND

  set name(name) {
    if (typeof name === 'string') {
      this._name = name
    }
  },
  get name() {
    if(this._name) {
      return this._name
    }
  },
  set breed(breed) {
    if (typeof breed === 'string') {
      this._breed = breed
    }
  },
  get breed() {
    if(this._breed) {
      return this._breed
    }
  },
  set weight(weight) {
    if (typeof weight === 'number') {
      this._weight = weight
    }
  },
  get weight() {
    if (this._weight) {
      return this._weight
    }
  },
  
//ADD TWO METHODS TO YOUR OBJECT: .bark() WHICH RETURNS `ruff! ruff!` AND .eatTooManyTreats() WHICH SHUOLD INCREMENT THE WEIGHT PROPERTY BY 1

  bark() {
    return `ruff! ruff!`
  },
  eatTooManyTreats() {
    this._weight += 1
  }
}
}


console.log(dogFactory('Zoe', 'Daschhound', 8));


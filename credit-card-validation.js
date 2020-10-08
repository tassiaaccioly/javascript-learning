// Given the arrays and array of arrays of credit card numbers, the objective is to validate or invalidate credit card numbers:

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


//Create a function to validate credit card numbers in the arrays using the Luhn Algorithm:

// 1. First, remove the check digit (last number) and starting from the removed number, to the first, duplicate every two digits. The first one to be duplicated will be the very first one to the left after the digit;

//2. If any of the digits duplication exceeds 9, remove 9 from the final number (or add the two, example 12 = 1 + 2 = 3 || 12 = 12 - 9 = 3); 

//3. Add all the numbers in the credit card: all the duplicated, all the pre-existing non-duplicated numbers and the check digit;

//4. If this sum, divided by 10 has a remains of 0, this is a valid credit card number, if not, this is not a valid credit card number;

// FUNCTION TO THE LUHN ALGORITHM:

function validateCred(anArr) {
  
  //FIRST, ARRAY IS REVERSED AND CHECK DIGIT REMOVED AND STORED IN A VARIABLE FOR LATER USE;
  let reverseArr = anArr.reverse();
  let digit = reverseArr.shift();
  // console.log(reverseArr);
  // console.log(digit);
  for (let i = 0; i < reverseArr.length; i++) {
    // console.log(`i is ` + i);
    
  //THEN EACH EVEN NUMBER IS DUPLICATED (starting from index 0 since check digit was removed):
    if (i % 2 === 0) {
      let numSum = reverseArr[i] * 2;
      reverseArr[i] = numSum;
      // console.log(numSum);
      
  //NUMBERS OVER 9 ARE NORMALIZED:
      if (numSum > 9) {
        let firstSum = numSum - 9;
        reverseArr[i] = firstSum;
        // console.log(firstSum);
      }
    }
  }
  // console.log(reverseArr);
  // console.log(reverseArr.reduce((a,b) => a + b) + digit);
  
  //THEN ALL NUMBERS IN THE CREDIT CARD SUMMED AND TESTED FOR TRUTHNESS/VALIDATION:

  if ((reverseArr.reduce((a,b) => a + b) + digit) % 10 === 0 ) {
    return true;
  } else {
    return false;
  }
  // console.log(reverseArr);
  // console.log(reverseArr.reduce((a,b) => a + b));
  // console.log(reverseArr);
}

//THIS FUNCTION CREATES TWO ARRAYS, ONE FOR THE VALID CREDIT CARDS AND ONE FOR THE INVALID ONES:

const invalidCards = [];
const validCards = [];

function findInvalidCards(nestedArray) {
  for (let i = 0; i < nestedArray.length; i++) {
    if (validateCred(nestedArray[i]) === false) {
      invalidCards.push(nestedArray[i]);
    } else {
      validCards.push(nestedArray[i]);
    }
  }
  // console.log(nestedArray);
}

// findInvalidCards(batch);

// console.log(`These are the invalid credit cards: `, invalidCards);
// console.log('These are the valid credit cards: ', validCards);

//THIS FUNCTION CREATES AN ARRAY OF ALL THE COMPANIES THE INVALID CREDIT CARDS ARE FROM, WITHOUT HAVING DUPLICATES:

const invalidCardCompanies = [];

function idInvalidCardCompanies(invalidArrays) {
  for (let i = 0; i < invalidArrays.length; i++) {
    let firstDigit = invalidArrays[i][0];
    console.log(firstDigit);
    switch (firstDigit) {
      case 3: 
  //THESE IF STATEMENTS GUARANTEE THERE WILL NOT BE DUPLICATES IN THE ARRAY
          if (invalidCardCompanies.includes('Amex (American Express)')) {
            break;
          } else {
            invalidCardCompanies.push('Amex (American Express)');
            break;
        }
      case 4:
          if (invalidCardCompanies.includes('Visa')){
            break;
          } else {
            invalidCardCompanies.push('Visa');
            break;
        }
      case 5:
          if (invalidCardCompanies.includes('Mastercard')){
            break;
          } else {
            invalidCardCompanies.push('Mastercard');
            break;
        }
      case 6: 
          if (invalidCardCompanies.includes('Discover')){
            break;
          } else {
            invalidCardCompanies.push('Discover');
            break;
        }
      default:
          if (invalidCardCompanies.includes('Company Not Found')) {
            break;
          } else {
            invalidCardCompanies.push('Company Not Found');
            break;
          }

    }
  }
}

// idInvalidCardCompanies(invalidCards);


// console.log(invalidCards);
// console.log(invalidCardCompanies);

//CREATE A FUNCTION THAT TAKES IN CREDIT CARD NUMBER STRINGS AND TURN THEM INTO ARRAYS:

let batchArrays = [[], [], []];

// function stringToArray(cardNumber) {
//   let newArray = cardNumber.length
//   for (newArray in cardNumber) {
//     for (let i = 0; i < cardNumber.length; i++) {
    
//     }
//   }
// };

let functionCalls = 0;

function stringToArray(cardNumber) {
  for (let i = 0; i < cardNumber.length; i++) {
    batchArrays[functionCalls].splice(0, 0, cardNumber[i]);
  }
  functionCalls++;
}

stringToArray('345664809481879');
stringToArray('345664809481879');
stringToArray('345664809481879');
console.log(batchArrays);
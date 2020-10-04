//Building a calculator-like function

//Step one, create a function with 3 parameters, number one, number 2 and a operator

function calculator(num1, num2, operator) {
    //makes sure users always passes 3 arguments
    
    if (!num1 || !num2 || !operator) {
      console.log('Please provide both numbers and operator!');
      return;
    }
    
    //makes sure user passes numeric value'
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      console.log('Please add numeric value only!');
      return;
    }
    
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log(`Operator error! Operator ${operator} is invalid!`);
    }
    let response = `${num1} ${operator} ${num2} = ${result}`;
    return response;
  };
  
  //console.log(calculator(4, 5, '+'));
  
  //PRACTICE 1
  
  //Define function welcome() that will receive one argument, your name, and greet you with your name.
  
  function welcome(yourName) {
    console.log(`Hello! ${yourName}!`);
    return
  }
  
  //welcome('Tassia');
  
  //Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )
  
  function printToTwenty () {
    for (let i = 0; i <= 20; i++) {
      console.log(i);
    };
    return
  }
  
  //printToTwenty();
  
  //Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument
  
  function printNumbers(number) {
    for (let i = 0; i <= number; i++) {
      console.log(i);
    };
    return
  };
  
  //printNumbers();
  
  //Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. Use the following array to pass it as an argument to the function you have just defined:
  
  function printArrElements(someArr) {
    for (let i = 0; i < someArr.length; i++) {
      console.log(someArr[i]);
    };
  };
  
  let ironCities = ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Mexico City', 'Miami', 'Paris', 'Sao Paulo'];
  
  //printArrElements(ironCities);
  
  //PRACTICE 2
  
  //Define an array of your favorite cities and pass it as an argument to the previously defined function. Invoke a function.
  
  let myCities = ['Niteroi', 'Buenos Aires', 'Tiradentes', 'Teresopolis', 'Petropolis'];
  
  //printArrElements(myCities);
  
  //Define another array of your favorite food and pass it to this function when invoking it.
  
  let myFoods = ['sushi', 'pizza', 'chili', 'eggs', 'lamen', 'tamagoyaki'];
  
  //printArrElements(myFoods);
  
  //Define a function printEvens(someArr) and use the ironCities array and print only its even elements. The output should be:
  
  function printEvens(someArr) {
    for (let i = 0; i < someArr.length; i++) {
      if (i % 2 === 0) {
        console.log(someArr[i]);
      } else {
        continue;
      }
    }
    return
  };
  
  //printEvens(ironCities);
  
  //PRACTICE 3
  
  //Define a function that will receive an array as an argument and calculate a sum of all its elements. For example, if we pass the following array to that function: const prices = [5, 7.99, 9.99, 0.99, 21], it should return 44.97 as output. How would you concatenate $ sign in front of the sum?
  
  //Option 1
  
  // function calculateSum(anArray) {
  //   const sum = anArray.reduce((a,b) => a + b);
  //   console.log(`You final price is `+ `$` + sum);
  //   return sum;
  // };
  
  
  //Option 2
  
  let base = 0
  
  function calculateSum(anArray) {
    anArray.forEach(number =>
     base += number);
    console.log(base);
    return base
  }
  
  let prices = [5, 7.99, 9.99, 0.99, 21];
  
  //calculateSum(prices);
  
  
  //Define a function stringToLetters() that receives a string as an argument and returns an array of its letters. Example:
  
  const endArray = [];
  
  function stringToLetters(someString) {
    for (let i = 0; i < someString.length; i++) {
      endArray.push(someString[i]);
    }
    console.log(endArray);
    return
  };
  
  //stringToLetters('onomatopeia');
  
  //PRACTICE 4
  
  //Define a function that will:
  
  //1. count from 1 to 100,
  //2. on numbers divisible with 4 print “Hey”,
  //3. on numbers divisible with 6 print “There”,
  //4. on numbers divisible with both 4 and 6 print “Ironhack”,
  //5. skip numbers divisible with 7,
  //6. on the number that represents your age add ! (ex. 34!).
  
  function heyThere() {
    for (let i = 0; i <= 100; i++) {
      if (i % 7 === 0) {
        continue;
      }
      if (i % 4 === 0 && i % 6 === 0) {
        console.log('Ironhack');
        continue;
      }
      if (i % 4 === 0) {
        console.log('Hey');
        continue;
      }
      if (i % 6 === 0) {
        console.log('There');
        continue;
      }
      if (i === 31) {
        console.log(`${i}!`);
        continue;
      }
      console.log(i);
    }
    return;
  }
  
  //heyThere();
//Perfom a few operations on the given array:
//1. Add two of your favorite animals to the end of the array;
//2. Remove the first two elements of the array;
//3. Replace the last element in the array with the word "last"

const animalArray = ['dog', 'cat', 'fish'];

//1.
animalArray.push('sloth', 'pig');
console.log(animalArray);

//2. 
animalArray.splice(0, 2)
console.log(animalArray);

//3. 
const lastIndex = animalArray.length - 1;
console.log(lastIndex);

delete animalArray[2];

console.log(animalArray);

animalArray[2] = "last";

console.log(animalArray);

//Create an array with 6 of your favorite foods. With the loop of your choice, iterate //through the array, but only print out the foods with an even index.


let foodArray = ['risotto', 'lamen', 'sushi', 'chili', 'fajitas', 'steak'];

for (let i = 0; i < foodArray.length; i++) {
  if (!(i % 2 === 0)) {
    continue;
     }
  console.log(foodArray[i]);
 }


//Check if the word appear in given array and print out if it does or doesn't

let word = 'miami';
let arr = ['bcn', 'mia', 'sao', 'mex', 'par', 'miami', 'ams', 'ber', 'paris', 'lis', 'mad'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  
  if (arr[i] === word)
    break;
}

//Given array numbers, calculate the sum

//Try to reduce to one decimal => Math.round(num * 10)/10 || let num = XX let n = //num.toFixed(1) (for one decimal, important to note that .toFixed() transforms the number into a string)

//Option 1 - To have the final sum as a variable to work with

const prices = [10.99, 44.56, 112.79, 3, 5];

let sum = 0;

let finalNum = prices.reduce((a,b) => a + b)

console.log(finalNum.toFixed(1));

//Option 2 - Just printing it to the console

console.log(
    Math.round(prices.reduce((a,b) => a + b, 0)*10) / 10
)

//Option 3 - Using let sum = 0

prices.forEach(number => {
  sum += number;
});

console.log(
    Math.round(sum*10) / 10
);

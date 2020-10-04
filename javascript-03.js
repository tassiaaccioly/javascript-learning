let str1 = "Hi! I'm a string";
let str2 = "Hello! I'm also a string";

//compare two strings, learn which one is bigger in length and print that one

if (str1.length < str2.length) {
  console.log(str2);
} else {
  console.log(str1);
}

//know if word exists in sentence and if so, print sentence

let word = 'web';
let sentence = 'I enrolled Ironhack because I love web development';

if (sentence.includes(word)) {
  console.log(sentence);
}

//Input number and print if it's even (true) or if it's odd (false)

let num = 218;

if (num % 2 === 0) {
  console.log('true');
} else {
  console.log('false');
}

//Input year and print century

let year = 1000;

if (year < 100) {
      console.log(1);
} else if (100 < year < 999) {
      year = (year/100) +1;
     console.log(Math.floor(year));
} else if (1000 < year < 9999) {
      year = (year/1000) +1;
      console.log(Math.floor(year));
}
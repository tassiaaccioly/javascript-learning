//Given str1, see if words are included in the string

const str1 = 'Web Dev is Amazing!';

console.log(str1.includes('development'));

console.log(str1.includes('Development'));

console.log(str1.includes('web'));

console.log(str1.includes('ing'));

console.log(str1.includes('Web'));

//Print str2 and str3 together

const str2 = 'Hey!'

const str3 = ' How are you?'

console.log(str2 + str3);

//Given strings, print 1099

const str4 = 10

const str5 = 99

console.log(`${str4}${str5}`);

//Given sentence, print half of it "this is one meaningless sentence"

let sentence = 'This is one meaningless sentence which needs to be cut in half.';

console.log(sentence.length);

console.log(sentence.substring(0, 32));

//Given City, uppercase the word, uppercase the first letter, uppercase the middle letter

let city = 'niteroi';

console.log(city.toUpperCase());

console.log(city.charAt(0).toUpperCase() + city.substring(1, 7));

console.log(city.slice(0, 3) + city.charAt(3).toUpperCase() + city.slice(4, 7));
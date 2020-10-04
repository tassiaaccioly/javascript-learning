// make the while count to 0 from 30

let count = 30;

while (count > -1) {
  console.log(count);
  count -= 1;
}

//make the loop count to zero from 10

for (let i = 10; i > -1; i--) {
  console.log(`counting down from ${i} to zero`);
}

//Print number 1 through 50;
//if the number is divisible by 5, skip it,
//if the number is divisible by 10 or 15, print "Donkey!"
//if the number is not divisible by 2 and the previous number is divisible by 10, print "Monkey!"

for (let i = 1; i <= 50; i++) {
  if (i % 10 === 0 || i % 15 === 0) {
        console.log('Donkey!');
        continue;
  }
    
      if ((i - 1) % 10 === 0 && !i % 2 === 0) {
          console.log('Monkey!'); 
          continue;
      }
         if (i % 5 === 0) {
              continue;
         }
  console.log(i);
}

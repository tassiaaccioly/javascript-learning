//Create a calculator of actual sleep hours, needed sleep hours and a sleep hour debt:

//First Iteration

// const getSleepHours = day => {
//   switch (day){
//     case 'monday':
//       return 8;
//       break;
//     case 'tuesday':
//       return 8;
//       break;
//     case 'wednesday':
//       return 8;
//       break;
//     case 'thursday':
//       return 8;
//       break;
//     case 'friday':
//       return 6;
//       break;
//     case 'saturday':
//       return 6;
//       break;
//     case 'sunday':
//       return 10;
//       break;
//   }
// };


// const getActualSleepHours = () => {
// let hoursSum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
// return hoursSum;
// };

// const getIdealSleepHours = () => {
//   let idealHours = 7;
//   return idealHours * 7;
// };

// const calculateSleepDebt = () => {
//   let actualSleepHours = getActualSleepHours();
//   let idealSleepHours = getIdealSleepHours();
//   if (actualSleepHours === idealSleepHours) {
//     console.log(`You've got the perfect amount of sleep`);
//   } else if (actualSleepHours > idealSleepHours) {
//     console.log(`You've slept ` + (actualSleepHours - idealSleepHours) + ` hour(s) more than you actually need this week.`);
//   } else {
//     console.log(`You've slept` + (idealSleepHours - actualSleepHours) + `hour(s) less than you need this week. You should turn the computer off and go to sleep!`);
//   };
// };

// calculateSleepDebt();


//Refactoring

const getActualSleepHours = () => {
    6 + 7 + 8 + 6 + 8 + 7 + 8
  };
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours < idealSleepHours) {
      console.log(`You've slept ` + (idealSleepHours - actualSleepHours) + ` hour(s) less than you need this week. You should turn the computer off and go to sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You've slept ` + (actualSleepHours - idealSleepHours) + ` hour(s) more than you actually need this week.`);
    } else {
      console.log(`You've got the perfect amount of sleep`);
    };
    return calculateSleepDebt();
  };
  
  
  calculateSleepDebt();
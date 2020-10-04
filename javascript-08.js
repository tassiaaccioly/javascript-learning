//Using the given array of objects:

//1. display price of iPhone,
//2. display both phones’ names,
//3. add a new phone at the beginning of the array,
//4. remove the last element of the array

let products = [
    {
      name: 'iPhone',
      price: 799.99
    },
    {
      name: 'Samsung Galaxy S10',
      price: 900.00
    }
  ];
  
  //1.
  
  console.log(products[0].name);
  
  //2. 
  
  console.log(products[0].name, products[1].name);
  
  //3. 
  
  let xiaomiPhone = {
    name: 'Xiaomi 10',
    price: 700
  };
  
  products.unshift(xiaomiPhone);
  
  console.log(products);
  
  //4. 
  
  products.pop();
  
  console.log(products);
  
  
  // Given the array, print:
  
  //1. your course type (full-time or part-time)
  //2. the most familiar topic
  //3. the least familiar topic
  
  let course = {
    name: 'Web Development',
    type: ['full-time', 'part-time'],
    topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
  };
  
  //1. 
  
  console.log(course.name, course.type[0]);
  
  //2.
  
  console.log(course.topics[0]);
  
  //3. 
  
  console.log(course.topics[2]);
  
  
  //Given the object with nested objects in it, print:
  
  //1. console.log(???); //=> Web Development
  //2. console.log(???); // => Happy Street
  //3. console.log(???);
  //4. => Ana moved from Barcelona to Madrid to take part-time Web Development course.
  
  let student = {
    firstName: 'Ana',
    lastName: 'Blair',
    course: {
      name: 'Web Development',
      type: 'part-time'
    },
    attendedIn: 'Madrid',
    address: {
      street: 'Happy Street',
      number: 123,
      city: 'Barcelona',
      zip: 08015,
      country: 'Spain'
    }
  };
  
  //1. 
  
  console.log(student.course.name);
  
  //2. 
  
  console.log(student.address.street);
  
  //3. 
  
  console.log(`${student.firstName} moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course.`);
  
  
  //Given a 2D array, print the following:
  
  //1. console.log(ironCampuses[?][?]); // => Miami
  //2. console.log(ironCampuses[?][?]); // => Amsterdam
  //3. console.log(ironCampuses[?][?]); // => Paris
  
  const ironCampuses = [
    ['Mexico City', 'Miami', 'Sao Paulo'],
    ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Paris']
  ];
  
  //1. 
  
  console.log(ironCampuses[0][1]);
  
  //2.
  
  console.log(ironCampuses[1][0]);
  
  //3.
  
  console.log(ironCampuses[1][5]);
  
  
  //Given the object with arrays and objects inside arrays and objects retrieve the following:
  
  //1. console.log(???)  // => ExpressJS
  //2. console.log(???)  // => In IronHack, I'll learn ExpressJS and ReactJS.
  
  let basic ={
    language: 'JavaScript',
    frameworks: [
      {
        end: 'back',
        list: [
          {
            name: 'ExpressJS',
            released: 2010
          },
          {
            name: 'MeteorJS',
            released: 2012
          }
        ]
      },
      {
        end: 'front',
        list: [
          {
            name: 'ReactJS',
            released: 2012
          },
          {
            name: 'VueJS',
            released: 2014
          }
        ]
      }
    ]
  };
  
  //1. 
  
  console.log(basic.frameworks[0].list[0].name);
  
  //2.
  
  console.log(`In Ironhack, I'll learn ${basic.frameworks[0].list[0].name} and ${basic.frameworks[1].list[0].name}`);
  
  
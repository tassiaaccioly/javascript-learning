//transform an if statement into a switch statement

let fruit = "blackberry";
let type = "";

switch (fruit) {
  case "pear":
  case "apple":
    type = "pome";
    console.log(`${fruit} is a type of ${type}`)
    break;
  case "peach":
  case "coconut":
    type = "drupe";
    console.log(`${fruit} is a type of ${type}`)
    break;
  case "strawberry":
  case "blackberry":
    type = "berry";
    console.log(`${fruit} is a type of ${type}`)
    break;
  case "beans":
  case "peas":
    type = "legumes";
    console.log(`${fruit} is a type of ${type}`)
    break;
  default:
    type = "other";
    console.log(`${fruit} is an${type} type of fruit`)
    break;             
} 



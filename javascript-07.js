let olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powel',
};

//Adding another property:value to the object after declaring it

olympicRecords.swimming200Men = 'Michael Phelps';

//Updating an existing value inside the object

olympicRecords.athletics100Men = 'Usain Bolt';

console.log(Object.keys(olympicRecords));

//Print (console.log()) value of the property name in the given object

let student = {
  name: 'Max',
  age: 27
};

for (let value in student) {
  console.log(`Property/key: ${value} / value: ${student[value]}`);
}

//Find the value of the price property, and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. Update the object with :
//1. the new property - discount and the corresponding value (7% or 10%);
//2. the new price

let product = {
  name: 'headphones',
  price: 100
};

//adding new keys/values as discounts to the object

product.discount1 = .93;
product.discount2 = .9;

console.log(product);

//apply discount and change back the object

if (product.price > 100) {
  let salePrice = (product.price * product.discount2);
  console.log(Math.round(salePrice));
  product.price = Math.round(salePrice);
} else {
  let salePrice = (product.price * product.discount1);
  console.log(Math.round(salePrice));
  product.price = Math.round(salePrice);
};

console.log('Updated product:', product);

//Use given object and loop through its properties, and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In the opposite case, do what you did in the previous exercise: check the price, depending on it (if it is greater or lower than 100), add a discount (10% or 7%) and add the property “discount” to the object.

let prod = {
  name: 'headphones',
  price: 83.7,
  discount: "7%"
};

const prodValuesArray = Object.values(prod);

console.log(prodValuesArray);

for (let key in prod) {
  if (key === "discount"); {
  let value2 = prod.discount;
  console.log(`Already discounted by...${value2}`);
  break;
  }
};

//Add discount property to the object

prod.discount1 = .9;

//If > than 100, discount 10%, if < 100 discount 7%

if (prod.price > 100) {
  let prodPrice = (prod.price * prod.discount1);
  console.log(Math.round(prodPrice));
} else {
  prod.discount = .93
  let prodPrice = (prod.price * prod.discount);
  console.log(Math.round(prodPrice));
};

console.log(prod);



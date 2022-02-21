// 1. let and construct
let age = 19;
age = 20;
const name = 'Humayra;';

// template string.
const favoritePlace = {
    first : 'bandarbon',
    second : 'saint martin',
    third : 'nijum dhip'
}
const visitingPlace = `I am ${name}.i visit lot of places. my favorite place is ${favoritePlace.third}`
console.log(visitingPlace);

// arrow functions


const numbers = num => num % 5;
const number = numbers(26);
console.log(number);
const point = (num1, num2) => (num1 + 2) * (num2 + 2);
const result = point(2, 4);
console.log(result);
 const multiNum = (num1, num2, num3) => (num1 * num2 * num3);
 const multiply = multiNum(4, 5, 2);
 console.log(multiply);

//  array map
const array = [23, 12, 10, 24];
const output = array.map(x => x * 5);
console.log(output);

// odd number
const allNumber = [2,34,5, 6, 7, 9, 11];
const oddNumber = allNumber.filter(x => x % 2);
console.log(oddNumber);

// find

const product = [
    {name: "oppo", price: 5000, color: "blue"},
    {name: "nokia", price: 500, color: "blue"},
    {name: "iphone", price: 5000, color: "blue"},
];
const price =product.find(p => p.price == 5000);
console.log(price);
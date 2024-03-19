const arr = [17, "I love food", true];

console.log("Second value of the array", arr[1]);

const pet = {
  name: 'Bobik',
  age: 7
}

console.log("My pet's name is", pet.name);


const arrCopy = {
  0: 'Sweetpie',
  1: 7
}


// primitive types are copied when assigned to other variables
const myAge = 15;
let myFriendAge = 14;
const anotherFriendAge = myFriendAge;
myFriendAge = 17;
console.log(anotherFriendAge);

let myToDo = 'Finish homework';
const myFriendToDo = myToDo;
myToDo = 'Wash the dishes';
console.log(myToDo, myFriendToDo);

// non-primitive type (they store the reference to their values)
let myHobbies = ['Playing tennis', 'Watching movies', 'Reading books'];
let myFriendHobbies = myHobbies;
myHobbies[1] = 'Watching TV shows';
console.log(myFriendHobbies);

myHobbies = [];
console.log(myFriendHobbies);
console.log(myHobbies);

const me = {
  name: 'John',
  age: 32,
  isMarried: true
}

const jack = {
  name: 'Jack',
  age: 35,
  isMarried: false,
  lovesSoccer: true,
  yearsOfExperience: 12,
  hasSiblings: true,
  favoriteColor: 'green'
}

const steve = jack; // copies the reference to the jack variable value
steve['name'] = 'Steve';  // reassigns both jack and steve objects name to 'Steve'
console.log("This is my friend Steve", steve);
console.log("This is my friend Jack", jack);


const additionResult = add(5, 'Sdfsdf');
if (additionResult)
  console.log(additionResult);

// Functions
// one way to create a function
function add(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log("You passed wrong values");
    return;
  }
  console.log(num1, num2);
  const result = num1 + num2;
  return result;
}

// Optional parameter  
function giveSalary(employee, amount = 3000) {
  employee = mike;
  employee.balance += amount;
}

const mike = {
  name: "Mike",
  age: 41,
  balance: 15000
}

giveSalary(mike, 5000);
console.log(mike);


// second way to create a function
const giveSalary2 = function (employee, amount = 3000) {
  employee.balance += amount;
}

const rick = {
  name: "Rick",
  age: 27,
  balance: 15000
}

giveSalary2(rick);
console.log(rick);

console.log(typeof giveSalary);  // function
console.log(typeof giveSalary2);  // function

// Build-in string functions
const sentence = "The orange fox crossed the river.";

// strings can be indexed
console.log(sentence[6]); // outputs r

const words = sentence.split(' ');
console.log(words);

const hasFox = sentence.includes('fox');
console.log("Do we have fox in our sentence?", hasFox);

const strUpperCase = sentence.toUpperCase();
console.log(strUpperCase);

const strLowerCase = sentence.toLowerCase();
console.log(strLowerCase);

const indexOfFox = sentence.indexOf('fox');
console.log(indexOfFox);  // gives the index of the beginning of the search value
console.log(sentence[indexOfFox]);  // f

const index = sentence.indexOf('river');
console.log(index);  // -1
if (index < 0) {
  console.log("Could not find world in your text");
}

const fox = sentence.slice(indexOfFox, indexOfFox + 3);
console.log(fox);  // fox

// Homework 
// 1. Create a function that accepts any number of parameters and returns its sum
//       task1(3, 3, 5, 23, 77, 99); task1(3, 3, 5, 23, 77, 99, 2, 1, 11, 34); task1(3); 
// 2. Execute the following string methods on our sentence variable: trim(), replace(), concat()
// 3. Given our sentence variable, count how many vowels we have in it. 
//       Note that it should count uppercase and lowercase vowels. Create a separate function for this that we can reuse.

///1
function sumNumbers(...nums) {
  // const n1 = 3
  // const n2 = 3
  // const n3 = 5
  // const n4 = 23
  // const n5 = 77
  // const n6 = 99
  for (let i = 0; i < nums.length; i++){
    sum += nums[i]
  }
  return sum
}
let sum = 0
sumNumbers(3,3, 5, 23, 77, 99)
console.log(sum)


function sumNumbers1(...nums) {
   
  
  for (let i = 0; i < nums.length; i++){
    sum1 += nums[i]
  }
  return sum1
}
let sum1 = 0
sumNumbers1(3, 3, 5, 23, 77, 99, 2, 1, 11, 34)
console.log(sum1)

function sumNumbers2(num) {
   
  let sum2 = 0
  sum2 += num
  return sum2
}
let sum2 = 0
sumNumbers2(3)
console.log(sum2)

//2
//let sentence = " This is a test  "
let test = " This is a test  "
console.log(test.trim())

let test1 = "This is a test"
console.log(test1.replace("test", "note"))

let test3 = "This is a test"
console.log(test1.concat(" from isds"))

//3
// function countVowels(sentence){

//   for (let i=0; i < sentence.length;i++){
//     if (vowelss.includes(sentence[i])){
//       res += 1
//     }
//   }
//   return res
// }
// let firstSentence = "Taking a Computer Science course"
// let newSentence = firstSentence.toLowerCase()
// const vowelss = ["a", "e", "i", "o", "u"]
// let res = 0
// countVowels(sentence)
// console.log(res)

//corrected version below
function countVowels(sentence){

  for (let i=0; i < sentence.length;i++){
    if (vowelss.includes(sentence[i])){
      res += 1
    }
  }
  return res
}

sentence.toLowerCase()
const vowelss = ["a", "e", "i", "o", "u"]
let res = 0
countVowels("Taking a Computer Science course")
console.log(res)

// function countVowels(sentence){

//   sentence.forEach(element) => if (vowelss.includes(sentence[i])){
//       res += 1
//     }
  
//   return res
// }

// let newSentence = sentence.toLowerCase()
// const vowelss = ["a", "e", "i", "o", "u"]
// let res = 0
// countVowels("Taking a Computer Science course")
// console.log(res)
let cats = [
  {
    name: "Garfield",
    age: 40,
    hungry: true
  },
  {
    name: "Felix",
    age: 80,
    hungry: false
  },
  {
    name: "Grumpy 😇",
    age: 8,
    hungry: false
  },
  {
    name: "Nermal",
    age: 4,
    hungry: true
  },
  {
    name: "Mr. Snibbley",
    age: 480,
    hungry: false
  }
]
// STANDARD For Loop
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i]; // alias out a single item from the array
//   console.log(i + 1 + ')', cat.name)
// }

// WHILE loop
// let num = 0
// while (num < 1000000001) {
//   num++
// }
// console.log(num)


// For in (itterating over objects)

let user = {
  name: "Mark",
  age: 32,
  height: "6'2"
}

// for (let key in user) {
//   let pair = `${key} is ${user[key]}`
//   console.log(pair)
// }
// console.log(Object.keys(user))
// console.log(Object.values(user))



// SECTION Array Methods

// forEach (Itterates over all elements within the array and cannot be stopped without a return)
// callbacks / higher order functions / function / lambda expression
// cats.forEach(function(){})
// cats.forEach(() => {})
// cats.forEach(cat => console.log(cat.name))
cats.forEach((cat, i) => console.log(i + 1 + ')', cat.name))


// `find` given a condition return the first value that meets the condition

// as a for loop
// let found;
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i];
//   if (cat.name.toLowerCase() === 'felix') {
//     found = cat;
//     break;
//   }
// }

let found = cats.find(cat => cat.name.toLowerCase() === 'felix')


// `filter` reduces an array to only values that meet the condition

// as a loop 
// let filtered = []
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i];
//   if (cat.age > 10) {
//     filtered.push(cat)
//   }
// }

let filtered = cats.filter(cat => cat.age > 10)


// MAP itterates over an array and creates a new array having modified all values

// as a loop
// let fed = []
// for (let i = 0; i < cats.length; i++) {
//   const cat = cats[i];
//   let catString = `${cat.name} is ${cat.age} and is ${cat.hungry ? "" : "not "}hungry`
//   fed.push(catString)
// }

let fed = cats.map(cat => `${cat.name} is ${cat.age} and is ${cat.hungry ? "" : "not "}hungry`)


// PUSH, POP, SHIFT, UNSHIFT
// Additive PUSH, UNSHIFT
cats.push({ name: "Tom", age: 23, hungry: true }) // adds to end of array
cats.unshift({ name: "Thomas O'Malley", age: 13, hungry: true })// adds to beginning of array

// Subtractive POP, SHIFT
cats.pop() // removes last element
let tomally = cats.shift() // removes first element of the array

// SLICE makes a copy of section of an array (non destructive)
let top4 = cats.slice(0, 4)


// SPLICE cuts out a section of an array (destructive), can also add to a section of an array
let lastOf4 = top4.splice(3, 1)





// split / join

// SPLIT (String method) converts string to array splitting on provided character
let str = "Hello world of jello"
let words = str.split(" ")
let chars = str.split('')


// JOIN (array method) combines all elements of an array to strings with a proivided seperator
let names = ["mark", "darryl", "jake", "tim", "tim", "mick"]
let listOfNames = names.join('|')


let badVariable = "this is a bad variable"
let kabobCase = badVariable.split(" ").join("-")
let snakeCase = badVariable.split(" ").join("_")

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
}

function isStopped(car) {
  return !car.moving
  // if(car.moving){
  //   return false
  // }
  // else{
  //   return true
  // }
}



// SWITCHES
let title = "King"

switch (title.toLowerCase()) {
  case "king":
  case "queen":
    console.log("Your Magesty!")
    break;
  case "duke":
  case "dutchess":
    console.log("M'lord!")
    break;
  case "serf":
    console.log("Bro!")
  case "peasant":
    console.log("get back to work!")
    break;
  default:
    console.log("Who even are you!?")
    break;
}









// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
// input: 'Sunday', false
// output: 1
//Example:
// input: 'Sunday', true
// output: 7

function daysPosition(day, offset) {
  let dayIndex;
  switch (day.toLowerCase()) {
    case "sunday":
      dayIndex = 1
      break;
    case "monday":
      dayIndex = 2
      break;
    case "tuesday":
      dayIndex = 3
      break;
    case "wednesday":
      dayIndex = 4
      break;

    //...
    default:
      return "That's not a day of the week"
  }
  if (offset) {
    dayIndex--;
    if (!dayIndex) {
      return 7
    }
  }
  return dayIndex
}


function dayArray(day, offset) {
  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  if (offset) {
    days.push(days.shift());
  }
  let index = days.indexOf(d => d === day.toLowerCase())
  if (index === -1) {
    return "That's not a day of the week"
  }
  return index + 1
}
// Assignment 0.1

// Your JavaScript code goes below this line
console.log('Hello world!')
// This is my first coding lesson.

// Assignment 0.2

var firstName = 'Tim';
console.log(firstName);

var lastName = 'Updegraft';

var fullName = firstName + lastName;
console.log(fullName);

var fullName = 'Grace Hopper';
console.log(fullName);

// Assignment 0.3

var answer = prompt('Hi. What is your favorite movie?');

console.log(answer + ' is a great movie!');

// Assignment 0.4

var commitedHours = prompt('How many hours do you commit to coding this week?');
var Hours = prompt('How many hours have you worked so far?');


console.log('Keep up the great work! You only have ' + (commitedHours - Hours) + ' left to go!' );

// Assignment 0.5

var age = prompt('How old are you?')

var isAdult = (age >= 18);
var isTen = (age == 10);
var isNotCentenarian = (age < 100);

console.log('User is an adult: ' + isAdult);
console.log('User is exactly 10: ' + isTen);
console.log('User is NOT a centenarian: ' + isNotCentenarian);

// Assignment 0.6

var day = prompt('What day of the week is it?')
if (day === 'Thursday')
{
  console.log('Just one more day till Friday!')
}
  else if (day === 'Friday')
{
  console.log('Party time!')
}
  else  
{
  console.log('Happy ' + day + '!')
}

// Assignment 1.1

var answer = prompt('How many inches will it rain this week?');

answer = Number(answer);

if (answer < 0)
{
  console.log('That is just not possible, my friend')  
}
else if (answer == 0)
{
  console.log('I hope we are not in a drought')
}
else if (answer > 0 && answer <= 4)
{
  console.log('I should really buy a raincoat')
}
else
{
    console.log('I should really buy a boat')
}

// Assignment 1.2

for (var i = 2; i <= 100; i=i+1){
  console.log(i++)
}

console.log('whew!');

for (var i = 100; i >= 2; i=i-1){
  console.log(i)
}

console.log('whew!');

for (var i = 0; i <= 100; i=i+5){
  console.log(i)
}

console.log('whew!');

for (var i = 0; i < 7; i=i+1){
  console.log('All code and no play makes Tim a great coder.')
}

console.log('whew!');

// Assignment 1.3

var favFoods = ['Steak', 'Chicken', 'Fish', 'Potatoes', 'Spinach'];
console.log('My second favorite food is ' + favFoods[1]);
console.log('My fifth favorite food is ' + favFoods[4]);
console.log('There are ' + favFoods.length + ' items in my favoriteFoods array')

// Assignment 1.4

/* Recall the syntax and parts of a For Loop:
for ( INITIALIZATION; CONDITION; AFTERTHOUGHT ) {
  "BODY" OF THE FOR LOOP GOES HERE.
  THIS IS THE PART THAT GETS REPEATED.
}

Here's an example For Loop that will count up 
from 1 to 100 and log each number. Run this code 
and note the results before moving on. */


/* Challenge 1: Define each of the below terms in
your own words.  

variable declaration: ___YOUR ANSWER HERE____ 

variable definition: ___YOUR ANSWER HERE____ 

loop: ___YOUR ANSWER HERE____ 

iteration: ___YOUR ANSWER HERE____ 

counter variable: ___YOUR ANSWER HERE____ 

*/

/* Challenge 2: Write your own For Loop that counts
up by 10s from 1000 to 1100, logging the value in 
each iteration. */

for (var i = 1000; i <= 1100; i=i+10){
  console.log(i);
}

/* Challenge 3: Write your own For Loop that counts
up by 20s from 1400 to 1600. Use an if/else statement 
inside your loop to log the counter alongside a "-low" 
when it's < 1500, a "-medium" when it's equal to 1500 
and a "-high" when the counter is > 1500. 

So for example, your output from this loop 
should begin with:

1400-low
1420-low
1430-low...

and end with

...
1580-high
1600-high

Hint: Remember that you can "append" a number to a string
with a + operator like: console.log(i + '-high')
*/

var numbers = ['-low', '-medium', '-high'];

for (var i = 1400; i <= 1600; i=i+20)
{
  if  (i < 1500)
     console.log(i + numbers[0]);
     
  else if (i === 1500)
     console.log(i + numbers[1]);
     
  else console.log(i + numbers[2]);
  
}


// Assignment 1.5

/*
 Challenge 1: Create an array containing the last
 names of the first 5 US presidents in order, and 
 assign it to a variable called "presidents". 
 
 
 
 Make sure your spelling is correct, or the automated
 tests will not run correctly.
*/

var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe']

/*
 Challenge 2: Create an array of the first 5
 US states in alphabetical order, and assign it
 to a variable called "states".
 
 Using bracket syntax, add the sixth state by 
 alphabetical order ('Colorado') to the end of this
 array.
*/

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado']

/*
 Challenge 3: Log the length of each of your two 
 arrays, in two separate statements.
*/

console.log(presidents.length);
console.log(states.length);


// Assignment 2.1

var answer1 = prompt('What is your favorite movie?');
var answer2 = prompt('What is your second favorite movie?');
var answer3 = prompt('What is your third favorite movie?');
var answer4 = prompt('What is your fourth favorite movie?');


var answers = [answer1, answer2, answer3, answer4];

for ( var i=0; i < answers.length; i=i+1 ){
  var currentAnswer = answers[i];
  console.log(currentAnswer + ' is a great movie')
}


// Assignment 2.2

// Create a new songs array.
var songs = [];

// 1. Within a for loop, prompt the user four times 
// to enter a song title. Each time they enter a song, 
// use the push method to add it to your array.

var answer = prompt('Name a song title')
songs.push(answer);

var answer2 = prompt('Name another song title')
songs.push(answer2);

var answer3 = prompt('Name 3rd song title')
songs.push(answer3);

var answer4 = prompt('Name a final song title')
songs.push(answer4);

console.log(songs);
console.log(songs.length);

// 2. Verify that your array of songs now has four
// items in it by logging the .length of the array 
// in your console. Hint: note that .length is a 
// property rather than a function, so you don't 
// use parentheses to access it. 

// console.log( _____ )

// 3. Pop off the last item from the array, and 
// assign the popped item to a variable. 

var poppedItem = songs.pop()

console.log(poppedItem);

// 4. Log the ending length of the array.


console.log(songs.length);

// Assignment 2.3

// 1. Initialize your object.

var myPerson = {
  firstName: 'Joe',
  lastName:  'Jones',
  eyeColor:  'Blue',
  age: '22'
  };
  
// Fill in the object here.

// 2. Practice reading properties.

console.log('This person has the eye color ' + myPerson.eyeColor);
console.log('This person has the last name ' + myPerson.lastName);


// 3.Use bracket syntax with a variable
var propName = 'first name '
console.log('This person has the ' + propName + myPerson['firstName']);


// 4. Use bracket syntax for an update.
myPerson['eyeColor'] = 'hazel';


// 5. Use dot syntax for an update.
myPerson.lastName = 'Jingleheimer';


// PLEASE DO NOT ALTER BELOW THIS LINE. THIS IS CODE
// USED BY THE AUTOMATED TESTS.
console.log(myPerson);

// Assignment 2.4

var companies = [
  { name: 'company1', symbol: 'circle' , sharePrice: '10.25'},
  { name: 'company2', symbol: 'sqaure' , sharePrice: '20.50'},
  { name: 'company3', symbol: 'triangle' , sharePrice: '30.75'},
  { name: 'company4', symbol: 'diamond' , sharePrice: '40'}
  ];
  
  console.log(companies);

  console.log('The price of ' + companies[0].name + ' is ' + companies[0].sharePrice); 
  
  console.log('The price of ' + companies[3]['name'] + ' is ' + companies[3]['sharePrice']);
  
  for (var i=0; i<companies.length; i++){
  var currentCompany = companies[i];
  console.log(currentCompany.name + ' shares are priced at ' + currentCompany.sharePrice);
  } 
  
  
// Assignment 2.5

/** Object Basics **/

// Create an object that has firstName, 
// lastName, and occupation as properties/keys associated
// with your own values.

var person = {
  firstName: 'Tim',
  lastName: 'Updegraft',
  occupation: 'Student'
}

// console.log each property's associated value from your 
// object once using both dot notation and bracket notation.

console.log(person.firstName + person.lastName + person.occupation)
console.log(person['firstName'] + person['lastName'] + person['occupation'])

// Add a property for "hobby" to your object and an associated
// hobby value of your own

var person = {
  hobby: 'soccer'
}

// What is the difference between dot 
// notation and bracket notation?
// ___ YOUR ANSWER HERE ___

'Dot notation and Bracket notation differs in notation. Dot notation uses a variable, while bracket notation uses a string'  

// Assignment 2.6

/* IMPORTANT: We have added this starter code for you. You don't
   need to change anything up here. Your code will only go below 
   line 23. */

// DECLARE and DEFINE a new allWorkouts array. We'll use this
// this array to hold all of the workouts entered by the user.
var allWorkouts = [];

// We're goign to prompt the user to log 3 workouts, so we'll
// use a for loop that iterates 3 times.
for (var i=0; i<3; i++){
  // Create a workout object for this specific workout being logged.
  var thisWorkout = {};
  
  thisWorkout.day = prompt('Which day would you like to track? E.g. Monday')
  thisWorkout.hours = parseFloat(prompt('How many hours did you workout on ' + thisWorkout.day + '?'));
  
  // Now that we've created a single thisWorkout object, we're 
  // going to add it to our array of allWorkouts so it's tracked.
  allWorkouts.push(thisWorkout);
}

/* IMPORTANT: YOUR CODE GOES ONLY BELOW THIS LINE */
 for (var i=0; i<allWorkouts.length; i++){
  var currentWorkout = allWorkouts;
  console.log('You worked out for ' + thisWorkout.hours + ' hours on ' + thisWorkout.day)
  } 
  
console.log(allWorkouts.day)


// Assignment 2.7

/** 2. ARRAY METHODS **/

// IMPORTANT: These exercises are cumulative, so make sure you
// to run your code and verify it's working before moving to the
// next exercise.

// Complete the following, starting from the following array: 
var arr = ["JavaScript", "Python", "Ruby", "Java"];

// Use the slice function to convert arr into the following: 
// ["Python", "Ruby"].
var arr = arr.slice(1,3);

// Verify that arr now contains ["Python", "Ruby"] by logging it
console.log(arr);

// Use the concat function to combine arr with ["Haskell", "Clojure"], 
// so arr will become: ["Python", "Ruby", "Haskell", "Clojure"]

var arr = arr.concat(['Haskell', 'Clojure']);
console.log(arr);

// Use the join function on your array to log the string:
// "Python, Ruby, Haskell, Clojure"

var arr = arr.join(', ')
console.log(arr);

/** ARRAY ITERATION **/

// For each of the exercises below, assume you are starting with the
// following people array.
var people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.

for (var i=0; i<people.length[0]; i++){
  var currentPerson = people[i];
  console.log(people[i]);
}

console.log(people[i]);

// Write the command to remove "Greg" from the array.

var people = people.slice(1);
console.log(people);

// Write the command to remove "James" from the array.

const index = people.indexOf('James');
if (index > -1) {
  people.splice(index, 1);
}

console.log(people);

// Write the command to add "Matt" to the front of the array.

people.unshift('Matt');
console.log(people);

// Write the command to add your name to the end of the array.

people.push('Tim');
console.log(people);

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

for(var i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}


console.log(people);

// Write the command that gives the indexOf where "Mary" is located.

people.indexOf("Mary");

// Write the command that gives the indexOf where "Foo" is located (this should return -1).

people.indexOf("Foo");

// Re-assign the people variable to the original value of: 
// ["Greg", "Mary", "Devon", "James"];

var people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

// Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
// Your array should look like this when you are done:
// ["Greg", "Mary", "Elizabeth", "Artie", "James"].

var people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");

console.log(people);

// Assignment 3.1

// IMPORTANT: do not change this array or any of the 
// objects within it. The tests rely on it.
var companies = [
  { name: 'Apple', symbol: 'APPL', sharePrice: 147.06 },
  { name: 'Tesla', symbol: 'TSLA', sharePrice: 316.83 },
  { name: 'Google', symbol: 'GOOG', sharePrice: 942.63 },
  { name: 'Facebook', symbol: 'FB', sharePrice: 149.64 }
];

// 1. Collect a searchString from the user.
var searchString = prompt('What company do you want to find?');

// 2. Loop through the companies to see if you can find a match
var foundCompany = null;

for (var i=0; i<companies.length; i++){
  var currentCompany = companies[i];

// 3. If a match was found (or not found), log it as described on the right.

if( currentCompany.symbol === searchString ){
    foundCompany = currentCompany;
    break;
  }
}

// TEST CODE: Do not edit below this line.
console.log('The price of ' + currentCompany.name + ' is ' + currentCompany.sharePrice );
if( foundCompany === null ){
  console.log('not found')
} else {
  console.log('a match was found')
}



// Assignment 3.2


/** Function Definitions **/

// This definition is here just as an example. No changes are necessary.
function square(x){
  return x * x;  
}

function smaller(x, y){
  // Your code goes between these two curly brackets!
  
  // if x is the smaller number (less than y), return x.
  
  // if y is the smaller number, return y.
  
  if (x < y)
  {
    return x;
  }
  else
  {
    return y;
  }
  
}

function getFirst(numbersArray){
  // return the first item from the array

  var total = 0;
    for (var i=0; i<numbersArray.length; i++){
    total = total + numbersArray[i] 
    } 
  
  return numbersArray[0];
}


function getLast(numbersArray){
  // return the first item from the array

  var total = 0;
    for (var i=0; i<numbersArray.length; i++){
    total = total + numbersArray[i] 
    }
  
  return numbersArray[4];
}

/** Example Invocations **/

// Write two example invocations of each function here, and log the results.
var result = square(5);
console.log(result);
result = smaller(5 , 6);
console.log(result);
result = getFirst([1, 2, 3]);
console.log(result);
result = getLast([3, 5, 6, 7, 8]);
console.log(result);


result = square(6);
console.log(result);
result = smaller(6 , 5);
console.log(result);
result = getFirst([2, 3, 1]);
console.log(result);
result = getLast([1, 2, 3, 4, 5]);
console.log(result);


// Assignment 3.3

function addAll(numbersArray){
  // We'll use this variable to keep track of the total as we add everything.
  var total = 0;

  // Add each number in the array to the total
  for (var i=0; i<numbersArray.length; i++){
    total = total + numbersArray[i];
  }

  // Return the total we've built up at the end.
  return total;
}

// Return the sum of all the numbers in this array.
function multiplyAll(numbersArray){
  // FILL IN WITH YOUR CODE HERE.
  // DO NOT COPY PASTE. TYPING IS BETTER PRACTICE : )
  var total = 1;
  
  for (var i=0; i<numbersArray.length; i++){
    total = total * numbersArray[i];
  }
  
  return total;
  
}




/** Test code. Do not edit below this line. **/
var sum = addAll([1,2,3]);
console.log('the sum of [1,2,3] is ' + sum);

sum = addAll([5,5,5]);
console.log('the sum of [5,5,5] is ' + sum);

var product = multiplyAll([1,2,3]);
console.log('the product of [1,2,3] is ' + product);

product = multiplyAll([5,5,5]);
console.log('the product of [5,5,5] is ' + product);


// Assignment 3.4

// Come back to this

// Assignment 4.1

// Example
function flipCoin(){
  var value = Math.random();
  console.log(value);
  
  if (value < 0.5){
    return "heads";
  } else {
    return "tails";
  }
}


// YOUR rockPaperScissors() FUNCTION GOES HERE
function rockPaperScissors(){
  var value = Math.random();
  console.log(value);
  
  if (value < 0.34){
    return "rock";
  } else if(value < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// YOUR TEST INVOCATIONS GO HERE



/** Test code. Do not modify below this line **/
var result = flipCoin();
console.log('The coin landed on ' + result);

var result = rockPaperScissors();
console.log('The winner is ' + result);


// Assignment 4.2


/* Example section. IMPORTANT: you must comment out this section before running the tests. 
var inputString = prompt('What groceries do you need to buy?')

var groceries = inputString.split(', ')

console.log('Ok, so you need these ' + groceries.length + ' items: ');

for (var i=0; i<groceries.length; i++){
  console.log('- ' + groceries[i]);
  
  if(groceries[i] === 'peanut butter'){
    console.log('(MMM, excellent choice by the way)')
  }
}
 End of the example section. Your solution goes below. */


var inputString = prompt('Enter the haystack?')

var haystack = inputString.split(' ')

  for (var i=0; i<haystack.length; i++){
  
  if(haystack[i] === 'needle'){
    console.log('found the needle at index ' + haystack.indexOf('needle'));
  }
}
  


// Assignment 4.3 

function totalLetters(words) {
  var lettersSoFar = 0;
  
  for (var i = 0; i < words.length; i++) {
    lettersSoFar = words[i].length + lettersSoFar;
  }
  
  return lettersSoFar;
}

console.log(totalLetters(["adios", "bye", "ciao"]));


// Assignment 4.4

var Mountains = [
  { name: 'Mount Kilimanjaro', elevation: 19341 },
  { name: 'Mount Diablo', elevation: 3848 },
  { name: 'Mount Everest', elevation: 29029 },
  { name: 'Mount Rose', elevation: 50000 }
];

// use a variable to keep track of the largest mountain so far

var largestMountain = 0;

// use a for loop to iterate through the Array
// use an if statement to calculate if the current index value for elevation is greater than the largestMountain

function tallest(Mountains){
for (i = 0; i < Mountains.length; i++) {
    if (!largestMountain || Mountains[i].elevation > largestMountain.elevation) {
      largestMountain = Mountains[i];
    }
  }
  
    return largestMountain.name;

}

console.log(tallest(Mountains)); // should log 'Mount Everest'


// Assignment 4.5

// Return a random integer between 20-100, inclusive.
// HINT: there is a formula here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function random20to100(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(random20to100(20, 100));


// Return a random integer between 100-1000, inclusive

function random100to1000(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(random100to1000(100, 1000));




// Return a random letter of the alphabet

function randomAlphabetLetter(){
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return letters[Math.floor(Math.random() * letters.length)];
  
}
console.log(randomAlphabetLetter());

// This function accepts an array of animals like ['tiger', 'lion', 'dog']
// The animalArray argument is allowed to be any length, and the function 
// should always return a random animal from the array. For example, 
// it might return 'lion' from the above array.
//
// HINT: remember how you can check how many items are in an array? 


function randomAnimal(){
  var animalArray = ['tiger','lion','dog'];
  return animalArray[Math.floor(Math.random() * animalArray.length)];
}
console.log(randomAnimal());




// Assignment 4.6

function flipSimulator(n){
  var headsCounter = 0
  while(n--){
    if (Math.random() > 0.5){
      headsCounter++
    }
  }
  return headsCounter
}
var totalHeads = flipSimulator(50);


// Assignment 5.0

var exampleData = [ 
  {
    id: 101,
    firstName: 'Jenny',
    metersFromUser: 5193
  },
  { 
    id: 204,
    firstName: 'Nigel',
    metersFromUser: 245
  },
  { 
    id: 33,
    firstName: 'Andreas',
    metersFromUser: 78
  },
  { 
    id: 443,
    firstName: 'Boris',
    metersFromUser: 8331
  }
];

var closestDriver = 0;

// Create a function to determine the closest driver to the user
// Create a for loop that will iterate through the drivers
// Create an if false Statement that determines the closest driver based on metersFromUser
function nearestDriver (exampleData) {
  for (i = 0; i < exampleData.length; i++) {
    if (!closestDriver || exampleData[i].metersFromUser < closestDriver.metersFromUser) {
      closestDriver = exampleData[i];
    }
  }
  
  return closestDriver.id;
}


console.log(nearestDriver(exampleData));


// Assignment 5.1

var cats = ['Sylvester', 'Tigger', 'Mr. Bigglesworth', 'Felix', 'Simba']

var forOne = function(cat){
  console.log(cat.toLowerCase() + '...')
}

cats.forEach(forOne)

// Assignment 5.2
// Return 0 if there is a tie.
// Return 1 if player 1 wins.
// Return 2 if player 2 wins.
function battle(player1Choice, computerChoice){
  //Checking for a tie
  if (player1Choice === computerChoice){
  return 0;
}
  if (player1Choice === 'rock'){
    if(computerChoice === 'scissors'){
      return 1;
    }
  }
  if (player1Choice === 'rock'){
    if (computerChoice === 'paper'){
      return 2;
    }
  }
  if (player1Choice === 'paper'){
    if (computerChoice === 'rock'){
      return 1;
    }
  }
  if (player1Choice === 'paper'){
    if (computerChoice === 'scissors'){
      return 2;
    }
  }
  if (player1Choice === 'scissors'){
    if (computerChoice === 'paper'){
      return 1;
    }
  }
  if (player1Choice === 'scissors'){
    if (computerChoice === 'rock'){
      return 2;
    }
  }
}

function randomComputerChoice(){
    var value = Math.random();
  
  if (value < 0.34){
    return "rock";
  } else if(value < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}




/** Below here is code for the rest of the game. You do not 
    need to change it, but you should try to understand it. 
    
    If the prompts are interfering with your testing, you 
    should comment it out temporarily until your two
    functions above are working. **/
    
// This is just a helper function to both log and alert something at the same time.
function show(text){
  console.log(text);
  alert(text);
}

var player1Score = 0;
var computerScore = 0;
var answer, humanChoice, computerChoice, result, resultText;

// This is an infinite loop.
while(true){
  humanChoice = prompt('Rock, paper, or scissors?');
  computerChoice = randomComputerChoice();
  resultText = "Computer chose " + computerChoice + ". ";

  result = battle(humanChoice, computerChoice);
  
  if ( result === 0 ){
    show(resultText + 'Tie!')
  } else if ( result === 1 ){
    player1Score++;
    show(resultText + 'Player 1 wins!');
  } else {
    computerScore++;
    show(resultText + 'Computer wins!')
  }
  
  show("Human: " + player1Score + " | Computer: " + computerScore);
  answer = prompt("Want to play again?");
  
  if ( answer === null || answer.toLowerCase() !== 'yes' ){
    // Exit the loop
    break;
  }
}

// Assignment 6.1

 var songs = [
              { title: "Intro", artist: "The xx", seconds: 127 },
              { title: "Free Fallin'", artist: "Tom Petty", seconds: 256 },
              { title: "What You Know", artist: "Two Door Cinema Club", seconds: 191 },
              { title: "Closer", artist: "The Chainsmokers", seconds: 244 },
              { title: "Gooey", artist: "Glass Animals", seconds: 289 }
]
            
function justTitles (songs) {
    var result = [];
      songs.forEach(song => result.push(song.title));
    return result;
}

function justTitles2 (songs) {
    var result = [];
    var func = function(song) {
      result.push(song.title);
    }
    songs.forEach(func);
    return result;
}


console.log(justTitles2(songs))


// Assignment 6.2


 var songs = [
              { title: "Intro", artist: "The xx", seconds: 127 },
              { title: "Free Fallin'", artist: "Tom Petty", seconds: 256 },
              { title: "What You Know", artist: "Two Door Cinema Club", seconds: 191 },
              { title: "Closer", artist: "The Chainsmokers", seconds: 244 },
              { title: "Gooey", artist: "Glass Animals", seconds: 289 }
]
            
function justTitles(songs) {
    var result = [];
     songs.map(song => result.push(song.title));
    return result;
}
console.log(justTitles(songs))


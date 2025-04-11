// excercise 1 

let temperature = 30;

if (temperature < 0 ) {
    console.log("It's Freezing!");
}

 else if (temperature >= 0 && temperature <= 15) {
    console.log("It's Cold!");
}

 else if (temperature >= 16 &&  temperature <=25) {
    console.log(" it's mild.");
}
 else { console.log(" it's warm");
}
 

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

//excercise 2

let number3 = 32

if (number3 % 2 == 0 && number3 % 3 == 0) {
    console.log("Divisible by both");
}
else if (number3 % 2 == 0 ) {
    console.log("Divisible by 2 only");
}
else if ( number3 % 3 == 0 ) 
    console.log("divisible by 3 only");

else { 
    console.log (" Not divisible by 2 or 3");
}

switch (true) {
    case (number3 % 2 == 0 && number3 % 3 == 0): 
    console.log("Divisible by both")
    break;
    case(number3 % 2 == 0):
    console.log("Divisible by 2 only");
    break;
    case( number3 % 3 == 0):
    console.log("Divisible by 3 only")
    break;
    default: 
          console.log(" Not divisible by 2 or 3")
}

// Exercise 3

console.log("Exercise 3.1");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Exercise 3.2");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Exercise 3.3");
let sum = 0; 
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

console.log("Exercise 3.4");
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Exercise 3.5");
const numbers2 = [3, 7, 2, 5, 10, 6];
let max = numbers2[0]; 

for (let i = 0; i < numbers2.length; i++) {  
    if (numbers2[i] > max) {  
        max = numbers2[i]; 
    }
}
console.log("Maximum number:", max);

// Exercise 4

console.log("Exercise 4.1");
let i = 1;  
while (i <= 10) {
  console.log(i);
  i++;  
}

console.log("Exercise 4.2");
i = 1;
while (i <= 20) {
  if (i % 2 === 0) {  
    console.log(i);
  }
  i++;
}

console.log("Exercise 4.3");
i = 1;
let sum2 = 0;  
while (i <= 100) {
  sum2 += i;  
  i++;  
}
console.log("Sum of numbers from 1 to 100:", sum2);

console.log("Exercise 4.4");
i = 5;  
while (i < 50) {
  console.log(i);
  i += 5;
}

// Exercise 5

console.log("Exercise 5.1");
i = 1;
do {
  console.log(i);
  i++;  
} while (i <= 10); 


console.log("Exercise 5.2");

let sum3 = 0;
 i = 1;

do {
  sum3 += i; 
  i++; 
} while (i <= 100); 0

console.log("Sum of numbers from 1 to 100:", sum3);


console.log("Exercise 5.3");

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const targetNumber = Math.floor(Math.random() * 10) + 1;
let guess;


function askQuestion() {
  rl.question("Guess a number between 1 and 10: ", (answer) => {
    guess = parseInt(answer);

    if (guess !== targetNumber) {
      console.log("Wrong! Try again.");
      askQuestion(); 
    } else {
      console.log("Correct! The number was:", targetNumber);
      rl.close(); 
    }
  });
}


askQuestion();

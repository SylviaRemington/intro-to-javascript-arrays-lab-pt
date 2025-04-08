//EXERCISE 1 - COMPLETED BELOW:
const foods = [];
console.log('Exercise 1 result:', foods);


//EXERCISE 2 - COMPLETED BELOW:
const foods = [];
foods.push('pizza');
foods.push('cheeseburger');
console.log('Exercise 2 result:', foods);

//or could just type it out like below

const foods = ['pizza', 'cheeseburger'];
console.log('Exercise 2 result:', foods);



//EXERCISE 3 - COMPLETED BELOW:
const foods = ['pizza', 'cheeseburger'];
foods.unshift('taco');
console.log('Exercise 3 result:', foods);



//EXERCISE 4 - COMPLETED BELOW:
const foods = ['taco','pizza', 'cheeseburger'];
const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

// or 

const foods = [];
foods.push('pizza');
foods.push('cheeseburger');
foods.unshift('taco');
const favFood = foods[1];
console.log('Exercise 4 result:', favFood);



//EXERCISE 5 - COMPLETED BELOW:
const foods = ['taco','pizza', 'cheeseburger'];
foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);



//EXERCISE 6 - COMPLETED BELOW:
const foods = ['taco','pizza','tofu','cheeseburger'];
foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);




//EXERCISE 7 - COMPLETED BELOW:
const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);




//EXERCISE 8 - COMPLETED BELOW:
const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

// or could also do the following if keep adding from 1st exercise:
const foods = [];  
foods.push('pizza');      
foods.push('cheeseburger'); 
foods.unshift('taco');
const favFood = foods[1];
foods.splice(2, 0, 'tofu');
foods.splice(1,1, 'sushi', 'cupcake');
const yummy = foods.slice(1,3);
const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);




//EXERCISE 9 - COMPLETED BELOW:
const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
let allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);




//EXERCISE 10 - COMPLETED BELOW:
const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);




//EXERCISE 11 - COMPLETED BELOW:
// Use this code to find out if its an odd number. This is the simplest equation to use for odd numbers: % 2 !== 0
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

for (let i = 0; i < nums.length; i++) {
    const oddNumber = nums[i] % 2 !== 0
    console.log(nums[i]);//just printing every number in array so taking that out
    if (oddNumber){
        odds.push(nums[i]);
    }
  }
console.log(odds);

//What I did for the above code:
// Loops through every number in the nums array.
// Checks if the number is odd (% 2 !== 0).
// If it's odd, adds it to the odds array.
// Finally, prints the list of all odd numbers.




// EXERCISE 12 - COMPLETED BELOW:
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90,1];
const fizz = []; //If the number can be divided by 3 with no remainder, add it to a new array called fizz.
const buzz = []; //If the number can be divided by 5 with no remainder, add it to a new array called buzz.
const fizzbuzz = []; //If the number can be divided by both 3 and 5, also add it to a third array called fizzbuzz.

for (let i=0; i<nums.length; i++) {
    const num = nums [i];
    const divThree = num % 3 === 0;
    const divFive = num % 5 === 0;
    const divThreeFive = num % 3 === 0 && num % 5 === 0;
    // num % 3 == 0 is the operator used for dividing with no remainder

    if (divThreeFive){
        fizz.push(num);
        buzz.push(num);
        fizzbuzz.push(num);
    }else if(divThree){
        fizz.push(num);
    }else if(divFive){
        buzz.push(num);
    }else{
        console.log(`Number ${nums[i]} is invalid for these search parameters. Pick a new number. Try again... or game over! ;)`);
    }

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);




//EXERCISE 13 - COMPLETED BELOW:
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length-1];

console.log('Exercise 13 result:', numList);




// EXERCISE 14 - COMPLETED BELOW:
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);




// EXERCISE 15 - COMPLETED BELOW:
const numArrays = [ 
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let total = 0 //Starting number, starting with a total of 0, this holds the final sum, and let allows number to change

numArrays.forEach(function(individualArray) {
    individualArray.forEach(function(num) {
      total += num;
    });
});

console.log('Exercise 15 result:\n', total);
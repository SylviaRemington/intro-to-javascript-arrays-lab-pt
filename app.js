//Arrays Lab for Tristan Hall's Class - Just fyi: I'm commenting out all the answers as I go through 
// so that I can console.log each subsequent exercise and not get an error message.

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1:
*/
//EXERCISE 1 - COMPLETED BELOW:
// const foods = [];
// console.log('Exercise 1 result:', foods);

//----------------------------------------------------------------------------

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
//EXERCISE 2 - COMPLETED BELOW:
// const foods = [];
// foods.push('pizza');
// foods.push('cheeseburger');
// console.log('Exercise 2 result:', foods);

//or could just type it out like below

// const foods = ['pizza', 'cheeseburger'];
// console.log('Exercise 2 result:', foods);

//------------------------------------------------------------------------

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
//EXERCISE 3 - COMPLETED BELOW:
// const foods = ['pizza', 'cheeseburger'];
// foods.unshift('taco');
// console.log('Exercise 3 result:', foods);

//--------------------------------------------------------------------------

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
//EXERCISE 4 - COMPLETED BELOW:
// const foods = ['taco','pizza', 'cheeseburger'];
// const favFood = foods[1];
// console.log('Exercise 4 result:', favFood);

// or 

// const foods = [];
// foods.push('pizza');
// foods.push('cheeseburger');
// foods.unshift('taco');
// const favFood = foods[1];
// console.log('Exercise 4 result:', favFood);

//--------------------------------------------------------------------------

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
//EXERCISE 5 - COMPLETED BELOW:
// const foods = ['taco','pizza', 'cheeseburger'];
// foods.splice(2, 0, 'tofu');
// console.log('Exercise 5 result:', foods);

//--------------------------------------------------------------------------

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
//EXERCISE 6 - COMPLETED BELOW:
// const foods = ['taco','pizza','tofu','cheeseburger'];
// foods.splice(1, 1, 'sushi', 'cupcake');
// console.log('Exercise 6 result:', foods);

//--------------------------------------------------------------------------

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
//EXERCISE 7 - COMPLETED BELOW:
// const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
// const yummy = foods.slice(1, 3);
// console.log('Exercise 7 result:', yummy);

//--------------------------------------------------------------------------

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
//EXERCISE 8 - COMPLETED BELOW:
// const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
// const soyIdx = foods.indexOf('tofu');
// console.log('Exercise 8 result:', soyIdx);

// or could also do the following if keep adding from 1st exercise:
// const foods = [];  
// foods.push('pizza');      
// foods.push('cheeseburger'); 
// foods.unshift('taco');
// const favFood = foods[1];
// foods.splice(2, 0, 'tofu');
// foods.splice(1,1, 'sushi', 'cupcake');
// const yummy = foods.slice(1,3);
// const soyIdx = foods.indexOf('tofu')
// console.log('Exercise 8 result:', soyIdx);

//--------------------------------------------------------------------------

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
//EXERCISE 9 - COMPLETED BELOW:
// const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
// let allFoods = foods.join(' -> ');
// console.log('Exercise 9 result:', allFoods);

//--------------------------------------------------------------------------

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
//EXERCISE 10 - COMPLETED BELOW:
// const foods = ['taco','sushi', 'cupcake','tofu','cheeseburger'];
// const hasSoup = foods.includes('soup');
// console.log('Exercise 10 result:', hasSoup);

//--------------------------------------------------------------------------------------------------------------

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array. //using for loop
2) Push each odd number to a new array named `odds`. //
Hint: Initialize the `odds` variable to an empty array before the iteration.
Complete Exercise 11 in the space below:

Here's what the exercise is asking — in plain language:
1. You are given an array called nums. It has a bunch of numbers.
2. Go through each number in that array one at a time using a method to iterate through.
3. Check if the number is odd.
4. If it’s odd, add (push) it into a new array called odds.
5. Before the loop starts, you need to create the odds array — and make sure it starts out empty.
*/

//EXERCISE 11 - COMPLETED BELOW:
// Use this code to find out if its an odd number. This is the simplest equation to use for odd numbers: % 2 !== 0
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const odds = [];

// for (let i = 0; i < nums.length; i++) {
//     const oddNumber = nums[i] % 2 !== 0
//     // console.log(nums[i]);//just printing every number in array so taking that out
//     if (oddNumber){
//         odds.push(nums[i]);
//     }
//   }
// console.log(odds);

//What I did for the above code:
// Loops through every number in the nums array.
// Checks if the number is odd (% 2 !== 0).
// If it's odd, adds it to the odds array.
// Finally, prints the list of all odd numbers.
  
//--------------------------------------------------------------------------

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:

Here’s what the exercise is asking — in plain language:
You are given a list of numbers in an array called nums.
Go through each number one by one using any kind of loop.
As you go through each number:
If the number can be divided by 3 with no remainder, add it to a new array called fizz.
If the number can be divided by 5 with no remainder, add it to a new array called buzz.
If the number can be divided by both 3 and 5, also add it to a third array called fizzbuzz.
Some numbers might be added to more than one array — that’s okay and expected.
In the end, you will have three arrays: fizz, buzz, and fizzbuzz, each holding different sets of numbers.
*/


console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//--------------------------------------------------------------------------

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:

Explanation of exercise via chatgpt since I didn't understand what was being asked: Here's what the assignment is asking — in plain language:
You are given a variable called numArrays. Inside it, there are multiple arrays — it's a nested array.
LOOK AT/REVIEW THE "TWO-DIMENSIONAL ARRAYS SECTION ABOVE THIS QUESTION."
You need to: 1. Get only the last array from numArrays. 
2. Save that last array in a new variable called numList.
3. You don’t know how many arrays are inside numArrays, so you can’t use a fixed number like numArrays[2].
4. Don’t change the numArrays variable. 
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = [];

console.log('Exercise 13 result:', numList);

//--------------------------------------------------------------------------

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:

Here’s what the exercise is asking — in simple, plain language:
You are given an array called numArrays. Inside it are other arrays (it's a nested array).
One of those inner arrays has the number 66 in it.
You need to find and get that 66, without changing anything in numArrays.
Save that number in a new variable called num.
Then print num to show the result.
*/



console.log('Exercise 14 result:', num);


//--------------------------------------------------------------------------

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:

Here’s what the exercise is asking — in plain language:

You’re given a variable called numArrays. It’s an array that contains other arrays (a nested array), and those inner arrays have numbers in them.

You need to go through all the numbers inside all the inner arrays.

Add every number together to get one total.

Save that total in a variable called total.

Show the result by printing total.
*/



console.log('Exercise 15 result:\n', total);

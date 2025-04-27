//Arrays Lab for Tristan Hall's Class - Just fyi: I'm commenting out all the answers as I go through 
// so that I can console.log each subsequent exercise and not get an error message.
//Re-reviewing this section 4/25/25
//Re-went through entire lesson again including Level Up and Reviewing Arrays Lab 4/25/25

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

//or could do this: 
// const foods = [];
// foods.push('pizza', 'cheeseburger');
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

   If I was just doing this one line (the #1 section), the code would be this:
   const foods = ['taco', 'pizza', 'cheeseburger'];
   foods[1];


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

// More info on the splice () method:
// The splice() method can add or remove any number of elements inside an array. 
// You can even take both actions simultaneously with a single line of code!

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)

// This syntax may seem overwhelming at first glance, 
// but it means that all but the first parameter is optional - 
// so when we call splice(), its behavior will change depending on how many 
// arguments we pass to it.

//SPLICE SYNTAX
// arrayName.splice(2, 0, 'tofu');
//the 2 position --> WHAT INDEX TO START AT & you will be putting new item before this index#
//the 0 position --> HOW MANY ELEMENTS TO REMOVE
//the 'tofu' position --> WHAT YOU'RE PUTTING IN THE ARRAY, item1, item2...etc.

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

//console log returns the following below: 
//Exercise 6 result: [ 'taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]

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

// More on the slice () method:
//When think of slice, think COPY PART OF THE ARRAY.
//It doesn't cahnge the original array.
//You give it a start and end index, and it returns a new array with those elements.
//The end index is not included.
//Examples:

//An example from chatgpt that I looked up after finishing this assignment for further understanding
// const colors = ['red', 'blue', 'green', 'yellow'];
// const coolColors = colors.slice(1, 3);
// console.log(coolColors); 
// console.log(colors);
// ✅ coolColors will be:
// ['blue', 'green']
// ✅ colors stays:
// ['red', 'blue', 'green', 'yellow']

//If you want to cut out 'die hard' from the array, you have to use splice.

// But to copy it...:
// const movies = ['matrix', 'die hard', 'terminator'];
// const middleChunk = movies.slice(1,2);//copies die hard into a new array, but does not remove from movies
// const middleChunk = movies.slice(1,1);//because start and stop are the same, there is nothing to copy
// const middleChunk = movies.splice(1,1);
// console.log(middleChunk);
// console.log(typeof middleChunk);
// console.log(movies);
// console.log(typeof movies);

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

// More info about indexOf () method:
// The indexOf() method searches for a specified element within an array 
// and returns the index of the first occurrence. If the element is not found, 
// it returns -1. Here are the docs.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

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

// More info on includes method:
// The includes() method checks if an array contains a specific element, 
// returning a boolean value (true or false). Read more about the includes() method here.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

//--------------------------------------------------------------------------------------------------------------

/*For exercises 11-15 using iterating through arrays. Here's more info on this
Looping and manipulating
These last few exercises are more difficult. Don’t forget to take breaks 
as you’re working on these!

Several methods exist for iterating through arrays in JavaScript.

for loop
The traditional for loop can iterate through an array by index.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for...of loop
The for...of loop allows you to loop through the values of an array directly without using an index.
for (const element of arr) {
  console.log(element);
}

forEach() method
The forEach() method performs a given function on each element of an array.
arr.forEach((element) => {
  console.log(element);
});

Choose one to practice with for the following exercises!
*/

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
   // ✅ Start a loop:
   // i begins at 0.
   // Loop continues as long as i is less than nums.length (the number of items in nums).
   // Each time the loop runs, i goes up by 1.

//    const oddNumber = nums[i] % 2 !== 0 //This is an equation I looked up online to check if something is odd

// ✅ Check if the current number is odd:
// nums[i] means "the number at index i."
// % 2 means "divide by 2 and get the remainder."
// If the remainder is not 0, the number is odd.

// Save true or false into oddNumber.
    // console.log(nums[i]);//just printing every number in array so taking that out 
    //print each number one by one.
//     if (oddNumber){
//         odds.push(nums[i]);
//     }
//   }
// ✅ If the number is odd (oddNumber === true): Push (add) that number into the odds array.

// console.log(odds);
// ✅ After the loop is done: Print the final odds array showing all the odd numbers you found.

//What I did for the above code:
// Loops through every number in the nums array.
// Checks if the number is odd (% 2 !== 0).
// If it's odd, adds it to the odds array.
// Finally, prints the list of all odd numbers.

// This is the code for Exercise 11 all in one place:
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const odds = [];
// for (let i = 0; i < nums.length; i++) {
//        const oddNumber = nums[i] % 2 !== 0
//        console.log(nums[i]);
//        if (oddNumber){
//            odds.push(nums[i]);
//        }
//      }
//    console.log(odds);
  
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

//EXERCISE 12 - COMPLETED BELOW:
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90,1]; //This ✅ creates an array of numbers called nums.
// const fizz = []; //If the number can be divided by 3 with no remainder, add it to a new array called fizz.
// const buzz = []; //If the number can be divided by 5 with no remainder, add it to a new array called buzz.
// const fizzbuzz = []; //If the number can be divided by both 3 and 5, also add it to a third array called fizzbuzz.
// ✅ Create three empty arrays:
// fizz: numbers divisible by 3.
// buzz: numbers divisible by 5.
// fizzbuzz: numbers divisible by both 3 and 5.


// for (let i=0; i<nums.length; i++) { //✅ i starts at 0 and loops through every index in nums.
//     const num = nums [i]; //✅ Get the current number from nums and save it into num.
//     const divThree = num % 3 === 0; // ✅ Check if num divides evenly by 3 (no remainder). If yes, divThree is true.
//     const divFive = num % 5 === 0; ✅ Check if num divides evenly by 5. If yes, divFive is true.
//     const divThreeFive = num % 3 === 0 && num % 5 === 0; ✅ Check if num divides evenly by both 3 and 5. 
//                                                             divThreeFive is true only if both divThree and divFive are true.
    // num % 3 === 0 is the operator used for dividing with no remainder
//     num % 3 == 0 
// ✅ This checks if num divides evenly by 3.
// % is the modulus operator → it gives you the remainder after division.
// num % 3 == 0 means: if dividing num by 3 leaves no remainder (meaning it divides perfectly).
// Example:
// 9 % 3 == 0 → true (9 / 3 = 3, remainder 0)
// 10 % 3 == 0 → false (10 / 3 = 3 remainder 1)

//This same process goes for 3, 5, and then combines the two with 3 and 5 (in the code I wrote).

    // console.log('divThree', divThree);
   //  ✅ Prints whether divThree is true or false. Shows if the number is divisible by 3.

    // console.log('divFive', divFive);
//     ✅ Prints whether divFive is true or false. Shows if the number is divisible by 5.

    // console.log(divThreeFive, 'divThreeFive');
   //  ✅ Prints whether divThreeFive is true or false. Shows if the number is divisible by both 3 and 5 at the same time.

//     if (divThreeFive){ //✅ If the number can be divided by both 3 and 5 with no remainder...
//         fizz.push(num);
//         buzz.push(num);
//         fizzbuzz.push(num);
// ✅ Then, Add the number to all three arrays: fizz  buzz  fizzbuzz

//     }else if(divThree){ //✅ Otherwise, if the number only divides by 3...
//         fizz.push(num); //✅ Add it to the fizz array.

//     }else if(divFive){ //✅ Otherwise, if the number only divides by 5...
//         buzz.push(num); //✅ Add it to the buzz array.

//     }else{ //✅ Otherwise (if it divides by neither 3 nor 5)...
//         console.log(`Number ${nums[i]} is invalid for these search parameters. Pick a new number. Try again... or game over! ;)`);
//     } //✅ Print a message saying this number doesn’t fit any rule.
    
        // Below is my first attempt at if... else / Found out that it works best if divThreeFive first and use the most/more specific variable first
//     if (i === divThree) {
//         fizz.push(num);
//     } else if (i === divFive){
//         buzz.push(num);
//     } else if (i === divThree && divFive){
//         fizz.push(num);
//         buzz.push(num);
//     }else{
//         console.log("No number will be added to these arrays.")
//     }
// }
// console.log('Exercise 12 Results:');
// console.log('  fizz:', fizz);
// console.log('  buzz:', buzz);
// console.log('  fizzbuzz:', fizzbuzz);

// EXERCISE 12 COMPLETED
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90,1];
// const fizz = []; //If the number can be divided by 3 with no remainder, add it to a new array called fizz.
// const buzz = []; //If the number can be divided by 5 with no remainder, add it to a new array called buzz.
// const fizzbuzz = []; //If the number can be divided by both 3 and 5, also add it to a third array called fizzbuzz.

// for (let i=0; i<nums.length; i++) {
//     const num = nums [i];
//     const divThree = num % 3 === 0;
//     const divFive = num % 5 === 0;
//     const divThreeFive = num % 3 === 0 && num % 5 === 0;
    // num % 3 == 0 is the operator used for dividing with no remainder

    // console.log('divThree', divThree);
    // console.log('divFive', divFive);
    // console.log(divThreeFive, 'divThreeFive');

//     if (divThreeFive){
//         fizz.push(num);
//         buzz.push(num);
//         fizzbuzz.push(num);
//     }else if(divThree){
//         fizz.push(num);
//     }else if(divFive){
//         buzz.push(num);
//     }else{
//         console.log(Number ${nums[i]} is invalid for these search parameters. Pick a new number. Try again... or game over! ;));
//     }

//--------------------------------------------------------------------------

//Working with two-dimensional arrays. Information below from lesson:

/*

Working with two-dimensional arrays
You’ve worked with one-dimensional arrays a lot already. Here’s one:

const oneDArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
One-dimensional arrays may be written split across multiple lines if the contents don’t fit on one line or if it enhances readability. For example:

const oneDArray = [
  1, // 0 index
  2, // 1 index
  3, // 2 index
  and so on
]
This changes nothing about the array. It only changes how we write it.

__________________________

A two-dimensional array is essentially an array of arrays. The inner arrays are referred to as nested arrays. This creates a structure similar to a grid or a table.

const twoDArray = [
  [1, 2, 3], 
  [4, 5, 6],
  [7, 8, 9]
];
In a one-dimensional array, you access elements using a single index. For example, to access the number 3 in oneDArray above, you would use oneDArray[2].
In a two-dimensional array, you use two indices: The first specifies the specific array (row), and the second specifies the element in that array (column). To access the number 3 in twoDArray above, you would use twoDArray[0][2]. See more below.


const twoDArray = [
  [1, 2, 3], // index 0
  [4, 5, 6], // index 1
  [7, 8, 9]  // index 2
];
And finally, below, we see the indexes of the elements inside of the nested arrays:


const twoDArray = [
  [1, 2, 3], // index 0
// 0  1  2
  [4, 5, 6], // index 1
// 0  1  2
  [7, 8, 9]  // index 2
// 0  1  2
];

*/ 

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

//First Attempt at question 13
// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];
// const numList = numArrays.length-1[numArrays.length-1];
// console.log('Exercise 13 result:', numList);

//EXERCISE 13 - COMPLETED BELOW:
// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];

// const numList = numArrays[numArrays.length-1];

// console.log('Exercise 13 result:', numList);

// numArrays.length - 1 gives you the last index.
//numArrays[numArrays.length - 1] gets the last array without changing anything.

// --------

/*Explanation of above equation:
const numList = numArrays[numArrays.length - 1];

const →
You are creating a new variable.
It will be called numList.

numList →
This is the name of the new variable.
It will hold/storeInMemory the last array from numArrays.
Example: numList will become [7, 81, 90] in your code.

= →
Means assign whatever is on the right side into numList.

numArrays →
This is the array you're getting something from.
It’s the big array with all the nested arrays inside.

[ ] →
Square brackets mean you are accessing an item by its index.
You will put the index number inside the brackets.

numArrays.length →
.length gives the total number of items inside numArrays.
In your example, numArrays.length is 4.

numArrays.length - 1 →
You subtract 1 because arrays start at 0.
(Indexes are 0, 1, 2, 3 — not 1, 2, 3, 4.)

So 4 - 1 = 3. You get index 3, which is the last array.

Full together:
Create a new variable to store the last array from numArrays.
Go inside numArrays,
Look at index 3 (the last one),
Save it into numList.

// --------

/*AN ALTERNATE WAY TO COMPLETE THE EXERCISE:
const numList = numArrays.at(-1);

console.log('Exercise 13 result:', numList);

Quick note:
.at(-1) directly grabs the last item in the array.
No need to use .length - 1.
.at(-1) is easier to read! */

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

// EXERCISE 14 - COMPLETED BELOW:
// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];

// const num = numArrays[2][1]

// console.log('Exercise 14 result:', num);

//Re-reviewed --easy peasy


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
.flat (method?)*/

//beginning first attempt... gah... my brain doesn't get what to do with this one. I'm googling a lot. lol 
// (This is my inner monologue... I won't use this so much in future exercises.)
// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];

// numArrays.forEach((num) => {
//     num + num;
// })
// const total = sum
// console.log('Exercise 15 result:\n', total);


// EXERCISE 15 - COMPLETED BELOW:
const numArrays = [ //This creates a numArray variable, that is a nested Array. Each array has numbers I will add together.
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let total = 0 //Starting number, starting with a total of 0, this holds the final sum, and let allows number to change
//This keeps track of the total sum as adding it (I think?).

numArrays.forEach(function(individualArray) {
    individualArray.forEach(function(num) {
      total += num;
    });
});
//Notes for me for what this particular forEach loop does:
//above begins a forEach loop - It's saying "For each item in the numArrays, do the following..."
//The first loop, loops through numArrays of index 0, 1,...
//Since each item/index is an array-within-an-array, calling it individualArray.
//There is a second loop within the first loop... This loop loops through individual array.
//After all this, total += num; //adds the current number to the total. 
// += means take the current total, add num to it and save the new value in total.

    // arr.forEach(individualArray => {
    //     individualArray.forEach(num) => {
    //       total += num;
    //     });
    //   });
    
    // };

console.log('Exercise 15 result:\n', total);


/*Double checking my work with chatgpt and asking if correct. This is its answer:

const numArrays = [ ... ];
You set up the nested arrays.

let total = 0;
You create a total variable.
It starts at 0 because you're going to add numbers into it.

numArrays.forEach(function(individualArray) {
You go through each inner array one by one (ex: [100, 5, 23], then [15, 21, 72, 9], etc).
individualArray is a name you gave for each inner array.
//my notes: Creating a function and have individualArray as a parameter.
//individualArray is just a parameter.
//(a placeholder name for each item you loop over)
//Meaning:
//numArrays has 4 inner arrays.
//forEach gives each inner array, one at a time, to your function.
//individualArray represents each inner array during that one loop.


    individualArray.forEach(function(num) {
Now inside each inner array, you go through each number one by one.

      total += num;
You add each number to the total.

total += num; means total = total + num.

});
});
You close both forEach loops properly.

When you console.log(total), it will correctly show the full sum of all numbers. 🎯

Small notes:

Your first attempt (before the EXERCISE 15 - COMPLETED section) was close too — you just needed to update the total inside the loop and fix the order of creating variables.
.flat() could also solve this differently (would you like me to show that too as a bonus method? It's very cool and short!). 🔥

*/


/*
TO FIX FIRST ATTEMPT - ideas given 4/27/25 way after I completed the assignment so that I can have further awareness & clarity with arrays:
(THESE WERE SUGGESTIONS FROM CHATGPT THAT I'M PUTTING IN AFTER FINISHED ASSIGNMENT FOR FURTHER AWARENESS.)

Could you show me how I could have fixed this: Your first attempt (before the EXERCISE 15 - COMPLETED section) was close too — you just needed to update the total inside the loop and fix the order of creating variables.
.flat() could also solve this differently (would you like me to show that too as a bonus method? It's very cool and short!). 🔥

ChatGPT said:
Yes! Let’s fix your first attempt — the one you wrote here:

Your first version:
// wrong
numArrays.forEach((num) => {
    num + num;
});
const total = sum;
console.log('Exercise 15 result:\n', total);

Why it didn’t work:
You did num + num;, but did not actually add it to anything.
sum was never created before using it.
total = sum — but sum doesn't exist yet. (error)

✅ How to fix it properly:

let total = 0; // Create the total FIRST

numArrays.forEach(function(innerArray) {
  innerArray.forEach(function(num) {
    total += num; // Add each number to total
  });
});

console.log('Exercise 15 result:', total);
Changes you needed:

Create total = 0 before the loops.
Use total += num; inside the loops.
Don't try to create another sum variable randomly — just update total directly.

✅ Extra tip:
In your original attempt, you were also accidentally trying to loop through numArrays directly, but you need to go into each inner array first.
Would you like me to also show the absolute minimum fix (keeping your exact style and fixing just the errors)? 🎯 (it would show how little you needed to actually change!)

You said:
YES

ChatGPT said:
Awesome — here’s your original attempt, minimally fixed, keeping your style as much as possible:

🔵 Your original (broken) version:

numArrays.forEach((num) => {
    num + num;
});
const total = sum;
console.log('Exercise 15 result:\n', total);

🔵 Minimally fixed version:
let total = 0; // You need to create total first!
numArrays.forEach((innerArray) => {
    innerArray.forEach((num) => {
        total += num;
    });
});
console.log('Exercise 15 result:\n', total);

✅ Here’s exactly what changed:
Added let total = 0; at the top (before anything else).
Changed num to innerArray for the first .forEach, because you're looping through arrays, not numbers yet.
Added a second .forEach to go into the numbers inside each inner array.
Used total += num; to actually add each number to total.
Removed sum, because you don't need it.

✅ If you only wanted to fix the absolute minimum, you could even keep your num name and just do this:

let total = 0;

numArrays.forEach((num) => {
    num.forEach((n) => {
        total += n;
    });
});

console.log('Exercise 15 result:\n', total);
(Just renamed carefully and added the missing parts.)


Would you also like me to show what would happen if you tried .flat() inside your original broken setup? (It would have made it work with almost no changes 🔥)

You said:
YES

ChatGPT said:
Perfect — here’s how you could have used .flat() inside your original setup and made it super simple:

🔵 Starting from your broken idea:
You were trying to do:

numArrays.forEach((num) => {
    num + num;
});
const total = sum;
console.log('Exercise 15 result:\n', total);
🔵 With .flat(), you can flatten the whole thing first:

let total = 0;

numArrays.flat().forEach((num) => {
    total += num;
});

console.log('Exercise 15 result:', total);

✅ What’s happening:
numArrays.flat() → turns all the nested arrays into one single array of numbers:
[100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]

.forEach((num) => { ... }) → now you can loop straight over the numbers, no need for a second loop.

total += num; → adds each number correctly.

✅ This fixes your original idea almost instantly:

Only one .forEach.

No confusion about nested arrays.

Only need let total = 0 at the top.

In short:
→ .flat() lets you skip needing two loops.
→ It flattens the array once, so you can treat it like a normal list of numbers.


Would you like a super crazy one-line version too, using .flat() and .reduce() together? (Just for fun to see how compact pros might write it!) 🚀⚡

You said:
YES

ChatGPT said:
Awesome — here’s the crazy clean one-line version using .flat() and .reduce() together:

const total = numArrays.flat().reduce((sum, num) => sum + num, 0);

console.log('Exercise 15 result:', total);

✅ Breakdown in plain English:
numArrays.flat() → Smash all the arrays into one big list of numbers.
.reduce((sum, num) => sum + num, 0) →
Start at 0.
For each number (num), add it to the running total (sum).
const total = → Save the final total.

✅ This does everything:
Flatten the nested arrays
Add up all the numbers
Store the result in total
All in one line.

How it flows:
Step	sum	num	New sum
1	0	100	100
2	100	5	105
3	105	23	128
...	...	...	...
Final	...	90	(final total)
Would you also want a version without arrow functions (using regular function syntax)? You might like it if you're practicing both ways! ✏️🚀

You said:
yes

ChatGPT said:
Perfect — here’s the same one-line version, but using regular function syntax (no arrow functions):

const total = numArrays.flat().reduce(function(sum, num) {
  return sum + num;
}, 0);

console.log('Exercise 15 result:', total);
✅ Same steps happening:
numArrays.flat() → flatten into one list.
.reduce(function(sum, num) { return sum + num; }, 0) →
Start at 0.
For each number, add it to the total (sum).

The only difference:
Instead of (sum, num) => sum + num,
You write function(sum, num) { return sum + num; }.
✅ Result is exactly the same.
*/
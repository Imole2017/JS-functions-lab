// console,log('JS: loaded');

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/


const maxOfTwoNumbers = (num1, num2) => {
    console.log(num1, num2);
    // let num1 = 3
    // let num2 = 9
    if (num1 >= num2) {
        // console.log('num1');
      return num1; // since num1 is not >= num2, this will not print 
    } else {
        // console.log('num2');
      return num2; // this will print 9 if num2 > num1
    }
  };
 
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9), 'expectation: 9'); // this will print 9


  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
// */
function isAdult(age) {
    console.log(age, 21 >= 18)

    if (age >= 18) {
        return 'Adult' //when the if is true, then we will have adult; otherwise it will return minor
    } else {
        return 'Minor'
    }
};

console.log('Exercise 2 Result:', isAdult(21), 'expectation: Adult');



/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
  const vowels = ('a', 'e', 'i', 'o', 'u'); // lists of vowels excluding w  or y
  // let char = (vowel)
  
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u') { 
      // console.log('retun true');
      return true; // trus if the character is a vowel
 } else {
  // console.log('should return false')
      return false; // return false if otherwise
 }
  
}

console.log('Exercise 3 Result:', isCharAVowel("a")); // testing the code: if the char is changed from 'a' to 'd' we will get false
//console.log('Exercise 3 Result:', isCharAVowel("d")); // false becos 'd' is not a char in vowels


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
function generateEmail(name, domain) {
  let emailAddress = ('tito@gassembly.com')
   return emailAddress;
}

console.log('Exercise 4 Result:', generateEmail('tito', 'gassembly.com'));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser = (user, timeOfDay) => {
  console.log(user, timeOfDay); //user = Tito, timeOfDay is evening
     let greetUser = `Good ${timeOfDay}, ${user}!` //imploring template literals
     return greetUser;
}


console.log('Exercise 5 Result:', greetUser("Tito", "evening"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

// let max = 10

const maxOfThree = ( num1, num2, num3) => {
    
    if (num1 >= num2 && num1 >= num3) {
        // console.log('max is num1');
        return num1;
        
    } else if (num2 >= num3 && num2 >= num1) {
        // console.log('max is num2')
        return num2;

    } else {
        // console.log('max is num3');
        return num3;
    }
}


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8)); // return/largest is 10; num2 


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/



// console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/



// console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/



// console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/



// console.log('Exercise 10 Result:', calculateGrade(85));

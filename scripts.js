/*
Take somebody's name and say a greeting to them;
Write a function to subtract two numbers;
Now one to multiply two numbers. Then create a new function called threeTimes to multiply three numbers together.
Now write one to divide two numbers. Then write a new function called remainder to find the remainder of two numbers.
Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. 
Pass these as arguments to a function that returns a sentence combining all of this information. Then display the 
returned string with an alert.
*/

//Take somebody's name and say a greeting to them;
const name = prompt("What's your name?");
function sayHi() {
  alert("Hi " + name);
}
sayHi();
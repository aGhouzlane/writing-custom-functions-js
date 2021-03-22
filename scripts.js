/*Take somebody's name and say a greeting to them;*/
const name = prompt("What's your name?");
function sayHi() {
  alert("Hi " + name);
}
sayHi();

/*Write a function to subtract two numbers;*/
function substract(num1, num2) {
  return num1 - num2;
}
const total = substract(10, 5);
alert(total);

/*Now one to multiply two numbers. Then create a new function called threeTimes to multiply three numbers together.*/
function multiply(num1, num2) {
  return num1 * num2;
}
const total1 = multiply(10, 5);
alert(total1);

function multiply3(num1, num2, num3) {
  return num1 * num2 * num3;
}
const total2 = multiply3(10, 5, 10);
alert(total2);

/*Now write one to divide two numbers. Then write a new function called remainder to find the remainder of two numbers.*/
function divide(num1, num2) {
  return num1 / num2;
}
const total1 = divide(10, 5);
alert(total1);

function getRemainder(num1, num2) {
  return num1 % num2;
}
const total2 = getRemainder(10, 5);
alert(total2);

/*
Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. 
Pass these as arguments to a function that returns a sentence combining all of this information. Then display the 
returned string with an alert.
*/
const question1 = prompt("What's your name?");
const question2 = prompt("How old are you?");
const question3 = prompt("What's your favorite food?");

function displayAnswers(question1, question2, question3) {
  alert("Hi my name is " + question1 + ", I'm "
    + question2 + " years old, " + " and I love " + question3)
}

displayAnswers(question1, question2, question3);




// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 
// var char=prompt('Enter a character.');
// if (char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)
// {
//     alert('Input is an UPPERCASE letter');
// }
// else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
//     alert('Input is lowercase letter')
// }
// else if(char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57)
// {
//     alert('Input is number.');
// }
// else{
//     alert ('Invalid character entered.')
// }
//-------------------------------------------------------------------------------------------
// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
// var num1 = parseInt(prompt('enter a first number'));
// var num2 = parseInt(prompt('enter a second number'));
// if(num1>num2)
// {
//     alert(num1+ ' is greater than '+ num2);
// }else if(num1<num2)
// {
//     alert(num1+ ' is less than '+ num2);
// }
// else if(num1===num2)
// {
//     alert('First number is equals to second number.');
// }
// else{
//     alert('Invalid character entered.');
// }
// ----------------------------------------------------------------------------------------
// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

// let num = prompt('Enter a number.');
// if(num>0)
// {
//     alert('Positive Number.');
// }
// else if(num<0)
// {
//     alert('Negative Number.');
// }
// else if(num===0)
// {
//     alert(' Zero ');
// }
// else{
//     alert('Invalid number');
// }
// ----------------------------------------------------------------------------------------

// 4. Write a program that takes a character (string of length 1) and returns true if it is a vowel, false otherwise 
// var char = prompt('Enter a character').toLowerCase();
// if(char==='a'|| char==='e' || char==='i'|| char==='o'|| char==='u')
// {
//     alert('Vowel Character');
// }
// else{
//     alert('Invalid Character');
// }
// ----------------------------------------------------------------------------------------
// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: 
// i.  Check if user has entered password. If not, then  give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show  “Incorrect password” otherwise. 

// var origPswrd='123456';
// var userPswrd=prompt('Enter your password.')
// if(origPswrd===userPswrd){
//     alert('Correct! The password you entered matches the original password.')
// }
// else if(userPswrd===''){
//     alert('Please enter your password')
// }
// else{
//     alert('Incorrect Password')
// }
// ----------------------------------------------------------------------------------------
// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// }
// else {
// greeting = "Good evening"; 
// } 
// --------------------------------------------------------------------------------------
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 
var time=prompt('Enter the time');
if(time>=0 && time<12)
{
    alert('Good Morning');
}
else if(time>=12 && time<17)
{
    alert('Good Afternoon');
}
else if(time>=17 && time<21)
{
    alert('Good Evening');
}
else if(time>=21 && time<24)
{
    alert('Good Night');
}
else {
    alert('Invalid Time Entered');
}
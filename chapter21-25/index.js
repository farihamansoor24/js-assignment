// -----------------STRING METHODS-----------------//
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// let firstName=prompt('Enter Your First Name.');
// let lastName=prompt('Enter Your Last Name.');
// let fullName= firstName + lastName;
// document.writeln('Welcome to my web page ' + fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// let mobile = prompt('Enter your favourite mobile model');
// document.writeln(`My favourtie mobile is: ${mobile}. <br> Length of string: ${mobile.length}`)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 
document.writeln('String: Pakistani <br> Index of n: '+'Pakistani'.indexOf('n'));
document.writeln('<hr>')
// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
document.writeln(`<br>String:Hello World<br> Last Index of 'l':${'Hello World'.lastIndexOf('l')}<br>`)
document.writeln('<hr>')
// 5. Write a program to find the character at 3rd index in theword “Pakistani” and display the result in your browser. 
document.writeln(`String: Pakistani <br> Character at index 3:${'Pakistani'.charAt(3)}`);
document.writeln('<hr>')
// 6. Repeat Q1 using string concat() method. 
//  let firstName=prompt('Enter Your First Name.');
//  let lastName=prompt('Enter Your Last Name.');
//  let fullName= firstName.concat(" ",lastName);
// document.writeln(`${fullName}`)
// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
let text1='Hyderabad';
let text2= text1.replace('Hyder','Islam');
document.writeln(`City: Hyderabad <br> After Replacement: ${text2}`)
document.writeln('<hr>')
// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
document.writeln('<h3>Q-8</h3><br>')
var message = 'Ali and Sami are best friends. They play cricket and football together.'; 
var newMsg= message.replaceAll('and','&');
document.writeln(`<h4>Old Message:</h4> <br> ${message} <br> <h4>After replace all occurrences of “and” in the string with “&” the result is below: </h4> <br> ${newMsg}`)
document.writeln('<hr>')
// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
document.writeln('<h3>Q-9</h3><br>');
let str="472";
document.writeln(`Value: ${str}<br>Type: ${typeof(str)}<br>`);
let num= Number(472);
document.writeln(`Value: ${num}<br>Type: ${typeof(num)}`);
document.writeln('<hr>')
// 10. Write a program that takes user input. Convert and show the input in capital letters. 
document.writeln('<h3>Q-10</h3><br>Result is commented');
// let userInput= prompt('Enter your input data').toUpperCase();
// document.writeln(`Uppercase Text: ${userInput}`);
// document.writeln('<hr>')
// 11. Write a program that takes user input. Convert and show the input in title case. 
document.writeln('<h3>Q-11</h3><br>Result is commented');
// let userInput= prompt('Enter your input data');
// let firstChar = userInput[0].toUpperCase();
// document.writeln(`User Input Text: ${userInput}<br> Title Case: ${userInput.replace(userInput[0],firstChar)}`);
document.writeln('<hr>')
// 12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser. 
document.writeln('<h3>Q-12</h3>');
let num1=35.36;
let str1= num1.toString();
document.writeln(`Number: ${num1}<br>Result: ${str1.replace('.',"")}`);
document.writeln('<hr>')
// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
document.writeln('<h3>Q-13</h3> <br> Code is commented ');
// let username=prompt('Enter the username!');
// for(let i=0;i<username.length;i++){
//     if(username[i].charCodeAt()===33||username[i].charCodeAt()===44||username[i].charCodeAt()===46||username[i].charCodeAt()===64)
//     {
//         alert('Please enter a valid username.')
//         break;
//     }
//     else{
//         document.writeln(`${username}`);
//     }
// }
document.writeln('<hr>')

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
document.writeln('<h3>Q-14</h3><br>Code is commented<br>');
// let item = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let userInput = prompt('Welcome to ABC Bakery! What do you want to order sir/mam.').toLowerCase();
// let flag=0;
// for(let i=0;i<item.length;i++){
//     if(userInput === item[i])
//     {
//         document.writeln(`${item[i]} is available at index ${i}  in our bakery. `)
//         flag=1;
//         break;
//     }
    
// }
// if(flag==1){
//         document.writeln(`${item[i]} is not available  in our bakery. `)
//     }
    document.writeln('<hr>')

// 15. Write a program to take password as an input from user. The password must qualify these requirements:  a It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 
document.writeln('<h3>Q-15</h3><br>Code is commented<br>');
// let password = prompt('Enter the password!');
// if(password.length<6 )
// {
//     alert(`Entered Password: ${password} \n Password must at least 6 characters long. \n Please enter a valid password.`)
// }
// else if(password[0].charCodeAt()>=48 && password[0].charCodeAt()<=57){
//     alert(`Entered Password: ${password}\n Password can't begin with number.\n Please enter a valid password.`)
// }
// else {
//     for(let i=0;i<password.length;i++){
//     if(password[i].charCodeAt()===33||password[i].charCodeAt()===44||password[i].charCodeAt()===46||password[i].charCodeAt()===64)
//     {
//         alert(`Entered Password: ${password} \n It should contain alphabets and numbers.\n Please enter a valid password.`)
//         break;
//     }
    
// }

// }
document.writeln('<hr>');
// 16. Write a program to convert the following string to an array using string split method.Display the elements of array in your browser. 
 var university = 'University of Karachi'; 
 var uniArr= university.split('');
 for(let i=0;i<uniArr.length;i++){
    for(let j=0;j<uniArr[i].length;j++)
    {
        document.writeln(uniArr[i][j]+'<br>');
    }
 }
 document.writeln('<hr>');
//  17. Write a program to display the last character of a user input.
document.writeln('<h3>Q-17</h3><br>Code is commented<br>');

// let input= prompt('Enter input.');
// document.writeln(`User Input : ${input}<br> Last character of input:${input.charAt(input.length-1)}`)
 document.writeln('<hr>');
// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 
let str2='The quick brown fox jumps over the lazy dog';
let flag=0;
let strArr = str2.split(' ');
for(let i=0;i<strArr.length;i++){
if(strArr[i].toLowerCase()=='the'){
    flag++;
}
}
document.writeln(`Text:${str2}<br>There are ${flag} occurences of word 'the'`)
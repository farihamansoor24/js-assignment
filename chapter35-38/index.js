// ------------ FUNCTION -------------------------
// 1. Write a function that displays current date & time in your browser. 

function currentDateTime(){
    let date = new Date();
    return date;
}
// 2. Write a function that takes first & last name and then it greets the user using his full name.
function greetUser(){
    let fname= 'Fariha';
    let lname= 'Mansoor';
    let greet = 'Hello '+fname+' '+lname;
    return greet;
} 
// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
function add(num1,num2){
    let addNum=num1+num2;
    return addNum;

}

// 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 
function calculator(num1,num2,operator)
{
    if(operator=='+'){
      return num1+num2;

    }
    else if(operator=='-'){
        return Math.abs(num1-num2);
    }
    else if(operator=='*'){
        return num1*num2;
    }
    else if(operator=='/'){
        return num1/num2;
    }
    else{
        return 'Invalid Operator';
    }
}
// 5. Write a function that squares its argument.
function square(num1){
    return num1*num1;
}
// 6. Write a function that computes factorial of a number. 
function factorial(num1){
    let fact=1;
    for(let i=1; i<=num1; i++){
        fact*=i;
    }
    return fact;
}
// 7. Write a function that take start and end number as inputs & display counting in your browser. 
function count(start, end){
    for(let i=start; i<=end; i++){
        document.writeln(i);
    }
}
// 8. Write a nested function that computes hypotenuse of a right angle triangle.  
// Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()
function calculateHypotenuse() {
    let base = 10;
    let perpendicular = 15;
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}
// 9. Write a function that calculates the area of a rectangle. 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 
function calculateArea(width, height) {
    return width * height;
}
// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam. 
function isPalindrome(str) {
    // Reverse the string
    let reversed = str.split('').reverse().join('');
    // Check if the original string is equal to the reversed string
    return str === reversed;
}

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 
function toTitleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}   
// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development' 
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o' 
function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// 14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area is NN". 
// Circumference of circle=     2πr 
// Area of circle  = πr2 
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return "The circumference is " + circumference;
}
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    return "The area is " + area;
}   
document.writeln(`Current Date and Time: ${currentDateTime()}`);
document.writeln('<hr>');
document.writeln(`greetUser(): ${greetUser()}`);
document.writeln('<hr>');
document.writeln(`Addition of 5 and 10: ${add(5, 10)}`);
document.writeln('<hr>');
document.writeln(`Square of 5: ${square(5)}`);
document.writeln('<hr>');
document.writeln(`Factorial of 5: ${factorial(5)}`);
document.writeln('<hr>');
document.writeln(`Count from 1 to 10: ${count(1, 10)}`);
document.writeln('<hr>');
document.writeln(`Hypotenuse of right-angled triangle with sides 3 and 4: ${calculateHypotenuse()}`);
document.writeln('<hr>');
document.writeln(`Area of rectangle with length 5 and width 10: ${calculateArea(5, 10)}`);
document.writeln('<hr>');
document.writeln(`Is "madam" a palindrome?: ${isPalindrome("madam")}`);
document.writeln('<hr>');
document.writeln(`To Title Case: ${toTitleCase("the quick brown fox")}`);
document.writeln('<hr>');
document.writeln(`Longest word in "Web Development Tutorial": ${findLongestWord("Web Development Tutorial")}`);
document.writeln('<hr>');
document.writeln(`Occurrences of "o" in "JSResourceS.com": ${countOccurrences("JSResourceS.com", "o")}`);
document.writeln('<hr>');
document.writeln(`Circumference of circle if radius is 5: ${calcCircumference(5)}`);
document.writeln('<hr>');
document.writeln(`Area of circle if radius is 5: ${calcArea(5)}`);
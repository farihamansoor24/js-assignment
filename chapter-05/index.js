//  ---------- MATH EXPRESSIONS----------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
 var a = 5, b = 3;
 var c = a+ b;
 document.writeln('Sum of ' + a + ' and ' + b + ' is '+' '+c);
 
//  2. Repeat task1 for subtraction, multiplication, division & modules.
var sub = a - b ; 
var mul = a * b;
var div = a/b;
document.writeln('<br>Subtraction is '+ sub + ' Multiplication is '+ mul +' Division is '+div);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.
var x; //value declaration
document.writeln('<br>Value after variable declaration is: '+ x);
 x = 5; //value intialization
 document.writeln('<br>Value after initialization is: '+ x);
 x++;
 document.writeln('<br>Value after increment is: '+ x);
 x= x + 7;
  document.writeln('<br>Value after addition is: '+ x);
  x--;
   document.writeln('<br>Value after decrement is: '+ x);
   x = x/ 3;
    document.writeln('<br>Value after division is: '+ x);

//  4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:   
var ticketPrice = 600;
var totalCost = ticketPrice*5;
document.writeln('<br>Total cost to buy 5 tickets is '+ totalCost + ' PKR');

// 5. Write a script to display multiplication table of any number in your browser.
var table = 5,val;
var num=1;
document.writeln('<br> Table of '+ table);
for(num; num<=10; num++){
    val = table*num;
    document.writeln('<br>' + val);
}


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”
// Conversion Formulae:
// C= (F-32)*5/9
// F= (C*9/5) + 32
var cel=45, far;
far = (cel*9/5) + 32;
document.writeln('<br>'+cel+' C is '+ far + ' F');
 var f= 105;
var c=(f-32)*5/9; 
 document.writeln('<br>'+f+' F is '+ c + ' C');
//  ---------- MATH EXPRESSIONS----------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
 var a = 5, b = 3;
 var c = a+ b;
 document.writeln('Sum of ' + a + ' and ' + b + ' is '+' '+c);
document.writeln('<hr>'); 
//  2. Repeat task1 for subtraction, multiplication, division & modules.
var sub = a - b ; 
var mul = a * b;
var div = a/b;
document.writeln('<br>Subtraction is '+ sub + ' Multiplication is '+ mul +' Division is '+div);
document.writeln('<hr>');
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
document.writeln('<hr>');
//  4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:   
var ticketPrice = 600;
var totalCost = ticketPrice*5;
document.writeln('<br>Total cost to buy 5 tickets is '+ totalCost + ' PKR');
document.writeln('<hr>');
// 5. Write a script to display multiplication table of any number in your browser.
var table = 5,val;
var num=1;
document.writeln('<br> Table of '+ table);
for(num; num<=10; num++){
    val = table*num;
    document.writeln('<br>' + val);
}
document.writeln('<hr>');

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
document.writeln('<br>'+cel+'  <sup>o</sup>C is '+ far + '  <sup>o</sup>F');
 var f= 105;
var c=(f-32)*5/9; 
 document.writeln('<br>'+f+'  <sup>o</sup>F is '+ c + ' <sup>o</sup>C');
 document.writeln('<hr>');

//7- Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser.
var item1= 650;
var item2= 100;
var qty1= 3;
var qty2=7;
var shp_chrg= 100;
var total_cost;
total_cost =(650*3)+(100*7)+100;

document.writeln(`<h1>Shopping Card</h1>
    <p>Price of item 1: 650</p>
   <p>Price of item 2: 100</p>
    <p>Ordered quantity of item 1: 3</p> 
    <p>Ordered quantity of item 2: 7</p>
    <p>Shipping charges: 100 </p>
    <p>Total cost of your order is :`+ total_cost +` Rs.</p>`);
document.writeln('<hr>');
// 8- Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser .
var total_marks= 980;
var marks_obt= 804;
var perc = marks_obt/total_marks*100;
document.writeln(`<h1>Marks Sheet</h1>
    <p>Total Marks: 900</p>
   <p>Marks Obtained: 804</p>
    <p>Percentage: `+perc+`%</p> `);
    document.writeln('<hr>');

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var usd= 10;
var saudi_riyal=25;
var total_pkr= (usd*104.80)+(saudi_riyal*28);
document.writeln(`<h1>Currency in PKR</h1>

    <p>Total Currency in PKR: `+total_pkr+` Rs.</p> `);
    document.writeln('<hr>');

 //10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var num = 10;
var calc = ((num+5)*10)/2;
document.writeln(`<h1>Calculations in a single expression </h1>

    <p>`+calc+`</p> `);
    document.writeln('<hr>');

// 11. The Age Calculator: Forgot how old someone is?Calculate it!
//  a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
var curr_year = 2026;
var birth_year = 1990;
var poss_age = curr_year-birth_year;
document.writeln(`<h1>Age Calculator</h1>
    <p>Current Year: 2026</p>
   <p>Birth Year : 1990</p>
    <p>Your Age is: `+ poss_age+`</p> `);
    document.writeln('<hr>');

// The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var r = 20;
var pi =3.142;
var circumference= 2*pi*r;
var area=pi*r*r;
document.writeln(`<h1>The Geometrizer</h1>
    <p>Radius of circle: 20</p>
   <p>Circumference is :`+ circumference+`</p>
    <p>The Area is : `+ area +`</p> `);
    document.writeln('<hr>');

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of 
// your life. 
var fav_snack = 'lays';
var curr_age = 15;
var max_age = 65;
var snack_per_day = 3;
var tot_snack=(65-15)*3;
document.writeln(`<h1>The Lifetime Supply Calculator</h1>
   
   <p>Total snacks for the rest of 
your life. :`+ tot_snack+`</p>
   `);
    document.writeln('<hr>');





// FUNCTIONS, SWITCH STATEMENTS, WHILE… DO WHILE LOOPS 

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 
function power(a, b) {
    return Math.pow(a, b);
}
// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. 
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 
function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);
    document.writeln("Average: " + average + "<br>");
    document.writeln("Percentage: " + percentage + "<hr>");
}
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calculatePercentage(marks1, marks2, marks3) {
    var total = marks1 + marks2 + marks3;
    return (total / 300) * 100;
}
// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. 
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 
function deleteVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }
    return result;
}
// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence 
// “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui. 
function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < text.length - 1; i++) {
        switch (text[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                if (vowels.indexOf(text[i + 1]) !== -1) {
                    count++;
                }
                break;
        }
    }
    return count;
}
// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
function convertToMeters(km) {
    return km * 1000;
}
function convertToFeet(km) {
    return km * 3280.84;
}
function convertToInches(km) {
    return km * 39370.1;
}
function convertToCentimeters(km) {
    return km * 100000;
}
// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 
function calculateOvertimePay(hoursWorked) {
    var overtimeHours = hoursWorked - 40;   
    return overtimeHours * 12.00;   
}
// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 
function calculateCurrencyNotes(amount) {
    var notes = {
        100: Math.floor(amount / 100),
        50: Math.floor((amount % 100) / 50),
        10: Math.floor(((amount % 100) % 50) / 10)
    };
    return notes;
}
document.writeln("Power of 2 raised to 3 is: " + power(2, 3) + "<hr>");
document.writeln("Is 2020 a leap year? " + isLeapYear(2020) + "<hr>");
document.writeln("Area of triangle with sides 3, 4, 5 is: " + calculateTriangleArea(3, 4, 5) + "<hr>");
document.writeln("Calculating average and percentage for marks 85, 90, 95:<br>");
mainFunction(85, 90, 95);
document.writeln("Index of 'l' in 'hello': " + customIndexOf("hello", "l") + "<hr>");
document.writeln("Sentence without vowels: " + deleteVowels("Hello, World!") + "<hr>");
document.writeln("Number of successive vowels in 'Pleases read this application and give me gratuity': " + countSuccessiveVowels("Pleases read this application and give me gratuity") + "<hr>");
document.writeln("Distance in meters: " + convertToMeters(10) + "<hr>");
document.writeln("Distance in feet: " + convertToFeet(10) + "<hr>");
document.writeln("Distance in inches: " + convertToInches(10) + "<hr>");
document.writeln("Distance in centimeters: " + convertToCentimeters(10) + "<hr>");
document.writeln("Overtime pay for 45 hours worked: Rs. " + calculateOvertimePay(45) + "<hr>");
document.writeln("Currency notes for Rs. 150: " + JSON.stringify(calculateCurrencyNotes(150)) + "<hr>");
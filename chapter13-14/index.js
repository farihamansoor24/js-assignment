// ARRAYS
// 1. Declare an empty array using JS literal notation to store student names in future.
//let stud_name=[];
// --------------------------------------------------------------------------------------
// 2. Declare an empty array using JS object notation to store student names in future.
//let studentName = new Array();
// ----------------------------------------------------------------------------------------
// 3. Declare and initialize a strings array. 
//stud_name=['sara','farah','sana','rumi','arshi'];
// ---------------------------------------------------------------------------------------
// 4.  Declare and initialize a numbers array. 
let num=[24,32,53,54,65,65,76];
// --------------------------------------------------------------------------------------
// 5.  Declare and initialize a boolean array. 
let boolean=[true,false];
// -------------------------------------------------------------------------------------
// 6. Declare and initialize a mixed array.
let mixedArray=['mixed',24,true,['string1,string2'],null];
// ------------------------------------------------------------------------------------
// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: 
let qualifications=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
document.writeln('<h1>Qualifications</h1>');
for(let i=0;i<qualifications.length;i++){
    document.writeln(`<p>${i+1}) ${qualifications[i]}</p>`);
}
document.writeln('<hr>');
// ----------------------------------------------------------------------------------
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:  
let studName=['Roma','Eram','Dua'];
let score=[320,230,480];
let percentage;
for(let i=0; i<studName.length;i++){
    percentage = score[i]*100/500;
    document.writeln(`<p>Score of ${studName[i]} is ${score[i]}. Percentage: ${percentage}%</p>`);
}
document.writeln('<hr>');
// ----------------------------------------------------------------------------------------
// 9. Initialize an array with color names. Display the array elements in your browser. 

let colours=['red','pink','blue','black','white'];
document.writeln(`<h1>Initial Colors</h1>`);
for(let i=0;i<colours.length;i++){
 document.writeln(`<p> ${colours[i]}</p>`)
}
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
// let userColor= prompt('What color you want to add to the beginning');
// colours.unshift(userColor);
// document.writeln(`<h1>After adding at beginning:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
// -------------------------------------------------------------------------------------
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 

// let userColor= prompt('What color you want to add at the end.');
// colours.push(userColor);
// document.writeln(`<h1>After adding at the end:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
// -----------------------------------------------------------------------------------
// c. Add two more color to the beginning of the array.Display the updated array in your b browser. 
// colours.unshift('purple','brown');
// document.writeln(`<h1>After adding 2 more colors at the beginning:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
// --------------------------------------------------------------------------------------
// d. Delete the first color in the array. Display the updated array in your browser.
// colours.shift();
// document.writeln(`<h1>Deleted first color:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
// -------------------------------------------------------------------------------------
// e. Delete the last color in the array. Display the updated array in your browser.
// colours.pop();
// document.writeln(`<h1>Deleted last color:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
 
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
// let userIndex= +prompt('Which position you want to add a color');
// let userColor= prompt('What color you want to add that index');

// colours.splice(userIndex,0,userColor);
// document.writeln(`<h1>Color added at desired position:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
// ------------------------------------------------------------------------------------
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
// let userIndex= +prompt('From which position you want to delete a color?');
// let userColor= +prompt('How many colors you want to delete?');

// colours.splice(userIndex,userColor);
// document.writeln(`<h1>Color deleted from given position:</h1>`);
// for(i=0;i<colours.length;i++){
//  document.writeln(`<p> ${colours[i]}</p>`)
// }
// -------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
// Store student scores in an array
let scores = [85, 72, 90, 66, 78];

document.writeln("<hr><b>Original scores of students:</b> " + scores + "<br><br>");

// Sort the array in ascending order
scores.sort(function(a, b) {
    return a - b;
});

document.writeln("<b>Ordered scores of students(Ascending Order):</b> " + scores);
// ----------------------------------------------------------------------------------------
// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
let cityNames=['Karachi','Lahore','Islamabad','Hyderabad','Rawalpindi'];
let selectedCities = cityNames.slice(1,4);
document.writeln("<hr><h1>Original City Names:</h1> " + cityNames);
document.writeln("<h1>Selected Cities:</h1> " + selectedCities);

// ----------------------------------------------------------------------------------------
// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 
 var arr = ['This', 'is','my','cat'];
 document.writeln("<hr><h1>Original Array:</h1> " + arr); 
 document.writeln("<h1>Single string after join method:</h1> " + arr.join(' ')); 

//  13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 

let devices=[];
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');
 document.writeln("<hr><h1>Original Array:</h1> " + devices);
 // Access values in FIFO order
// document.writeln("<br><b>First Out:</b> " + devices.shift() + "<br>");
// document.writeln("<b>Second Out:</b> " + devices.shift() + "<br>");
// document.writeln("<b>Third Out:</b> " + devices.shift() + "<br>"); 
// document.writeln("<b>Fourth Out:</b> " + devices.shift() + "<br>"); 
// ----------------------------------------------------------------------------------------
// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out) 
 // Access values in LIFO order
document.writeln("<br><b>First Out:</b> " + devices.pop() + "<br>");
document.writeln("<b>Second Out:</b> " + devices.pop() + "<br>");
document.writeln("<b>Third Out:</b> " + devices.pop() + "<br>"); 
document.writeln("<b>Fourth Out:</b> " + devices.pop() + "<br>"); 

// -----------------------------------------------------------------------------------------
// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
let phoneBrands=['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.writeln(`<hr><select><option value="">Select</option>`);
for(let i=0;i<phoneBrands.length;i++){
        document.writeln(`<option value="">${phoneBrands[i]}</option>`);
}
document.writeln(`</select>`);
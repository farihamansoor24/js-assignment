// ARRAYS
// 1. Declare and initialize an empty multidimensional array. (Array of arrays) 
//let multiArray = [[], [], []];

// --------------------------------------------------------------------------------------
// 2. Declare and initialize a multidimensional array representing the following matrix:  
let multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for (let i=0;i<multiArray.length;i++){
    for(let j=0;j<multiArray[i].length;j++){
        document.writeln(multiArray[i][j]);
    }
    document.writeln('<br>');
}
document.writeln('<hr>');
// ----------------------------------------------------------------------------------------
// 3. Write a program to print numeric counting from 1 to 10.  
for (let i=1;i<=10;i++){

    document.writeln(i+'<br>');
}
document.writeln('<hr>');
// ---------------------------------------------------------------------------------------
// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  
//  let num= +prompt('Enter a number to show its multiplication table');
//   let length= +prompt('Enter a length of multiplication table');
//  for(let i=1;i<=length;i++)
//  {
//     document.writeln(`${num}X${i}=${num*i}<br>`)
//  }
//  document.writeln('<hr>');
// --------------------------------------------------------------------------------------
// 5.  5. Write a program to print items of the following array using for loop: 
let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'] 
for(let i=0;i<fruits.length;i++){
     document.writeln(`<p>Element at ${i+1} index is ${fruits[i]}</p>`);
}
document.writeln('<hr>');
// -------------------------------------------------------------------------------------
// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
document.writeln('<h5>Counting:</h5>')
    for(let i=1;i<=15;i++){
        if(i===15)
        {
            document.writeln(`${i}`);
        }
        else
        {
            document.writeln(`${i},`);
        }
     
}
document.writeln('<hr>');
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
document.writeln('<h5>Reverse Counting:</h5>')
    for(let i=10;i>=1;i--){
        if(i===1)
        {
            document.writeln(`${i}`);
        }
        else
        {
            document.writeln(`${i},`);
        }
     
}
document.writeln('<hr>');
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
    document.writeln('<h5>Even No.:</h5>')
    for(let i=0;i<=20;i++){
        if(i%2===0 && i<20)
        {
            document.writeln(`${i},`);
        }
        if(i===20){
            document.writeln(`${i}`);
        }
        
     
}
document.writeln('<hr>');
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
 document.writeln('<h5>Odd No.:</h5>')
    for(let i=0;i<=20;i++){
        if(i%2!=0 && i<19)
        {
            document.writeln(`${i},`);
        }
        if(i===19){
            document.writeln(`${i}`);
        }    
}
document.writeln('<hr>');
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
document.writeln('<h5>Series:</h5>')
    for(let i=2;i<=20;i++){
        if(i%2===0 && i<20)
        {
            document.writeln(`${i}k,`);
        }
        if(i===20){
            document.writeln(`${i}`);
        }
        
     
}
document.writeln('<hr>');
// ------------------------------------------------------------------------------------
// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an  array. After searching, prompt the user whether the given item is found in the list or not. Example: 
// let items=['cake','apple pie','cookie','chips','patties'];
// var userInput=prompt('What do you want to order sir/mam?').toLowerCase();
// var flag=0;
// for(let i=0;i<items.length;i++){
//     if(userInput===items[i]){
//         flag=1;
//         alert(`${userInput} is available at our bakery.`);
//         break;
//     }
// }
// if(flag===0){
//      alert(`Sorry! ${userInput} is not available at our bakery.`);
// }
// ----------------------------------------------------------------------------------
// 8. Write a program to identify the largest number in the given array. 
// Given array
let A = [24, 53, 78, 91, 12];

// Initialize largest with the first element
let largest = A[0];

// Loop through the array to find the largest number
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.writeln("The largest number in the array is: " + largest);

document.writeln('<hr>');
// ----------------------------------------------------------------------------------------
// 9. Write a program to identify the smallest number in the given array. 
let B = [24, 53, 78, 91, 12];
    // Initialize smallest with the first element
let smallest = B[0];

// Loop through the array to find the largest number
for (let i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i];
    }
}

document.writeln("The smallest number in the array is: " + smallest);
document.writeln('<hr>');
// ------------------------------------------------------------------------------------
// 10. Write a program to print multiples of 5 ranging 1 to 100.  
for(let i=1;i<=100;i++){
    if(i%5===0){
        document.writeln(`${i},`)
    }
}
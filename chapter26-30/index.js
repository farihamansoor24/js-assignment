// -------------- MATH METHODS -----------------------
// 1. Write a program that takes a positive integer from user & display the following in your browser.
// 2. Write a program that takes a negative floating point number from user & display the following in your browser.  
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number  
document.writeln(`<h4>Result of Q-1 and Q-2<br>code is commented</h4>`)
 
// let num= prompt('Enter the positive integer');
// document.writeln(`a) Number: ${Number(num)}<br> b) Round off value of the number: ${Math.round(num)} <br> c) Floor value of the number: ${Math.floor(num)}<br> d) ceil value of the number: ${Math.ceil(num)}`)
document.writeln(`<hr>`)
// 3. Write a program that displays the absolute value of a number. 
document.writeln(`<h4>Result of Q-3</h4>`)
 
let absVal= -4;
document.writeln(`The absolute value of -4 is: ${Math.abs(absVal)}`)
document.writeln(`<hr>`)

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
// Generate random number between 1 and 6
      let dice = Math.floor(Math.random() * 6) + 1;

      // Display result
      document.writeln(`random dice value: ${dice} `);
      document.writeln(`<hr>`)
// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
    let coin =Math.random()< 0.5 ? "Tails" : "Heads";
    document.writeln(`random coin value: ${coin} `);
     document.writeln(`<hr>`)
// 6. Write a program that shows a random number between 1 and 100 in your browser. 
 let ranNum = Math.floor(Math.random() * 100);

      // Display result
      document.writeln(`random number between 1 to 100 value: ${ranNum} `);
      document.writeln(`<hr>`)
// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 
 let input = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kilograms)");
document.writeln(`<h4>Result of Q-7<br>code is commented</h4>`)
    //   // Use parseFloat to extract numeric part
    //   let weight = parseFloat(input);

    //   // Check if the input was a valid number
    //   if (isNaN(weight)) {
    //     document.writeln(`Invalid input!`);
    //   } else {
    //     document.writeln(`The weight of user is: ${weight} kilograms`);
    //   }
      document.writeln(`<hr>`)
// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
 // Generate a random secret number between 1 and 10
    const secretNumber = Math.floor(Math.random() * 10) + 1;


      // Ask user for input
      let userInput = prompt("Guess the secret number (1-10)");

      // Convert input to number
      let userGuess = Number(userInput);

      // Validate input
      if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
        alert(`Please enter a valid number between 1 and 10!`);
        
      }

      // Check guess
      if (userGuess === secretNumber) {
        document.writeln(`Congratulations! You guessed the secret number: ${ secretNumber}`);
      } else {
        document.writeln(`Sorry, the secret number was: ${secretNumber} Try again!`);
      }
     

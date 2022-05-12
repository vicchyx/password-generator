// Assignment Code

//Code variables
var generateBtn = document.querySelector("#generate");
var SpcCharcfm;
var Numbrscfm;
var Lletterscfm;
var Cletterscfm;
var Cletters;
var Lletters;
var Numbers;
var SpcChar;
var pwd = [];
var passLen;
var password;
var passwordText = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Const properties - Function to retrieve the data once the user has selected their criteria
function generatePassword() {
	const Cletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const Lletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const SpcChar = ["?", "(" , "+", ".", "-", "!", "@", "#", "$", "%", "^", "&", "*"];

    // Prompt to decide the length of password to be generated
do {
    passLen = prompt("Choose a password length (From 5-130 characters)");
} while (passLen < 5 || passLen > 130);

// Prompt with questions to user to select their criteria
do {
    Cletterscfm = confirm("Should we include uppercase letters?");
    Lletterscfm = confirm("Should we include lowercase letters?");
    Numbrscfm = confirm("What about if we include numbers?");
    SpcCharcfm = confirm("Feeling like any special characters today?");
} while (Cletterscfm === false && Lletterscfm === false && Numbrscfm === false && SpcCharcfm === false);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
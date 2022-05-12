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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
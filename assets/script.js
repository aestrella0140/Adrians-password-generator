// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var characterLength;
var specialCharacters;
var num;
var upper;
var lower;

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var upperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var spchar = [",", ".", "'", "<", ">", "?", "/", ";", "!", "@", "#", "$", "%", "^", "&", "*"];



function generatePassword() {

  var password = "";
  var passwordChar = [];
  
  characterLength = window.prompt("Enter character select between 8-128:");

  characterLength = parseInt(characterLength);
  if (isNaN(characterLength)) {
    window.alert("not a number");
    return;
  } else {
    // this is just for me
    console.log("works");
  }
  if (characterLength < 8) {
    window.alert("needs to be 8 or greater");
    return;
  } else if (characterLength > 128) {
    window.alert("needs to be 128 of less");
    return;
  } else {
    // just for me
    console.log("works");
  }
  
  specialCharacters = confirm("Enter 'ok' if you want to include special characters");
  console.log("works");
  num = confirm("Enter 'ok' if you would like to include numbers");
  console.log("works");
  upper = confirm("Enter 'ok' if you would like to include uppercase letters");
  console.log("works");
  lower = confirm("Enter 'ok' if you would like to include lowercase letters");
  console.log("works");
  
  var password = '';
  
  if (specialCharacters) {
    passwordChar.push(spchar);
  } 
  if (upper) {
    passwordChar.push(upperCase);
  }
  if (lower) {
    passwordChar.push(lowerCase);
  }
  if (num) {
    passwordChar.push(numbers);
  }
  console.log(passwordChar);

  for (var i = 0; i < characterLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var nameinput = document.getElementById("nameInput");
var namevad = document.getElementById("namevalidation");

var emailinput = document.getElementById("emailinput");
var emailvad = document.getElementById("emailvalidation");

var passwordinput = document.getElementById("passwordinput");
var passwordvad = document.getElementById("passwordvalidation");

var addressinput = document.getElementById("addressinput");
var addressvad = document.getElementById("addressvalidation");

var sportinput = document.querySelectorAll('input[name="chk_valid"]');
var sportvad = document.getElementById("sportvalidation");

var genderinput = document.querySelectorAll('input[name="gender"]');
var gendervad = document.getElementById("gendervalidation");

var countryinput = document.getElementById("slc");
var countryvad = document.getElementById("countryvalidation");

var noUserElement = document.getElementById("noUser");
var tBody = document.getElementById("tBody");

// var name-input-element =
// camelCase = nameinput => nameInputElement
//  Pascal Case => NameInputElement
// Snake Case => name_input_element
//  Kebab Case => name-input-element

// camel Case => nameinput => nameInput
// Pascal Case => NameInputElement
// Snake Case=> name_input_element
// kebab case => name-input-element;

function handleValidation() {
  /* NAME VALIDATION */
  if (!nameinput.value) {
    namevad.style.display = "block";
    nameinput.style.borderColor = "red";
    console.log("enter your value");
  } else {
    namevad.style.display = "none";
    nameinput.style.borderColor = "#6c757d";
    console.log("it's okey");
  }

  /* EMAIL VALIDATION */

  if (!emailinput.value) {
    emailvad.style.display = "block";
    emailinput.style.borderColor = "red";
    console.log("enter your value");
  } else {
    emailvad.style.display = "none";
    emailinput.style.borderColor = "#6c757d";
    console.log("it's okey");
  }

  /* PASSWORD VALIDATION */

  if (!passwordinput.value) {
    passwordvad.innerHTML = "Please Enter Your Password!";
    passwordvad.style.display = "block";
    passwordinput.style.borderColor = "red";
    console.log("enter your value");
  } else if (
    passwordinput.value.length < 4 ||
    passwordinput.value.length > 12
  ) {
    passwordvad.innerHTML = "Password character must be in between 4 to 12!";
    passwordvad.style.display = "block";
    passwordinput.style.borderColor = "red";
    console.log("Password length is invalid");
  } else {
    passwordvad.innerHTML = "";
    passwordvad.style.display = "none";
    passwordinput.style.borderColor = "#6c757d";
    console.log("It's okay");
  }

  /* ADDRESS VALIDATION */

  if (!addressinput.value) {
    addressvad.style.display = "block";
    addressinput.style.borderColor = "red";
    console.log("enter your value");
  } else {
    addressvad.style.display = "none";
    addressinput.style.borderColor = "#6c757d";
    console.log("it's okey");
  }

  /* SPORT VALIDATION */

  const isAnyChecked = [];

  for (let i = 0; i < sportinput.length; i++) {
    if (sportinput[i].checked) {
      isAnyChecked.push(true);
    }
  }

  if (isAnyChecked.length == 0) {
    sportvad.style.display = "block";
    console.log("enter your value");
  } else {
    sportvad.style.display = "none";
    console.log("it's okey");
  }

  /* GENDER VALIDATION */

  const AnyChecked = [];

  for (let i = 0; i < genderinput.length; i++) {
    if (genderinput[i].checked) {
      AnyChecked.push(true);
    }
  }

  if (AnyChecked.length == 0) {
    gendervad.style.display = "block";
    console.log("enter your value");
  } else {
    gendervad.style.display = "none";
    console.log("it's okey");
  }

  /* COUNTRY VALIDATION */

  if (!countryinput.value) {
    countryvad.style.display = "block";
    countryinput.style.borderColor = "red";
    console.log("enter your value");
  } else {
    countryvad.style.display = "none";
    countryinput.style.borderColor = "#6c757d";
    console.log("it's okey");
  }

  // Check Form is valid or not
  if (
    nameinput.value &&
    emailinput.value &&
    passwordinput.value &&
    addressinput.value &&
    countryinput.value &&
    isAnyChecked.length != 0 &&
    AnyChecked.length != 0
  ) {
  }
}

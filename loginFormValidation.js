const passwordInput = document.getElementById("password");
const emailValue = document.getElementById("email").value;
const passwordValue = document.getElementById("password").value;
const submitButton = document.getElementById("submitButton");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.querySelector("errorMessage");
const eyeIcon = document.getElementById("eye");
console.log(eyeIcon.classList);
var showPass = false;
var errorArray = [];

//  loginForm.preventDefault();

function checkErrors(event) {
  event.preventDefault();
  emailValue = document.getElementById("email").value;
  passwordValue = document.getElementById("password").value;
  if (emailValue === null || emailValue.trim() === "") {
    errorArray.push("email is empty");
  } else if (!emailValue.includes("@")) {
    errorArray.push("email must have '@'");
  }

  if (passwordValue === null || passwordValue.trim() === "") {
    errorArray.push("password is empty");
  }
  showError();
}

function showError() {
  alert(errorArray);
  errorMessage.textContent(errorArray[0]);
}

function toggleShowPassword() {
  if (!showPass) {
    passwordInput.type = "text";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
    showPass = true;
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
    showPass = false;
  }
}

const password = document.querySelector("#pwd")
const confirmPassword = document.querySelector("#pwd-confirmation");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
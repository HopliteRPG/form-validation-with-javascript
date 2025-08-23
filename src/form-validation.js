export { fullFormValidation };
const form = document.querySelector("form");
const passwordInput = document.querySelector(".password-input");
const passwordConfInput = document.querySelector(".confirm-password-input");

function fullFormValidation() {
  passwordInput.addEventListener("input", passwordValidation);
  passwordConfInput.addEventListener("input", passwordValidation);
}

function passwordValidation() {
  if (passwordInput.value !== passwordConfInput.value) {
    passwordInput.setCustomValidity("Passwords do not match!");
  } else {
    passwordInput.setCustomValidity("");
  }
}

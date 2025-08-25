export { fullFormValidation };
const form = document.querySelector("form");

function fullFormValidation() {
  const passwordInput = document.querySelector(".password-input");
  const passwordConfInput = document.querySelector(".password-confirm-input");

  passwordInput.addEventListener("input", (event) => {
    if (passwordInput.value !== passwordConfInput.value) {
      passwordInput.setCustomValidity("Passwords do not match!");
    } else {
      passwordInput.setCustomValidity("");
    }
  });
  passwordConfInput.addEventListener("input", (event) => {
    if (passwordInput.value !== passwordConfInput.value) {
      passwordInput.setCustomValidity("Passwords do not match!");
    } else {
      passwordInput.setCustomValidity("");
    }
  });
}

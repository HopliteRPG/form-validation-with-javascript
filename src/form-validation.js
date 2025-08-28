export { fullFormValidation };
const form = document.querySelector("form");

function fullFormValidation() {
  emailValidation();
  zipcodeValidation();
  passwordValidation();
}

function emailValidation() {
  const emailInput = document.querySelector(".email-input");

  emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Submit a proper email address");
    } else {
      emailInput.setCustomValidity("");
    }
  });
}

function zipcodeValidation() {
  const postalCodeInput = document.querySelector(".postal-code-input");

  const postalCodeRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

  postalCodeInput.addEventListener("input", (event) => {
    if (postalCodeRegExp.test(postalCodeInput.value)) {
      postalCodeInput.setCustomValidity("");
    } else {
      postalCodeInput.setCustomValidity("Not Valid Zip Code");
    }
  });
}

function passwordValidation() {
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

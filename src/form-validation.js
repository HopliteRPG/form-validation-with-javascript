export { formValidation };

function emailInputValidation() {
  // alert("email ran");
  let emailInput = document.querySelector(".email-input");

  // if (emailInput.validity.typeMismatch) {
  //   alert("type mismatch");
  //   emailInput.setCustomValidity("I am expecting an email address!");
  //   emailInput.reportValidity();
  //   return;
  // } else {
  //   emailInput.setCustomValidity("");
  // }

  emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Submit a proper email adress");
    } else {
      emailInput.setCustomValidity("");
    }
  });
}

function postalCodeInputValidation() {
  let postalCodeInput = document.querySelector(".postal-code-input");
  let regExp = /^\d{5}(-\d{4})?$/;

  postalCodeInput.addEventListener("input", (event) => {
    if (regExp.test(postalCodeInput.value)) {
      postalCodeInput.setCustomValidity("");
    } else {
      postalCodeInput.setCustomValidity("Not Valid Zip Code");
    }
  });
}

function formValidation() {
  emailInputValidation();
  postalCodeInputValidation();
}

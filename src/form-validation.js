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
  postalCodeInput.setAttribute("max", "99999");

  if (postalCodeInput.validity.rangeOverflow) {
    postalCodeInput.setCustomValidity("I am expecting an email address!");
  } else {
    postalCodeInput.setCustomValidity("");
  }
}

function formValidation() {
  let formVar = document.querySelector("form");
  emailInputValidation();
  postalCodeInputValidation();
}

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

function passwordInputValidation() {
  let passwordInput = document.querySelector(".password-input");
  let passwordConfirmInput = document.querySelector(".password-confirm-input");

  if (passwordInput.value == passwordConfirmInput.value) {
    alert("matching");
    passwordInput.setCustomValidity("");
    passwordConfirmInput.setCustomValidity("");
  } else {
    alert("not matching");
    passwordInput.setCustomValidity("Not matching");
    passwordConfirmInput.setCustomValidity("Not matching");
    passwordInput.value = "";
    passwordConfirmInput.value = "";
  }
}

function formSubmit() {
  const form = document.querySelector("form");
  console.log(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    passwordInputValidation();
    console.log("Form submitted");

    // const formData = new FormData(form);
  });
}

function formValidation() {
  emailInputValidation();
  postalCodeInputValidation();
  formSubmit();
}

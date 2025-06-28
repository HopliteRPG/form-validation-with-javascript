export { formValidation };

function postalCodeInputValidation() {
  let postalCodeInput = document.querySelector(".postal-code-input");
  postalCodeInput.setAttribute("max", "99999");
  console.log(postalCodeInput);
  console.log("ran");
}

function formValidation() {
  postalCodeInputValidation();
}

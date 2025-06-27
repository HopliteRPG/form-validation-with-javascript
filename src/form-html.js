export { createSignUpForm };
//Declaring HTML Variables
let body = document.querySelector("body");
const formCreate = document.createElement("form");
const fieldSetCreate = document.createElement("fieldset");
const legendCreate = document.createElement("legend");
const labelCreate = document.createElement("label");
const inputCreate = document.createElement("input");
const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");

function createForm(parentDiv) {
  let cloneFormCreate = formCreate.cloneNode(true);
  parentDiv.appendChild(cloneFormCreate);
  return { cloneFormCreate };
}

function createFieldSet(form) {
  let cloneFieldSetCreate = fieldSetCreate.cloneNode(true);

  form.appendChild(cloneFieldSetCreate);
  return { cloneFieldSetCreate };
}

function createLegend(fieldset, text) {
  let cloneLegendCreate = legendCreate.cloneNode(true);
  cloneLegendCreate.textContent = text;
  console.log(cloneLegendCreate);
  fieldset.appendChild(cloneLegendCreate);
  return { cloneLegendCreate };
}

function createLabel(div, className, text) {
  let cloneLabelCreate = labelCreate.cloneNode(true);
  cloneLabelCreate.classList.add(className);
  cloneLabelCreate.textContent = text;
  div.appendChild(cloneLabelCreate);
  return { cloneLabelCreate };
}

function createInput(div, type, name, requiredOrNot) {
  let cloneInputCreate = inputCreate.cloneNode(true);
  cloneInputCreate.classList.add(name);
  div.appendChild(cloneInputCreate);
  cloneInputCreate.type = type;
  cloneInputCreate.setAttribute("name", name);

  if (requiredOrNot === true) {
    cloneInputCreate.required = true;
  } else if (requiredOrNot === false) {
    cloneInputCreate.required = false;
  }
  return { cloneInputCreate };
}

function createDivSection(parentDiv, className) {
  let cloneDivCreate = divCreate.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createButton(div, buttonText, buttonClass) {
  let cloneButtonCreate = buttonCreate.cloneNode(true);
  cloneButtonCreate.innerText = buttonText;
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  return { cloneButtonCreate };
}

//Creating the form
function createSignUpForm() {
  let form = createForm(body);
  let fieldset = createFieldSet(form.cloneFormCreate);
  createLegend(fieldset.cloneFieldSetCreate, "Sign Up Form");
  let emailDiv = createDivSection(fieldset.cloneFieldSetCreate, "input-group");
  createLabel(emailDiv.cloneDivCreate, "email-label", "Email");
  createInput(emailDiv.cloneDivCreate, "email", "email-input", true);
}

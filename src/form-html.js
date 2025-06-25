//Declaring HTML Variables
const formCreate = document.createElement("form");
const fieldSetCreate = document.createElement("fieldset");
const legendCreate = document.createElement("legend");
const inputCreate = document.createElement("input");
const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");

function createForm(parentDiv) {
  let cloneFormCreate = formCreate.cloneNode(true);
  parentDiv.appendChild(cloneFormCreate);
  return { cloneFormCreate };
}

function createFieldSet(form) {
  let cloneFieldSet = fieldSetCreate.cloneNode(true);
  form.appendChild(cloneFieldSet);
  return { cloneFieldSet };
}

function createLegend(fieldset) {
  let cloneLegend = legendCreate.cloneNode(true);
  fieldset.appendChild(cloneLegend);
  return { cloneLegend };
}

function createInput(div, type, className, requiredOrNot) {
  let cloneInput = inputCreate.cloneNode(true);
  cloneInput.classList.add(className);
  div.appendChild(cloneInput);
  cloneInput.type = type;

  if (requiredOrNot === true) {
    cloneInput.required = true;
  } else if (requiredOrNot === false) {
    cloneInput.required = false;
  }
  return { cloneInput };
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

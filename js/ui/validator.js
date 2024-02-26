const name = document.querySelector("#Name");
const nameError = document.querySelector("#NameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function nameValidator() {
    if (checkLength(name.value, 1)) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
}

function emailValidator() {
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        return false;
    }
}


function formValidator(event) {
    if (!nameValidator() || !emailValidator()) {
        event.preventDefault();
    }
}

function checkLength(value, len) {
    return value.trim().length > len;
}

function validateEmail(email) {
    const regEx = /^\S+@\S+\.\S+$/;
    return regEx.test(email);
}

const inputs = document.querySelectorAll(".contact input");
inputs.forEach(input => {
    input.addEventListener("change", formValidator);
    input.addEventListener("blur", formValidator);
});

export function setupFormValidator() {
  const form = document.querySelector("#contactForm");
  if (form) {
      form.addEventListener("submit", formValidator);
  }
}
const name = document.querySelector("#Name");
const nameError = document.querySelector("#NameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const emailSignup = document.querySelector("#emailSignup");

function nameValidator() {
    if (checkLength(name.value, 4)) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
}

function phoneNumberValidator() {
    if (checkLength(phone.value.trim(), 7)) {
        phoneError.style.display = "none";
        return true;
    } else {
        phoneError.style.display = "block";
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

function emailSignUpValidator() {
    if (validateEmail(emailSignup.value)) {
        emailError.style.display = "none";
        emailSignup.classList.remove("input-error");
        return true;
    } else {
        emailError.style.display = "block";
        emailSignup.classList.add("input-error");
        return false;
    }
}

function formValidator(event) {
    if (!nameValidator() || !phoneNumberValidator() || !emailValidator() || !emailSignUpValidator()) {
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
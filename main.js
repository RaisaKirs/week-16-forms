const form = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", () => {
  const isValid = form.checkValidity();
  submitButton.disabled = !isValid;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const namePattern = /^[a-zA-Zа-яА-Я\s]{2,20}$/;
  if (!namePattern.test(name.value)) {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!email.validity.valid) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  const age = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (!age.validity.valid || age.value < 0) {
    ageError.style.display = "block";
    isValid = false;
  } else {
    ageError.style.display = "none";
  }

  const genderError = document.getElementById("genderError");
  const gender = form.querySelector('input[name="gender"]:checked');
  if (!gender) {
    genderError.style.display = "block";
    isValid = false;
  } else {
    genderError.style.display = "none";
  }

  const profession = document.getElementById("profession");
  const professionError = document.getElementById("professionError");
  if (!profession.validity.valid) {
    professionError.style.display = "block";
    isValid = false;
  } else {
    professionError.style.display = "none";
  }

  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (!password.validity.valid) {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  const agreement = document.getElementById("agreement");
  const agreementError = document.getElementById("agreementError");
  if (!agreement.checked) {
    agreementError.style.display = "block";
    isValid = false;
  } else {
    agreementError.style.display = "none";
  }

  if (isValid) {
    console.log({
      name: name.value,
      email: email.value,
      age: age.value,
      gender: gender.value,
      profession: profession.value,
      password: password.value,
    });
    form.reset();
    submitButton.disabled = true;
  }
});

const fields = form.querySelectorAll("input, select");
fields.forEach((field) => {
  field.addEventListener("focus", () => {
    const error = document.getElementById(field.id + "Error");
    if (error) {
      error.style.display = "none";
    }
  });
  field.addEventListener("blur", () => {
    if (!field.validity.valid) {
      const error = document.getElementById(field.id + "Error");
      if (error) {
        error.style.display = "block";
      }
    }
  });
});

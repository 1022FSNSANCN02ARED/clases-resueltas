const validations = [
  {
    field: "title",
    validation: (input) => input.value.length >= 3,
    message: "Debe contener al menos tres caracteres",
  },
  {
    field: "rating",
    validation: (input) => input.value > 0 && input.value < 10,
    message: "Debe ser un valor entre 0 y 10",
  },
  {
    field: "release_date",
    validation: (input) => validator.isDate(input.value),
    message: "Debe ser una fecha válida",
  },
  {
    field: "awards",
    validation: (input) => input.value >= 0,
    message: "Debe ser un valor mayor a 0",
  },
  {
    field: "length",
    validation: (input) => input.value >= 0,
    message: "Debe ser un valor mayor a 0",
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + "Error");

  function validate() {
    inputValidation(validation, input, inputErrorMsg);
  }

  input.addEventListener("blur", validate);
  input.addEventListener("input", validate);
});

const form = document.getElementById("form");
form.addEventListener("submit", (evt) => {
  const validationsResult = []; //array de booleans
  evt.preventDefault();

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) form.submit();
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.classList.add("display");
    inputErrorMsg.innerText = "El campo no debe estar vacio";
    return false;
  }

  if (!validation.validation(input)) {
    inputErrorMsg.classList.add("display");
    inputErrorMsg.innerText = validation.message;
    return false;
  }

  inputErrorMsg.classList.remove("display");
  inputErrorMsg.innerText = "";
  return true;
}

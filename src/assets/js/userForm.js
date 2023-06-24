const beforeSubmit = (errText, path) => {
  let [input] = document.getElementsByName(path);
  let errField = input.parentElement;

  // formState.setProperty(path, errText);
  errField.classList.add("is-invalid");

  input.focus();
};

const liveValidate = (event) => {
  const rules = {
    email: {
      regExp:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      errMsg: "Nesprávný formát emailu",
      emptyErr: "Email nesmí být prázdný",
    },
    phone: {
      regExp: /^([\+][0-9]{1,3}[ \.\-]?)?([0-9]{3}[ ]?){3}$/,
      errMsg: "Chybný formát telefonního čísla",
      emptyErr: "",
    },
    subject: {
      regExp: /^(.+){0,60}$/,
      errMsg: "Předmět přesahuje maximální povolenou délku",
      emptyErr: "Předmět nesmí být prázdný",
    },
    name: {
      regExp: /^.+$/,
      errMsg: "Jméno nesmí být prázdné",
      emptyErr: "Jméno nesmí být prázdné",
    },
  };
  const parentEl = event.target.parentElement;
  if (parentEl.classList.contains("is-visited")) {
    const name = event.target.name;
    const fieldRules = rules[name];
    const fieldValue = event.target.value;
    let errorDiv;
    // test input field value
    if (
      (!event.target.required && fieldValue !== "") ||
      (event.target.required && fieldValue !== "")
    ) {
      if (!fieldRules.regExp.test(fieldValue)) {
        // formState.setProperty(name, fieldRules.errMsg);
        parentEl.classList.add("is-invalid");
        errorDiv = document.getElementById(`${name}__error`);
        console.log(errorDiv);
        displayError(errorDiv, fieldRules.errMsg);
      } else {
        // formState.setProperty(name);
        parentEl.classList.remove("is-invalid");
        errorDiv = document.getElementById(`${name}__error`);
        if (errorDiv) errorDiv.classList.add("hidden");
      }
    } else if (event.target.required && fieldValue === "") {
      // formState.setProperty(name, fieldRules.emptyErr);
      parentEl.classList.add("is-invalid");
      errorDiv = document.getElementById(`${name}__error`);
      displayError(errorDiv, fieldRules.emptyErr);
    }
  }
};

const displayError = (errorDiv, errMsg) => {
  errorDiv.classList.remove("hidden");
  errorDiv.innerHTML = `
  <span class="w-full text-yellow-500">
    ${errMsg}
  </span>
  `;
};

const onFocus = (e) => {
  e.target.parentElement.classList.add("is-focused");
};
const onFocusOut = (e) => {
  e.target.parentElement.classList.add("is-visited");
  e.target.parentElement.classList.remove("is-focused");
  liveValidate(e);
};

const form = document.querySelector("form");
const inputAreas = [
  ...form.querySelectorAll("input"),
  ...form.querySelectorAll("textarea"),
];

// console.log({ form, inputs });
// inputs.addEventListener("input", liveValidate);
inputAreas.forEach((input) => {
  input.addEventListener("focusin", onFocus);
  input.addEventListener("focusout", onFocusOut);
  input.addEventListener("input", liveValidate);
});

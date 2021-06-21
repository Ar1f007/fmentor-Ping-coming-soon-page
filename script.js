const btn = document.querySelector(".form__btn");
const inputGroup = document.querySelector(".input-group");
const formInput = document.querySelector(".form__input");
const errorMsg = document.querySelector(".form__error");

const validateEmail = e => {
  e.preventDefault();

  const email = formInput.value;
  if (email.length > 0) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      inputGroup.classList.remove("change");
      formInput.value = "";
    } else {
      inputGroup.classList.add("change");
      errorMsg.textContent = "Please provide a valid email address";
    }
  }

  if (email.length === 0) {
    inputGroup.classList.add("change");
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
  }
};

btn.addEventListener("click", validateEmail);

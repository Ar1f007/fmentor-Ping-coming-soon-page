const btn = document.querySelector(".form__btn");
const inputGroup = document.querySelector(".input-group");
const formInput = document.querySelector(".form__input");

const validateEmail = e => {
  e.preventDefault();

  const email = formInput.value;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email)) {
    inputGroup.classList.remove("change");
    formInput.value = "";
  } else {
    inputGroup.classList.add("change");
  }
};

btn.addEventListener("click", validateEmail);

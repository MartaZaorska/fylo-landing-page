const signupForm = document.getElementById("signup-form");
const signupError = document.querySelector(".signup__error");

function validateEmail(email){
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const { email } = e.target.elements;
  signupError.innerText = (!email?.value || !validateEmail(email.value)) ? "Please enter a valid email address" : "";
});
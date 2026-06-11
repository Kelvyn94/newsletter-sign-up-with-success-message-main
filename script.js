//DOM ELEMENTS
const signupCard = document.getElementById("signupCard");
const successCard = document.getElementById("successCard");
const newsletterform = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const submittedEmailSpan = document.getElementById("submittedEmail");
const dismissBtn = document.getElementById("dismissBtn");

// Email Validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Show error State
function showError(message) {
  emailInput.classList.add("error");
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
}

//Hide error state

function hideError() {
  emailInput.classList.remove("error");
  errorMessage.classList.remove("show");
}

//Show success message with submitted email
function showSuccessMessage(email) {
  submittedEmailSpan.textContent = email;
  signupCard.classList.add("hidden");
  successCard.classList.remove("hidden");

  //Optional: Focus management for accessibility
  successCard.querySelector("h2").focus();
}

//Reset to signup form
function resetToSignup() {
  successCard.classList.add("hidden");
  signupCard.classList.remove("hidden");
  emailInput.value = "";
  hideError();

  //Return focus to email input
  emailInput.focus();
}

//Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  //Check if email is empty
  if (email === "") {
    showError("Email address is required");
    return;
  }

  //Check if email format is valid
  if (!isValidEmail(email)) {
    showError("Valid email required");
    return;
  }

  //All validations passed
  hideError();
  showSuccessMessage(email);
}

//Real-time validation (Helps improve UX)
function handleEmailInput() {
  if (emailInput.classList.contains("error")) {
    const email = emailInput.value.trim();
    if (email !== "" && isValidEmail(email)) {
      hideError();
    }
  }
}

//Dismiss button handler
function handleDismiss() {
  resetToSignup();
}

//Keyboard accessibility for dismiss button
function handleDismissKeyPress(event) {
  if (event.key == "Enter" || event.key === "") {
    event.preventDefault();
    handleDismiss();
  }
}

//Event Listeners
newsletterform.addEventListener("submit", handleFormSubmit);
emailInput.addEventListener("input", handleEmailInput);
dismissBtn.addEventListener("click", handleDismiss);
dismissBtn.addEventListener("keydown", handleDismissKeyPress);

//Focus management on page load - set focus to email input.

window.addEventListener("load", () => {
  emailInput.focus();
});

//Handle escape key to dismiss success message
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !signupCard.classList.contains("hidden")) {
    //Already on signup, do nothing
    return;
  }

  if (event.key == "Escape" && !successCard.classList.contains("hidden")) {
    handleDismiss();
  }
});

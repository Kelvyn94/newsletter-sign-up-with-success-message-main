# Frontend Mentor - Newsletter sign-up form with success message

## Overview

### The Challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links

- Live Site URL: https://kelvyn94.github.io/newsletter-sign-up-with-success-message-main/

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation)

### What I Learned

This project helped me practice and understand:

#### 1. Form Validation in JavaScript

I learned how to validate email inputs in real-time and provide helpful error messages:

```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

if (email === "") {
  showError("Email address is required");
} else if (!isValidEmail(email)) {
  showError("Valid email required");
}
```

const form = document.querySelector("form")
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {

    if (email.validity.valid) {

        emailError.textContent = "";
        emailError.className = "error"

    } else {
        showError();
    } 
    
});

form.addEventListener("submit", (event) => {

    if (!email.validity.valid) {
        showError();

        // Cancel the submition as the email field is not valid
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        // For when the field is empty
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        // For when doesn't contain the correct type of value
        emailError.textcontent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        // For when the data is too short
        emailError.textContent = `Email should be at least ${email.minLength} characters.`;
    }

    // Set styling
    emailError.className = "error active"
}
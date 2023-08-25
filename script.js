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
})
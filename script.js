const form = document.querySelector("form")
//const email = document.getElementById("mail");
//const emailError = document.querySelector("#mail + span.error");

// test
const fields = document.querySelectorAll("input");
const errors = document.querySelectorAll("span");
// test

fields.forEach((field) => {
    field.addEventListener("input", (event) => {
        // Chooses the next sibling in the HTML structure, which should be a SPAN
        var spanError = field.nextElementSibling;

        if (field.validity.valid) {

            spanError.textContent = "";
            spanError.className = "error";
    
        } else {
            showError(field, spanError);
        } 
    });
    
});



/*email.addEventListener("input", (event) => {

    if (email.validity.valid) {

        emailError.textContent = "";
        emailError.className = "error"

    } else {
        showError();
    } 
    
});*/

form.addEventListener("submit", (event) => {
    console.log("This works...");
    fields.forEach((field) => {
        var spanError = field.nextElementSibling;
        console.log(`${field.getAttribute}`);
        if (!field.validity.valid) {
            
            showError(field, spanError);
    
            // Cancel the submition as the email field is not valid
            event.preventDefault();
        }
    });


    /*if (!email.validity.valid) {
        showError();

        // Cancel the submition as the email field is not valid
        event.preventDefault();
    }*/
});
//
//
//
//Test
function showError(input, errorField) {
    if (input.validity.valueMissing) {
        // For when the field is empty
        console.log("The field is empty");
        errorField.textContent = "You need to enter an email address.";
    } else if (input.validity.typeMismatch) {
        console.log("Wrong type")
        // For when doesn't contain the correct type of value
        errorField.textContent = "Entered value needs to be an email address.";
    } else if (input.validity.tooShort) {
        console.log("Too short")
        // For when the data is too short
        errorField.textContent = `Email should be at least ${input.minLength} characters.`;
    }

    // Set styling
    errorField.className = "error active"
};
//Test
//
//
//


/*function showError() {
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
}*/
const form = document.querySelector("form")
const fields = document.querySelectorAll("input");
const errors = document.querySelectorAll("span");


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


form.addEventListener("submit", (event) => {
    
    fields.forEach((field) => {
        var spanError = field.nextElementSibling;
        
        if (!field.validity.valid) {
            
            showError(field, spanError);
            

            // Cancel the submition as the field is not valid
            event.preventDefault();
        }
        
        if (field.getAttribute("name").includes("pwd")) {
            
            if(field.value) {
                var passwordCheck = checkPasswords();
                console.log(`Value of checkPasswords are ${passwordCheck}`);
                if (!(passwordCheck)) {
                    showError(field, spanError, true);
                    event.preventDefault();
                } /*else {
                    spanError.textContent = "";
                    spanError.className = "error";
                }*/
            }
        }
    });

});


function showError(input, errorField, isPassword = false) {

    if (input.validity.valueMissing) {
        // For when the field is empty
        errorField.textContent = "You need to enter a value.";
    } else if (input.validity.typeMismatch) {
        // For when doesn't contain the correct type of value
        errorField.textContent = "Please enter an accepted format";
    } else if (input.validity.tooShort) {
        // For when the data is too short
        errorField.textContent = `Value should be at least ${input.minLength} characters.`;
    };

    if (isPassword) {
        errorField.textContent = "Passwords do not match";
    }

    // Set styling
    errorField.className = "error active"
};

function checkPasswords(){
    const passwordField = document.querySelector("input[name='pwd']");
    const confirmPasswordField = document.querySelector("input[name='pwdc");

    if (passwordField.value != confirmPasswordField.value) {
        return false;
    } else {
        return true;
    }
};
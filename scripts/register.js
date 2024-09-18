// Select form by id
const registerForm = document.querySelector("#register-form");


// Handle form submit event
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.target)
    console.log(
        formData.get("Username"),
        formData.get("Email"),
        formData.get("Password")
    );
    // save user information
    // send a confirmation email
    // display succes message
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Account Registered Succesfully";
});

// age variable
const age = 44;
// square of age
function squareOfAge(age) {
    const squaredAge = age ** 2;
    return squaredAge ** 2;

}

const squaredAge = squareOfAge(45);


// function to get full name
function fullName(firstName, lastName) {
    // return fullName
    return `${firstName} ${lastName}`;
}
const myFullName = fullName("Mabel", "Hackman");


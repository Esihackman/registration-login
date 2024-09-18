// select form by id
const loginFoam = document.querySelector('#login-form');

// handle form sumbit event
loginFoam.addEventListener('submit',function(event) {
    event.preventDefault();


// collect foam data
const formData = new FormData(event.target);
console.log(
    formData.get('Username'),
    formData.get('Password')
);
const messageH1 = document.querySelector('#message');
messageH1.textContent = 'Account Login Succesful'
});
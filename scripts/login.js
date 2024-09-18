// select form by id
const loginForm = document.querySelector ('#login-form')
// handle form login event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.target)
    console.log(
        formData.get('username'),
        formData.get('password')
    );
    // Save user information
    // Send confirmation email
    // Display success message
    const messageH1 = document.querySelector ('#message');
    messageH1.textContent = 'Logged In Successfully!'
})
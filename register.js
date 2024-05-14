// API endpoint for creating a new user
document.getElementById("RegForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

const apiUrl = '';

// Make a POST request using the Fetch API
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
})
.then(response => {
    if (response.ok) {
        document.getElementById("message").innerText = "Account created";
    } else {
        document.getElementById("message").innerText = "Please enter all the valid credentials";
    }
})
.catch(error => console.error('Error during login:', error));
});









    // .then(response => {
    //    if (!response.ok) {
    //     throw new Error('User Password is incorrect');
    //     }
    //     return response.json();
    // })
    // .then(newUserData => {
    //     // Process the newly created user data
    //     console.log('Login Data:', newUserData);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
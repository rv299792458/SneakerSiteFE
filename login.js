// API endpoint for creating a new user
document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

const apiUrl = 'https://7527-125-18-94-34.ngrok-free.app/login';

// Make a POST request using the Fetch API
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: formData.get('username'),
    password: formData.get('password')
})
.then(response => {
    if (response.ok) {
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
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
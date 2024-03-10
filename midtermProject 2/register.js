console.log("Register script loaded");

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve registered users' data from localStorage
    let userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if the email already exists
    const emailExists = userData.some(user => user.email === email);

    if (emailExists) {
        // Display message for existing email
        document.getElementById('message').innerHTML = '<p id="message">This email already exists. Please <a href="login.html">Login</a>.</p>';

    } else {
        // Create an object to store user data
        const newUser = {
            name: name,
            email: email,
            password: password
        };

        // Add the new user to the existing user data
        userData.push(newUser);

        // Store updated user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Display success message
        document.getElementById('message').innerHTML = 'Registration successful. Please <a href="login.html">Login</a>.</p>';

    }
});

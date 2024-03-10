document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve registered users' data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if user exists and password matches
    const user = userData.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Sign in successful!');
        // Redirect or perform further actions for signed-in user
    } else {
        // Display error message
        document.getElementById('login-error').innerText = 'Email or Password is incorrect. Please try again.';
    }
});

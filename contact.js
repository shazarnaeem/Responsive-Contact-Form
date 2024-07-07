// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formMessage').textContent = '';
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    let hasError = false;
    
    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        hasError = true;
    }
    
    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        hasError = true;
    }
    
    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        hasError = true;
    }
    
    // If no errors, show success message
    if (!hasError) {
        document.getElementById('formMessage').textContent = 'Form submitted successfully!';
        alert("Form submitted successfully!");
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}

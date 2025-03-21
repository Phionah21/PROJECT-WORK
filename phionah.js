document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('password').addEventListener('input', function() {
    checkPasswordStrength();
});

function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name === '') {
        showError('name', 'Please enter your name!');
        isValid = false;
    } else {
        hideError('name');
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address!');
        isValid = false;
    } else {
        hideError('email');
    }

    // Password validation and strength check
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password === '') {
        showError('password', 'Please enter your password!');
        isValid = false;
    } else {
        hideError('password');
        checkPasswordStrength(); // Check password strength
    }

    if (confirmPassword === '') {
        showError('confirmPassword', 'Please confirm your password!');
        isValid = false;
    } else {
        hideError('confirmPassword');
    }

    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match!');
        isValid = false;
    } else {
        hideError('confirmPassword');
    }

    // Mobile number validation
    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[0-9]{10}$/; // Adjust pattern as needed
    if (!mobilePattern.test(mobile)) {
        showError('mobile', 'Please enter a valid mobile number!');
        isValid = false;
    } else {
        hideError('mobile');
    }

    // Language validation
    const language = document.getElementById('language').value;
    if (language === '') {
        showError('language', 'Please select a language!');
        isValid = false;
    } else {
        hideError('language');
    }

    // Attachment validation
    const attachment = document.getElementById('attachment').value;
    if (attachment === '') {
        showError('attachment', 'Please upload a valid file!');
        isValid = false;
    } else {
        hideError('attachment');
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError('gender', 'Please select your gender!');
        isValid = false;
    } else {
        hideError('gender');
    }

    // Terms and conditions validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        showError('terms', 'You must accept the terms and conditions!');
        isValid = false;
    } else {
        hideError('terms');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const passwordField = document.getElementById('password');
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 1:
            passwordField.className = 'weak';
            break;
        case 2:
            passwordField.className = 'medium';
            break;
        case 3:
            passwordField.className = 'medium';
            break;
        case 4:
            passwordField.className = 'strong';
            break;
        default:
            passwordField.className = '';
    }
}

function showError(field, message) {
    const errorElement = document.getElementById(field + 'Error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(field) {
    const errorElement = document.getElementById(field + 'Error');
    errorElement.style.display = 'none';
}
# Registration Form with Validation

## Project Description
This project is a responsive registration form with real-time validation. The form includes fields for name, email, password, confirm password, mobile number, language selection, file attachment, gender selection, and terms of use acceptance. The form is designed to be user-friendly and aesthetically pleasing, with real-time validation and password strength indicators.

## Features
- Real-time validation for each field
- Password strength indicator
- Responsive design for various devices and screen sizes
- Enhanced styling and animations for better user experience

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Run the Project
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/registration-form.git
Navigate to the project directory:
cd registration-form
Open the index.html file in your web browser:
open index.html
Form Fields
Name: A text input field for the user's name, with a validation message if left empty.
Email: A text input field for the user's email address, validated for correct email format.
Password: A password input field with a strength indicator.
Confirm Password: A field to verify the password matches the original entry.
Mobile Number: A text input field for the user's mobile number, validated for required input.
Language: A dropdown selection for choosing a language.
Attachment: A file input field for uploading files, restricted to .JPG, .PNG, .PDF, or .ZIP formats.
Gender: A radio button group for selecting a gender (Male or Female).
Terms of Use: A checkbox to accept the terms and conditions before submission.
Validation
Name: Must not be empty.
Email: Must be a valid email format.
Password: Must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.
Confirm Password: Must match the password.
Mobile Number: Must be a valid 10-digit number.
Language: Must select a language.
Attachment: Must upload a valid file.
Gender: Must select a gender.
Terms of Use: Must accept the terms and conditions.

If you plan to connect this form to a database, you can use the following schema:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    mobile VARCHAR(10) NOT NULL,
    language VARCHAR(50) NOT NULL,
    attachment VARCHAR(255),
    gender ENUM('Male', 'Female') NOT NULL,
    terms BOOLEAN NOT NULL
);

Contact
For any questions or feedback, please contact your nphionah21@gmail.com

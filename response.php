<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission - Used Furniture Sales</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
            padding: 0;
            background-color: #f4f4f4;
        }

        h1 {
            color: #333;
            text-align: center;
        }

        .response-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .success-message {
            color: #4caf50;
        }

        .error-message {
            color: #ff0000;
        }

        .submitted-data {
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h1>Contact Form Submission</h1>

    <div class="response-container">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Validate and process the form data
            $errorMessages = validateForm();

            if (empty($errorMessages)) {
                // Form submitted successfully
                echo '<p class="success-message">Thank you for submitting the form! We will get back to you soon.</p>';

                // Display submitted data
                echo '<div class="submitted-data">';
                echo '<h2>Submitted Data:</h2>';
                echo '<p><strong>Full Name:</strong> ' . htmlspecialchars($_POST["fullName"]) . '</p>';
                echo '<p><strong>Email:</strong> ' . htmlspecialchars($_POST["email"]) . '</p>';
                echo '<p><strong>Phone Number:</strong> ' . htmlspecialchars($_POST["phoneNumber"]) . '</p>';
                echo '<p><strong>Subject:</strong> ' . htmlspecialchars($_POST["subject"]) . '</p>';
                echo '<p><strong>Message:</strong> ' . htmlspecialchars($_POST["message"]) . '</p>';
                echo '<p><strong>Preferred Contact Method:</strong> ' . htmlspecialchars($_POST["preferredContact"]) . '</p>';
                echo '<p><strong>Item of Interest:</strong> ' . htmlspecialchars($_POST["itemOfInterest"]) . '</p>';
                echo '<p><strong>How Did You Hear About Us:</strong> ' . htmlspecialchars($_POST["howDidYouHear"]) . '</p>';
                echo '<p><strong>Additional Information:</strong> ' . htmlspecialchars($_POST["additionalInfo"]) . '</p>';
                echo '</div>';
            } else {
                echo '<p class="error-message">' . implode('<br>', $errorMessages) . '</p>';
            }
        } else {
            header("Location: index.html");
            exit();
        }

        function validateForm() {
            $errors = array();
            return $errors;
        }
        ?>
    </div>

</body>
</html>

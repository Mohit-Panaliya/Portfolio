<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form fields
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address
    $to = "mohitpanaliya0@gmail.com";  // 🔴 Replace with YOUR email

    // Email subject
    $mail_subject = "New Contact Form Message: " . $subject;

    // Email body
    $body = "
    You have received a new message from your portfolio contact form:

    Name: $name
    Email: $email
    Subject: $subject

    Message:
    $message
    ";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $mail_subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>

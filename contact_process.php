

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // User's email address for acknowledgment
    $userEmail = $_POST['email'];

    // Configure the email
    $to = "Akashbtechitofficial@gmail.com"; // Replace with your recipient email address
    $subject = "You have a message from the backend.";

    $message = "Dear " . $_POST['name'] . "," . "\r\n";
    $message .= "Thank you for contacting us. We have received your message and will get back to you as soon as possible." . "\r\n";
    $message .= "Subject: " . $_POST['subject'] . "\r\n";
    $message .= "Message: " . $_POST['message'] . "\r\n";
    $message .= "We appreciate your interest in our services." . "\r\n" . "\r\n";
    $message .= "Best regards," . "\r\n";
    $message .= "Your Company Name"; // Replace with your company name

    $headers = "From: akashmassoffical@gmail.com"; // Replace with your email address

    // Send the acknowledgment email
    $acknowledgmentEmailSent = mail($userEmail, "Thank you for contacting us", $message, $headers);

    // Check if the acknowledgment email was sent
    if ($acknowledgmentEmailSent) {
        echo "Thank you for contacting us. We have sent you an acknowledgment email.";
    } else {
        echo "Message delivery failed. Please try again later.";
    }
}
?>

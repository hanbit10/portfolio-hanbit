<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Handle CORS preflight cleanly
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    // Read payload
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    // CRITICAL FIX: Ensure $params isn't broken or empty
    if (!$params || empty($params->email) || empty($params->name)) {
        http_response_code(400);
        echo json_encode([
            "status" => "error", 
            "message" => "Backend received completely empty or corrupted payload object.",
            "raw_received" => $json
        ]);
        exit;
    }

    // Extract variables from payload
    $email = $params->email;
    $name = $params->name;
    $message = $params->message;

    $recipient = 'chanbit10@gmail.com';  
    $subject = "Contact From <$email>";
    $email_content = "From: " . htmlspecialchars($name) . "<br><br>" . nl2br(htmlspecialchars($message));

    // Initialize PHPMailer
    $mail = new PHPMailer(true);

    try {
        // --- SMTP SERVER CONFIGURATION ---
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';                 // SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'your-email@gmail.com';           // CHANGE THIS to your email
        $mail->Password   = 'your-app-password';              // CHANGE THIS to your App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // TLS encryption
        $mail->Port       = 587;                              // TCP port

        // --- RECIPIENTS ---
        $mail->setFrom('noreply@mywebsite.com', 'Portfolio Form');
        $mail->addAddress($recipient);                        // Send to yourself
        $mail->addReplyTo($email, $name);                     // Reply-to goes to user

        // --- CONTENT ---
        $mail->isHTML(true);                                  // HTML format
        $mail->Subject = $subject;
        $mail->Body    = $email_content;

        // Send it!
        $mail->send();
        
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error", 
            "message" => "PHPMailer failed to send.",
            "error_details" => $mail->ErrorInfo
        ]);
    }
    exit;
}

// Reject anything else (GET, PUT, DELETE, etc.)
header("Allow: POST", true, 405);
exit;
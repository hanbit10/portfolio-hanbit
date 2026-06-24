<?php
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

    // Validate we actually received data
    if (!$params || empty($params->email)) {
        http_response_code(400);
        echo json_encode(["error" => "No data or empty email received"]);
        exit;
    }

    $email = $params->email;
    $name = $params->name;
    $message = $params->message;

    $recipient = 'chanbit10@gmail.com';  
    $subject = "Contact From <$email>";
    $email_content = "From: " . htmlspecialchars($name) . "<br>" . nl2br(htmlspecialchars($message));

    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        'From: noreply@mywebsite.com'
    ];

    // Attempt to send
    if (mail($recipient, $subject, $email_content, implode("\r\n", $headers))) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        // If it reaches here, Render has no built-in mail utility!
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "PHP mail() failed server execution environment setup."]);
    }
    exit;
}

// Reject anything else
header("Allow: POST", true, 405);
exit;
<?php
/**
 * Created by PhpStorm.
 * User: willi
 * Date: 01/12/2018
 * Time: 00:49
 */

use libs\php\PHPMailer\PHPMailer;
use libs\php\PHPMailer\Exception;

require_once 'autoLoad.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    //
    //$mail->SMTPDebug = 2// Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'ssl0.ovh.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'william.ngbama@nw-pres.fr';                 // SMTP username
    $mail->Password = 'humain-wil785';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($_POST['email']);
    $mail->addAddress('william.ngbama@gmail.com');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST['objet'];
    $mail->Body    = $_POST['message'];
    $mail->AltBody = 'Réponse demande de stage';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
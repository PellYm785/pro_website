<?php

use \libs\php\PHPMailer\PHPMailer;
use \libs\php\PHPMailer\Exception;

require_once 'autoLoad.php';

$phpMailer = new PHPMailer();

include 'templates/header.php';
if (file_exists('model/LM.xml')) {
    $xml = simplexml_load_file('model/LM.xml');
} else {
    exit('Echec lors de l\'ouverture du fichier LM.xml.');
}
include 'templates/lm.php';
$cv = include 'model/donnees_cv.php';
include 'templates/cv.php';
include 'templates/contact.php';
include 'templates/footer.html';

?>

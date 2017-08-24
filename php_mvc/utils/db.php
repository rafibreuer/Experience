<?php

$cs = 'mysql:host=localhost;dbname=portfolio';
$user = 'phpuser';
$password = 'p@$$ward';
try {
    $db = new PDO($cs, $user, $password);
} catch (PDOException $e) {
    require"view/error.php";
    die($e->getMessage());
}
?>

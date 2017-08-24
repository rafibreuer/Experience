<?php

include'utils/db.php';
include'utils/functions.php';
try {
    $query = "SELECT * FROM pcs_stuff ORDER BY name";
    $statement = $db->query($query);
    $results = $statement->fetchAll();
} catch (DBOException $e) {
    require "view/error.php";
}

if (!empty($_POST['sefer'])) {
    $sefers = $_POST['sefer'];
}

if (!empty($_POST['confirm'])) {
    try {
        $query = 'DELETE FROM pcs_stuff WHERE';
        $delimeter = '';
        foreach ($sefers as $sefer) {
            $query .= "$delimeter id = ?";
            $delimeter = ' OR';
        }

        $statement = $db->prepare($query);
        $deleted = $statement->execute($sefers);
    } catch (PDOException $e) {
        $error = $e->getMessage();
        include 'view/error.php';
        exit;
    }
}
?>
